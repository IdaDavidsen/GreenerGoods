import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { getApps, initializeApp } from "firebase/app";
import { useState, useEffect } from "react";

import {
  getAuth,
  onAuthStateChanged,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getApp } from "firebase/app";

// Navigation
import TabNavigator from "./navigation/tabNavigator";

// Firebase configuration
import { firebaseConfig } from "./config/firebaseConfig";

// Theme
import { ThemeProvider } from "./context/ThemeContext";

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
    auth = getAuth(app);
  } catch (error) {
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(ReactNativeAsyncStorage),
    });
  }

  // Heri defineres en funktion, der tager en callback som argument, og returnerer en listener, der observerer om brugeren er logget ind eller ej.
  function onAuthStateChange(callback) {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        // User er signed in
        const uid = user.uid;
        callback({ loggedIn: true, user: user });
        console.log("You are logged in!");
      } else {
        // User er signed out
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

  return (
    <ThemeProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
