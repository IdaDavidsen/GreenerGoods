import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, Dimensions } from "react-native";
import SignUpForm from "../components/SignUpComponent";
import LoginForm from "../components/LogInComponent";
import GlobalStyles from "../styles/GlobalStyles";
import GreenerGoodsComponent from "../components/GreenerGoods";

export default function GreenFeedScreen() {
    return (
       <SafeAreaView style={GlobalStyles.container}>
       <View>
       <GreenerGoodsComponent/>
       </View>
       <View>
       <Text style={GlobalStyles.underTitle}>GreenFeed</Text>
       <Text>Udforsk hvordan du kan lave lækker mad samtidig med at du passer på miljøet</Text>
       </View>
       </SafeAreaView>
      );
  }
