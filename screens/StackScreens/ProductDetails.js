import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";
import ProductStyles from "../../styles/ProductStyles";

import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, update } from "firebase/database";
import { fetchProductsByCategory } from "../../api/api"; // Importer funktionen til at hente produkter fra api.js

import GGlogoComponent from "../../components/GGlogo";
import ProductImage from "../../components/ProductImage";
import RemoveButtonComponent from "../../components/RemoveButtonComponent";
import FoldOutMenuComponent from "../../components/FoldOutMenuComponent";

export default function ProductDetails({ route, navigation }) {
  const { product } = route.params;
  // bruges til skalaen af co2 udledning
  const [products, setProducts] = useState([]);
  const [scaleRange, setScaleRange] = useState({ min: 0, max: 0 });

  // bruges til indkøbskurv-funktionen
  const [isAdded, setIsAdded] = useState(false);

  // Funktion til at hente produkter fra samme kategori som det valgte produkt
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const categoryProducts = await fetchProductsByCategory(
          product.Kategori
        );
        setProducts(categoryProducts);
        const co2Values = categoryProducts
          .map((p) => parseFloat(p.Total_kg_CO2e_pr_kg))
          .filter((value) => !isNaN(value)); // Fjern non-numeric værdier
        setScaleRange({
          min: Math.min(...co2Values),
          max: Math.max(...co2Values),
        });
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, [product.Kategori]);

  const getScalePosition = (value) => {
    const { min, max } = scaleRange;
    const numericValue = parseFloat(value);
    if (isNaN(numericValue)) return 0; // Handle non-numeric values
    return ((numericValue - min) / (max - min)) * 100;
  };

  // Funktion til at tilføje et produkt til indkøbslisten
  const addToShoppingList = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const db = getDatabase();
        const userShoppingListRef = ref(db, `shoppingLists/${user.uid}`);

        // Tilføjer varen til indkøbsliste
        await update(userShoppingListRef, {
          [product.Produkt]: product,
        });

        setIsAdded(true);
        console.log("Product added to shopping list");
      } else {
        console.log("User is not logged in");
      }
    } catch (error) {
      console.error("Error adding to shopping list: ", error);
    }
  };

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <GGlogoComponent />
      <View style={[GlobalStyles.productContainer, GlobalStyles.box]}>
        <Text style={GlobalStyles.underTitle}>{product.Produkt}</Text>
        <ProductImage product={product} />
        <Text style={GlobalStyles.text}>
          CO2 aftryk: {product.Total_kg_CO2e_pr_kg.toFixed(2)} kg CO2e/kg
        </Text>
        <Text style={GlobalStyles.mediumText}>
          Dette produkt hører under kategorien: {product.Kategori}
        </Text>

        {/*Skala over CO2*/}
        <View style={ProductStyles.scaleContainer}>
          <View style={ProductStyles.scale}>
            <View
              style={[
                ProductStyles.scaleMarker,
                { left: `${getScalePosition(product.Total_kg_CO2e_pr_kg)}%` },
              ]}
            />
            <Text style={ProductStyles.scaleMarkerLabel}>
              {product.Total_kg_CO2e_pr_kg.toFixed(2)} kg CO2e/kg
            </Text>
          </View>
          <View style={ProductStyles.scaleLabels}>
            <Text style={ProductStyles.scaleLabel}>0,00 kg CO2e/kg</Text>
            <Text style={ProductStyles.scaleLabelHigh}>
              {scaleRange.max.toFixed(2)} kg CO2e/kg
            </Text>
          </View>
        </View>

        {/*Produkt information*/}
        {product.Season && (
          <Text style={GlobalStyles.mediumText}>
            Sæsonen for {product.Produkt.toLowerCase()} er {product.Season}{" "}
          </Text>
        )}
        <FoldOutMenuComponent product={product} />

        {/*Knap til at tilføje vare til indkøbsliste*/}
        {isAdded ? (
          <RemoveButtonComponent
            productName={product.Produkt}
            onRemove={() => setIsAdded(false)}
          >
            <Text style={GlobalStyles.text}>
              {"Varen er tilføjet til din indkøbsliste: Slet varen"}
            </Text>
          </RemoveButtonComponent>
        ) : (
          <TouchableOpacity
            style={GlobalStyles.button}
            onPress={addToShoppingList}
          >
            <Text style={GlobalStyles.buttonText}>
              {"Tilføj varen til din indkøbsliste"}
            </Text>
          </TouchableOpacity>
        )}
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Text style={[GlobalStyles.smallText, GlobalStyles.textToLeft]}>
            Husk, at tallene ikke er direkte sammenlignelige, da man spiser
            forskellige mængder af fødevarer, f.eks. mere kartofler end ris.
            {"\n"}
            {"\n"}
            Dette data er fra Den Store Klimadatabase lavet af Concito
          </Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
