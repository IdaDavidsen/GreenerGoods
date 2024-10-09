import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";
import { useState } from "react";

export default function ProductDetails({ route, navigation }) {
  const { product } = route.params;
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Greener Goods</Text>
      <Text style={GlobalStyles.text}>
        Her skal der være produktinformationer
      </Text>
      <Text style={GlobalStyles.underTitle}>{product.Produkt}</Text>
      <Text style={GlobalStyles.text}>
        CO2 aftryk: {product.Total_kg_CO2e_kg} kg CO2e/kg
      </Text>
      {/* Add more product details here */}
      <StatusBar style="auto" />
    </View>
  );
}
