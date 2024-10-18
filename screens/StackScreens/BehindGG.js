// ShoppingListScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GGlogoComponent from '../../components/GGlogo';
import GlobalStyles from '../../styles/GlobalStyles';

export default function BehindGG() {
  return (
    <View style={GlobalStyles.container}>
      <GGlogoComponent/>
      <Text style={GlobalStyles.underTitle}>Bag om GG</Text>
      {/* Her kan du tilføje din liste eller anden funktionalitet */}
    </View>
  );
}
