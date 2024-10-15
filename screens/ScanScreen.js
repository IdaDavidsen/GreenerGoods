import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import GreenerGoodsComponent from "../components/GreenerGoods";

export default function ProfileScreen() {
  return (
     <SafeAreaView style={GlobalStyles.container}>
     <GreenerGoodsComponent/>
     <View >
        <Text style={GlobalStyles.underTitle}>Scan dit produkt her</Text>
      </View>
        </SafeAreaView>
    );
  }
  