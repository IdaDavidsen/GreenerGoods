import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, Image } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import { getDatabase, ref, get } from "firebase/database"; // Import necessary functions from Firebase
import GreenerGoodsComponent from "../components/GreenerGoods";

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
          .filter((key) => productsData[key].Season && productsData[key].Season.includes(currentMonthNameDanish))
          .map((key) => ({ id: key, ...productsData[key] }));
        setProducts(productsInSeason);
      }
    } catch (error) {
      console.error("Error fetching products in season:", error);
    }
  };

  return (
    <View style={GlobalStyles.container}>
      <GreenerGoodsComponent />
      <Text style={GlobalStyles.underTitle}>Varer i sæson</Text>
      <ScrollView vertical={true} style={{ marginVertical: 10 }}>
        {products.map((product) => (
          <View key={product.id} style={GlobalStyles.seasonContainer}>
            <Text style={GlobalStyles.underTitle}>{product.Produkt}</Text>
            {product.Produkt === "Agurk" && ( 
              <Image
                source={require("../assets/food/agurk.png")}
                style={{ width: 120, height: 100 }}
              />
            )}
            <Text style={GlobalStyles.text}>
              CO2 aftryk: {product.Total_kg_CO2e_pr_kg.toFixed(2)} kg CO2e/kg
            </Text>
          </View>
        ))}
      </ScrollView>
     
      <StatusBar style="auto" />
    </View>
  );
}
