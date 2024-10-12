import React, { useState, useEffect, memo } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TextInput,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { getDatabase, ref, get } from "firebase/database";
import GlobalStyles from "../styles/GlobalStyles";

const ProductItem = memo(({ item, onPress }) => (
  <TouchableOpacity style={GlobalStyles.productItem} onPress={onPress}>
    <Text style={GlobalStyles.text}>{item.Produkt}</Text>
  </TouchableOpacity>
));

export default function Search({ navigation }) {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase(); // Use the already initialized Firebase app
        const dbRef = ref(db, "products");
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          setProducts(Object.values(data));
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []); // Empty array as dependency means this runs only once when the component mounts

  useEffect(() => {
    if (query === "") {
      setFilteredProducts([]);
    } else {
      setFilteredProducts(
        products.filter((product) =>
          product.Produkt.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  }, [query, products]);

  // Sort the filtered products alphabetically by product name
  const sortedProducts = filteredProducts.sort((a, b) =>
    a.Produkt.localeCompare(b.Produkt)
  );

  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Greener Goods</Text>
      <Text style={GlobalStyles.underTitle}>Søg efter et produkt </Text>
      <View style={[GlobalStyles.searchBar, GlobalStyles.box]}>
        <Ionicons style={GlobalStyles.searchIcon} name="search" size={20} />
        <TextInput
          style={GlobalStyles.textInput}
          placeholder="Hvad leder du efter?"
          value={query}
          onChangeText={setQuery}
        />
        {query.length > 0 && (
          <View style={GlobalStyles.clearIconContainer}>
            <TouchableOpacity onPress={() => setQuery("")}>
              <Ionicons
                style={GlobalStyles.clearIcon}
                name="close-circle"
                size={20}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Display the filtered products, and not before */}
      {query !== "" && (
        <FlatList
          data={sortedProducts}
          keyExtractor={(item, index) =>
            item.id ? item.id.toString() : index.toString()
          }
          renderItem={({ item }) => (
            <ProductItem
              item={item}
              onPress={() =>
                navigation.navigate("ProductDetails", { product: item })
              }
            />
          )}
        />
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
