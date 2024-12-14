import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, get } from "firebase/database";

import GGlogoComponent from "../../components/GGlogo";
import RemoveButtonComponent from "../../components/RemoveButtonComponent";

import GlobalStyles from "../../styles/GlobalStyles";
import ShoppingListStyles from "../../styles/ShoppingListStyles";

export default function ShoppingList({}) {
  const [shoppingList, setShoppingList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checkedItems, setCheckedItems] = useState({});

  useEffect(() => {
    const fetchShoppingList = async () => {
      try {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
          const db = getDatabase();
          const shoppingListRef = ref(db, `shoppingLists/${user.uid}`);
          const snapshot = await get(shoppingListRef);

          if (snapshot.exists()) {
            const data = snapshot.val();
            const products = Object.values(data); // konvertere object til array
            setShoppingList(products);
          } else {
            console.log("No shopping list available");
          }
        }
      } catch (error) {
        console.error("Error fetching shopping list: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchShoppingList();
  }, []);

  const toggleCheckbox = (productName) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [productName]: !prevCheckedItems[productName],
    }));
  };

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

          <View style={ShoppingListStyles.checkboxContainer}>
            <TouchableOpacity
              style={ShoppingListStyles.checkbox}
              onPress={() => toggleCheckbox(item.Produkt)}
            >
              {checkedItems[item.Produkt] && (
                <Text style={ShoppingListStyles.checkboxIcon}>✓</Text>
              )}
            </TouchableOpacity>

          <RemoveButtonComponent
            productName={item.Produkt}
            setShoppingList={setShoppingList}
            referenceType="shoppingLists"
          />
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={GlobalStyles.background}>
      <GGlogoComponent />
      <Text style={GlobalStyles.underTitle}>Din indkøbsliste</Text>
      {loading ? (
        <Text style={GlobalStyles.text}>Henter indkøbsliste...</Text>
      ) : shoppingList.length === 0 ? (
        <Text style={GlobalStyles.text}>
          Du har ingen varer på din indkøbslisten
        </Text>
      ) : (
        <FlatList
          data={shoppingList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderProductItem}
        />
      )}
    </SafeAreaView>
  );
}
