import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getApps, initializeApp } from "firebase/app";
import Ionicons from "react-native-vector-icons/Ionicons";

import GlobalStyles from "./styles/GlobalStyles";

// screens
import Coop from "./screens/CoopScreen";
import Home from "./screens/HomeScreen";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrTaP41sy8mc5Tusm1--bJLu0vwz9ih3s",
  authDomain: "greenergoods.firebaseapp.com",
  databaseURL:
    "https://greenergoods-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "greenergoods",
  storageBucket: "greenergoods.appspot.com",
  messagingSenderId: "220300318592",
  appId: "1:220300318592:web:f173601bc2eaebe95e5365",
};

// Initialiser Firebase kun hvis det ikke allerede er initialiseret
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name=" "
          component={Coop}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('./assets/coop.png')}
                style={{ width: 30, height: 30}}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Hjem"
          component={Home}
          options={{ tabBarIcon: () => <Ionicons name="home" size={20} /> }}
        />
       </Tab.Navigator>
    </NavigationContainer>  );
}