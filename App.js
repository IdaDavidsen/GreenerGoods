import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getApps, initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

// screens
import Home from "./screens/HomeScreen";
import SearchStackComponent from "./components/SearchStackComponent";
import ProfileStackComponent from "./components/ProfileStackComponent";
import ScanStackComponent from "./components/ScanStackComponent";
import GreenFeedScreen from "./screens/GreenFeedScreen";

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

// Initialize Firebase
export default function App() {
  const [user, setUser] = useState({ loggedIn: false });
  // Kontrollering af at der ikke allerede er en initialiseret instans af firebase
  if (getApps().length < 1) {
    initializeApp(firebaseConfig);
    console.log("Firebase On!");
  }
  const auth = getAuth();
  // Heri defineres en funktion, der tager en callback som argument, og returnerer en listener, der observerer om brugeren er logget ind eller ej.
  function onAuthStateChange(callback) {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        callback({ loggedIn: true, user: user });
        console.log("You are logged in!");
      } else {
        // User is signed out
        callback({ loggedIn: false });
      }
    });
  }
  //Heri aktiveres en listener i form af onAuthStateChanged, så vi dynamisk observerer om brugeren er aktiv eller ej.
  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  // Initialiser Firebase kun hvis det ikke allerede er initialiseret
  if (!getApps().length) {
    initializeApp(firebaseConfig);
  }

  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
       screenOptions={{
        tabBarActiveTintColor: '#6e8840',
        tabBarInactiveTintColor: '#967859', 
      }}>
        <Tab.Screen
          name="Hjem"
          component={Home}
          options={{
            tabBarIcon: () => <Ionicons name="home" size={20} />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="GreenFeed"
          component={GreenFeedScreen}
          options={{
            tabBarIcon: () => <Ionicons name="leaf" size={20} />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Søg"
          component={SearchStackComponent}
          options={{
            tabBarIcon: () => <Ionicons name="search" size={20} />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Scan"
          component={ScanStackComponent}
          options={{
            tabBarIcon: () => <Ionicons name="camera" size={20} />,
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Profil"
          component={ProfileStackComponent}
          options={{
            tabBarIcon: () => <Ionicons name="person" size={20} />,
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
