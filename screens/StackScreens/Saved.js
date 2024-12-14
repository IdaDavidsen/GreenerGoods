import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";

import GGlogoComponent from "../../components/GGlogo";
import RemoveButtonComponent from "../../components/RemoveButtonComponent";

import GlobalStyles from "../../styles/GlobalStyles";
import ShoppingListStyles from "../../styles/ShoppingListStyles";


export default function SavedProducts({ }) {
  const [savedProducts, setSavedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSavedProducts = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
          const db = getDatabase();
          const savedProductsRef = ref(db, `savedProducts/${user.uid}`);
          const snapshot = await get(savedProductsRef);

          if (snapshot.exists()) {
            const data = snapshot.val();
            const products = Object.values(data); // konvertere object til array
            setSavedProducts(products);
          } else {
            console.log("No saved products available");
          }
        }
      } catch (error) {
        console.error("Error fetching saved products: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSavedProducts();
  }, []);

  const renderProductItem = ({ item }) => {
    return (
      <View style={[GlobalStyles.container, ShoppingListStyles.productCard]}>
      <View
        style={[
          GlobalStyles.productItem,
          ShoppingListStyles.productTextContainer,
        ]}
      >
         <View>
            <Text style={GlobalStyles.text}>{item.Produkt}</Text>
            <Text style={GlobalStyles.smallText}>
            CO2 aftryk: {item.Total_kg_CO2e_pr_kg.toFixed(2)} kg CO2e/kg
              </Text>
          </View>

          <RemoveButtonComponent
            productName={item.Produkt}
            setSavedProducts={setSavedProducts}
            referenceType="savedProducts"
          />
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={GlobalStyles.background}>
      <GGlogoComponent />
      <Text style={GlobalStyles.underTitle}>Dine gemte favoritter</Text>
      {loading ? (
        <Text style={GlobalStyles.text}>Henter varer...</Text>
      ) : savedProducts.length === 0 ? (
        <Text style={GlobalStyles.text}>Du har ingen favorit varer endnu</Text>
      ) : (
        <FlatList
          data={savedProducts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderProductItem}
        />
      )}
    </SafeAreaView>
  );
}
