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
       <Text>GreenFeed</Text>
       </View>
       </SafeAreaView>
      );
  }
