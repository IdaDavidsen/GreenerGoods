import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity, SafeAreaView, Alert } from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";
import { useEffect, useState } from "react";
import GGlogoComponent from "../../components/GGlogo";
import ProductImage from "../../components/ProductImage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, update } from "firebase/database";
import RemoveButtonComponent from "../../components/RemoveButtonComponent";

export default function ProductDetails({ route, navigation }) {
  const { product } = route.params;
  const [isAdded, setIsAdded] = useState(false); // State for at tjekke om varen er tilføjet 

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
          CO2 aftryk: {product.Total_kg_CO2e_pr_kg.toFixed(2)} kg CO2e/kg {"\n"}
        </Text>
        {product.Season && (
          <Text style={GlobalStyles.text}>
            Sæsonen for {product.Produkt.toLowerCase()} er {product.Season}{" "}
            {"\n"}
          </Text>
        )}
        <Text style={GlobalStyles.text}>
          Energi indhold: {product.Energi_KJ_100g} kcal/100g
        </Text>
        <Text style={GlobalStyles.text}>
          Protein indhold: {product.Protein_g_100g} g/100g
        </Text>
        <Text style={GlobalStyles.text}>
          Fedt indhold: {product.Fedt_g_100g} g/100g
        </Text>
        <Text style={GlobalStyles.text}>
          Kulhydrat indhold: {product.Kulhydrat_g_100g} g/100g
        </Text>
        {/*Knap til at tilføje vare til indkøbsliste*/}
        {isAdded ? (
          <RemoveButtonComponent
            productName={product.Produkt}
            onRemove={() => setIsAdded(false)}>
              <Text style={GlobalStyles.text}>{"Varen er tilføjet til din indkøbsliste: Slet varen"}</Text>
            </RemoveButtonComponent>
          
        ) : (
          <TouchableOpacity 
            style={GlobalStyles.button}
            onPress={addToShoppingList}
          >
            <Text style={GlobalStyles.text}>{ "Tilføj varen til din indkøbsliste"}</Text>
          </TouchableOpacity>
        )}
        <View style={{ flex: 1, justifyContent: "flex-end" }}>
          <Text style={[GlobalStyles.smallText, GlobalStyles.textToLeft]}>
            Dette data er fra Den Store Klimadatabase lavet af Concito
          </Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
