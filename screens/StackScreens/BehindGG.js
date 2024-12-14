import React from "react";
import { View, Text, StyleSheet } from "react-native";
import GGlogoComponent from "../../components/GGlogo";
import GlobalStyles from "../../styles/GlobalStyles";

export default function BehindGG() {
  return (
    <View style={GlobalStyles.background}>
      <GGlogoComponent />
      <Text style={GlobalStyles.underTitle}>Bag om GG</Text>
      <Text style={GlobalStyles.mediumText}>
        {"\n"}
        Kado til dig for at gøre en forskel for klimaet!
        {"\n"}
        {"\n"}
        Vi ved, at det kan være svært at finde ud af, hvad der er godt for
        klimaet og hvad der ikke er. Derfor er Greener Goods udviklet!
        {"\n"}
        {"\n"}
        Greener Goods leverer forståeligt og objektiv information om produkters
        klimaaftryk fra Concitos klimadatabase
        {"\n"}
        {"\n"}
        {"\n"}
        {"\n"}
        Har du ideer, spørgsmål eller andre bemærkninger, så tov ikke med at
        kontakte os på: hello@greenergoods.com
      </Text>
    </View>
  );
}
