import React from "react";
import { View, Text, SafeAreaView, FlatList } from "react-native";
import GGlogoComponent from "../../components/GGlogo";
import GlobalStyles from "../../styles/GlobalStyles";
import ShoppingListStyles from "../../styles/ShoppingListStyles";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, get, remove } from "firebase/database";
import RemoveButtonComponent from "../../components/RemoveButtonComponent";

export default function SavedProducts({ route }) {
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
    // sikrer kun rendering, når der er produkter
    if (!item.Produkt) return null;

    return (
      <View style={ShoppingListStyles.productCard}>
        <View
          style={[
            GlobalStyles.productItem,
            ShoppingListStyles.productTextContainer,
          ]}
        >
          <View style={{ flexDirection: "column" }}>
            <Text style={[GlobalStyles.text, { right: 90 }]}>
              {item.Produkt}
            </Text>
            <Text style={[GlobalStyles.smallText, { right: 90 }]}>
              CO2 aftryk:
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
      <Text style={GlobalStyles.underTitle}>Dine favorit varer</Text>
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
