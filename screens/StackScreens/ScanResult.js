import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import GlobalStyles from "../../styles/GlobalStyles";
import { useState } from "react";
import GGlogoComponent from "../../components/GGlogo";

export default function ScanResult({ route, navigation }) {
  return (
    <View>
      <GGlogoComponent />
      <Text> Scan result </Text>
    </View>
  );
}
