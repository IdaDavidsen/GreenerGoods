import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getDatabase, ref, get } from "firebase/database";

import GlobalStyles from "../styles/GlobalStyles";
import GreenerGoodsComponent from "../components/GreenerGoods";
import ProductImage from "../components/ProductImage";

const monthNamesDanish = [
  "januar",
  "februar",
  "marts",
  "april",
  "maj",
  "juni",
  "juli",
  "august",
  "september",
  "oktober",
  "november",
  "december",
];

export default function Home() {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  // Products in season
  useEffect(() => {
    fetchProductsInSeason();
  }, []);

  const fetchProductsInSeason = async () => {
    try {
      const currentMonthIndex = new Date().getMonth();
      const currentMonthNameDanish = monthNamesDanish[currentMonthIndex];

      const db = getDatabase();
      const dbRef = ref(db, "products");
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        const productsData = snapshot.val();
        const productsInSeason = Object.keys(productsData)
          .filter(
            (key) =>
              productsData[key].Season &&
              productsData[key].Season.includes(currentMonthNameDanish)
          )
          .map((key) => ({ id: key, ...productsData[key] }));
        setProducts(productsInSeason);
      }
    } catch (error) {
      console.error("Error fetching products in season:", error);
    }
  };

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <GreenerGoodsComponent />
      <Text style={GlobalStyles.underTitle}>Varer i sæson</Text>
      <ScrollView vertical={true} style={{ marginVertical: 10 }}>
        {products.map((product) => (
          <TouchableOpacity
            key={product.id}
            style={GlobalStyles.seasonContainer}
            onPress={() => navigation.navigate("ProductDetails", { product })}
          >
            <Text style={GlobalStyles.underTitle}>{product.Produkt}</Text>
            <ProductImage product={product} />
            <Text style={GlobalStyles.text}>
              CO2 aftryk: {product.Total_kg_CO2e_pr_kg.toFixed(2)} kg CO2e/kg
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
