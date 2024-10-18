// ShoppingListScreen.js
import React from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import LogoComponent from '../../components/LogoComponent';
import GlobalStyles from '../../styles/GlobalStyles';
import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';

export default function ShoppingList({route}) {
 
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push(doc.data());
    });
    setProducts(products);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if(loading) {
    return <Text>Indlæser indkøbsliste</Text>
  }

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <LogoComponent/>
     <Text style={GlobalStyles.underTitle}>Din indkøbsliste</Text>
      {/* Her kan du tilføje din liste eller anden funktionalitet */}

      <FlatList
        data={products} // Viser varerne fra Firestore
        keyExtractor={(product) => product.id}
        renderProduct={({ product }) => (
          <View style={{ padding: 10, borderBottomWidth: 1, borderColor: "#ccc" }}>
            <Text>{product.name}</Text>  {/* Viser varenavn */}
          </View>
        )}
      />
      <View style={{flexDirection: 'row'}}>
        <View style={{justifyContent: 'flex-start'}}>
        <Text style={GlobalStyles.text}>Produktet</Text>
        <Text style={GlobalStyles.text}>Co2 aftryk:</Text>
        </View>
        <TouchableOpacity title="tjek"></TouchableOpacity>

      
      </View>
    </SafeAreaView>
  );
}

