import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity } from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";
import { useState } from "react";
import { doc, updateDoc, setDoc, arrayUnion } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { Text, View, Image, SafeAreaView } from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";
import { useState } from "react";
import GGlogoComponent from "../../components/GGlogo";
import ProductImage from "../../components/ProductImage";


export default function ProductDetails({ route, navigation }) {
  const { product } = route.params;
    
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
        <TouchableOpacity
          onPress={addToShoppingList} 
          style={GlobalStyles.button}
          >
          <Text>Tilføj vare til indkøbsliste</Text>
        </TouchableOpacity>
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
