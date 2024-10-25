// ShoppingListScreen.js
import React from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import GGlogoComponent from '../../components/GGlogo';
import GlobalStyles from '../../styles/GlobalStyles';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, get, remove } from 'firebase/database';
import RemoveButtonComponent from '../../components/RemoveButtonComponent';

export default function ShoppingList({route}) {
  const [shoppingList, setShoppingList] = useState([]);
  const [loading, setLoading] = useState(true);

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

  // Render each product in the shopping list
  const renderProductItem = ({ item }) => {
    // sikrer kun rendering, når der er produkter 
    if (!item.Produkt|| !item.Produkt) return null;

    return (
    <View style={[GlobalStyles.productItem, { flexDirection: "row", justifyContent: "space-between" }]}>
      <Text style={GlobalStyles.text}>{item.Produkt}</Text>
      <RemoveButtonComponent productName={item.Produkt} setShoppingList={setShoppingList} />
    </View>
  );
}

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <GGlogoComponent/>
     <Text style={GlobalStyles.underTitle}>Din indkøbsliste</Text>
      {loading ? (
        <Text style={GlobalStyles.text}>Henter indkøbsliste...</Text>
      ) : shoppingList.length === 0 ? (
        <Text style={GlobalStyles.text}>Du har ingen varer på din indkøbslisten</Text>
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

