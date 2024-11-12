import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, TextInput, View, Image, Dimensions } from "react-native";
import SignUpForm from "../components/SignUpComponent";
import LoginForm from "../components/LogInComponent";
import GlobalStyles from "../styles/GlobalStyles";
import GreenerGoodsComponent from "../components/GreenerGoods";
import HavredrikTilbudComponent from "../components/Havredrik";
import KvicklyComponent from "../components/Kvickly";

export default function GreenFeedScreen() {
    return (
       <SafeAreaView style={GlobalStyles.container}>
       <GreenerGoodsComponent/>
       <Text style={GlobalStyles.underTitle}>GreenFeed</Text>
       <Text style={GlobalStyles.text}>Få inspiration til grønne tilbud</Text>
      
      <View style={styles.card}>
      <KvicklyComponent/>

        <View style={{position: 'absolute', left: 10}}>
        <Text style={GlobalStyles.underTitle}>Naturli økologisk</Text>
        <Text style={GlobalStyles.underTitle}>Havredrik</Text>
        </View>
       
        <HavredrikTilbudComponent/>

        <View style={styles.iconContainer}>
            <Text style={styles.icon}>♡  🛒</Text>
        </View>
       </View>
       </SafeAreaView>
      );
  }

  const styles = StyleSheet.create({
    card: {
      backgroundColor: '#f9f9f9', // lys baggrundsfarve
      borderRadius: 10,
      padding: 16,
      width: 350,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 5,
      elevation: 3,
      marginHorizontal: 10,
      marginTop: 20,
      height: 200,
      shadowOpacity: 0.25,
    },
    iconContainer: {
      flexDirection: 'row',
      marginTop: 10,
    },
    icon: {
      fontSize: 20,
      marginHorizontal: 10,
      color: '#333',
      position: 'absolute',
      left: 260,
      top: 140,
    },
  });