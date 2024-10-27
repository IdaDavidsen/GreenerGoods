import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, Dimensions } from "react-native";
import SignUpForm from "../components/SignUpComponent";
import LoginForm from "../components/LogInComponent";
import GlobalStyles from "../styles/GlobalStyles";
import GreenerGoodsComponent from "../components/GreenerGoods";
import HavredrikTilbudComponent from "../components/Havredrik";

export default function GreenFeedScreen() {
    return (
       <SafeAreaView style={GlobalStyles.container}>
       <View>
       <GreenerGoodsComponent/>
       </View>
       <View>
       <Text style={GlobalStyles.underTitle}>GreenFeed</Text>
       <Text style={GlobalStyles.text}>Få inspiration til grønne tilbud</Text>
       </View>
       
       <View style={GlobalStyles.seasonContainer}>
        <Text style={GlobalStyles.underTitle}>Naturli økologisk Havredrik</Text>
        <HavredrikTilbudComponent/>
       </View>
       
       </SafeAreaView>
      );
  }
