import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View, TouchableOpacity } from "react-native";
import { useState } from "react";

// Andre filer og komponenter
import SignUpForm from "../components/SignUpComponent";
import LoginForm from "../components/LogInComponent";
import GlobalStyles from "../styles/GlobalStyles";
import GreenerGoodsComponent from "../components/GreenerGoods";
import ShoppingList from "./StackScreens/ShoppingList";
import Saved from "./StackScreens/Saved";

export default function ProfileScreen({navigation}) {
  // styer login/signup tilstanden
  const [isLogin, setIsLogin] = useState(true);
  // styrer om inputflerne vises
  const [showInput, setShowInput] = useState(false);
  
  return (
     <SafeAreaView style={GlobalStyles.container}>
     <GreenerGoodsComponent/>
     <View>
        <Text style={GlobalStyles.text}>Hej</Text>
        <TouchableOpacity onPress={() => setShowInput(true)}> 
          <Text style={GlobalStyles.buttonText}>Log ind</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() =>
          navigation.navigate("Saved")
        }> 
          <Text style={GlobalStyles.buttonText}>Gemte</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() =>
          navigation.navigate("ShoppingList")
        }>
          <Text style={GlobalStyles.buttonText}>Indkøbsliste</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate("BehindGG")}
        >
          <Text style={GlobalStyles.buttonText}>Bag om GreenerGoods</Text>
        </TouchableOpacity>
      </View>
      <View>
      {showInput && (isLogin ? (
      <LoginForm switchToSignUp={() => setIsLogin(false)}/>
      ) : (
      <SignUpForm switchToLogin={() => setIsLogin(true)}/>
      )
      )}
     </View>
        </SafeAreaView>
    );
  }
  
  export const Input = () => (
    <TextInput style={{ width: 200, height: 50, backgroundColor: 'lightgrey', borderRadius:10 }} />
  );