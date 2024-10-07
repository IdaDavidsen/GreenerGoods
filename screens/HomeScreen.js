import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import { getDatabase, ref, get } from "firebase/database"; // Import necessary functions from Firebase

const monthNamesDanish = [
  "januar", "februar", "marts", "april", "maj", "juni",
  "juli", "august", "september", "oktober", "november", "december"
];

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductsInSeason();
  }, []);

  const fetchProductsInSeason = async () => {
    try {
      const currentMonthIndex = new Date().getMonth(); // getMonth() returns 0-11
      const currentMonthNameDanish = monthNamesDanish[currentMonthIndex];
      console.log(currentMonthNameDanish); // This will log the current month name in Danish

      const db = getDatabase(); // Use the already initialized Firebase app
      const dbRef = ref(db, "products");
      const snapshot = await get(dbRef);
      // console.log(snapshot); // This will log the snapshot of products

      if (snapshot.exists()) {
        const data = snapshot.val();
        const productsInSeason = Object.values(data).filter(
          (product) =>
            product.season && product.season.includes(currentMonthNameDanish)
        );
        console.log("Products in season:", productsInSeason); // Log the products in season
        setProducts(productsInSeason);
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>GreenerGoods {"\n"}</Text>
      <Text style={GlobalStyles.underTitle}>Varer i sæson</Text>
      <ScrollView horizontal={true} style={{ marginVertical: 10 }}>
        {products.map((product) => (
          <View key={product.id} style={GlobalStyles.productContainer}>
            <Text style={GlobalStyles.text}>{product.Produkt}</Text>
            <Text style={GlobalStyles.text}>
              CO2 aftryk {product.Total_kg_CO2e_kg.toFixed(2)} kg CO2e/kg
            </Text>
          </View>
        ))}
      </ScrollView>
      <Text style={GlobalStyles.underTitle}>Grønne anbefalinger</Text>
      <StatusBar style="auto" />
    </View>
  );
}