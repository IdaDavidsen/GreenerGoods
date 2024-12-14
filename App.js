import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getApps, initializeApp } from "firebase/app";
import { useState, useEffect } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

// login
import { getAuth, onAuthStateChanged, initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage"
import { getApp } from "firebase/app";

// screens
import HomeStackComponent from "./components/StackComponents/HomeStackComponent";
import SearchStackComponent from "./components/StackComponents/SearchStackComponent";
import ProfileStackComponent from "./components/StackComponents/ProfileStackComponent";
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
  let app;
  if (getApps().length < 1) {
    app = initializeApp(firebaseConfig);
    console.log("Firebase On!");
  } else {
    app = getApp();
  }

   // Initialize Firebase Auth hvis den ikke allerede er initialiseret
   let auth;
   try {
     auth = getAuth(app); // Get existing auth instance
   } catch (error) {
     auth = initializeAuth(app, {
       persistence: getReactNativePersistence(ReactNativeAsyncStorage),
     });
   }

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
          tabBarActiveTintColor: "#6e8840",
          tabBarInactiveTintColor: "#967859",
        }}
      >
        <Tab.Screen
          name="Hjem"
          component={HomeStackComponent}
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
