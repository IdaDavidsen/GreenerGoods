import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import ProductStyles from "../styles/ProductStyles";

const FoldOutMenuComponent = ({ product }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleVisibility} style={ProductStyles.button}>
        <Text style={ProductStyles.buttonText}>
          {isVisible ? "Skjul næringsindholdet" : "Se næringsindholdet"}
        </Text>
      </TouchableOpacity>
      {isVisible && (
        <View style={ProductStyles.menu}>
          <Text style={GlobalStyles.mediumText}>
            Energi indhold: {product.Energi_KJ_100g} kcal/100g
          </Text>
          <Text style={GlobalStyles.mediumText}>
            Protein indhold: {product.Protein_g_100g} g/100g
          </Text>
          <Text style={GlobalStyles.mediumText}>
            Fedt indhold: {product.Fedt_g_100g} g/100g
          </Text>
          <Text style={GlobalStyles.mediumText}>
            Kulhydrat indhold: {product.Kulhydrat_g_100g} g/100g
          </Text>
        </View>
      )}
    </View>
  );
};

export default FoldOutMenuComponent;
