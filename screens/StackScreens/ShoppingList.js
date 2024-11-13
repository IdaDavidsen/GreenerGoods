// ShoppingListScreen.js
import React from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
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
    <View style={styles.productCard}>
    <View style={[GlobalStyles.productItem, { flexDirection: "row", justifyContent: "center" }]}>
      
      <View style={{flexDirection: "column"}}>
      <Text style={[GlobalStyles.text, {right: 90}]}>{item.Produkt}</Text>
      <Text style={[GlobalStyles.smallText, {right:90}]}>CO2 aftryk:</Text>
      </View>

      
      <View style={styles.checkboxStyle}>
      <View style={styles.checkbox}>
          <Text style={styles.checkboxIcon}>✓</Text> 
      </View>
      <RemoveButtonComponent productName={item.Produkt} setShoppingList={setShoppingList} style={styles.deletebtn}/>
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

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginVertical: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    width: 350,
  },
  productTextContainer: {
    flexDirection: 'column',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  co2Text: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
    right: 90, 
  },
  checkbox: {
    width: 40,
    height: 40,
    borderWidth: 2,
    borderColor: '#3c763d',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    left: 100,
  },
  checkboxIcon: {
    fontSize: 16,
    color: '#3c763d',
  },
  deletebtn: {
    top: 50,
  },

})