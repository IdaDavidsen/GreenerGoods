import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeStackComponent from "../components/StackComponents/HomeStackComponent";
import SearchStackComponent from "../components/StackComponents/SearchStackComponent";
import ProfileStackComponent from "../components/StackComponents/ProfileStackComponent";
import GreenFeedScreen from "../screens/GreenFeedScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
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
  );
}
