// ShoppingListScreen.js
import React from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import GGlogoComponent from '../../components/GGlogo';
import GlobalStyles from '../../styles/GlobalStyles';
import ShopppingListStyles from '../../styles/ShoppingListStyles';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref, get, remove } from 'firebase/database';
import RemoveButtonComponent from '../../components/RemoveButtonComponent';
import ShoppingListStyles from '../../styles/ShoppingListStyles';


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
    <View style={ShopppingListStyles.productCard}>
    <View style={[GlobalStyles.productItem, ShoppingListStyles.productTextContainer]}>
      
      <View style={{flexDirection: "column"}}>
      <Text style={[GlobalStyles.text, {right: 90}]}>{item.Produkt}</Text>
      <Text style={[GlobalStyles.smallText, {right:90}]}>CO2 aftryk:</Text>
      </View>

      
      <View style={ShopppingListStyles.checkboxStyle}>
      <View style={ShopppingListStyles.checkbox}>
          <Text style={ShopppingListStyles.checkboxIcon}>✓</Text> 
      </View>
      <RemoveButtonComponent productName={item.Produkt} setShoppingList={setShoppingList}/>
      </View>


      </View>
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