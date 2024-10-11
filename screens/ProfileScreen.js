import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import SignUpForm from "../components/SignUpComponent";
import LoginForm from "../components/LogInComponent";
import GlobalStyles from "../styles/GlobalStyles";
import GreenerGoodsComponent from "../components/GreenerGoods";

export default function ProfileScreen() {
    return (
     <SafeAreaView style={GlobalStyles.container}>
     <GreenerGoodsComponent/>
     <View >
        <Text style={GlobalStyles.text}>Hej</Text>
        <Text style={GlobalStyles.text}>Gemte post</Text>
        <Text style={GlobalStyles.text}>Indkøbsliste</Text>
        <Text style={GlobalStyles.text}>Bag om GreenerGoods</Text>
     <SignUpForm/>
      <LoginForm/>
     </View>
        </SafeAreaView>
    );
  }
  
  export const Input = () => (
    <TextInput style={{ width: 200, height: 50, backgroundColor: 'lightgrey', borderRadius:10 }} />
  );