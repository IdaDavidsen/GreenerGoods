// ShoppingListScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import GGlogoComponent from '../../components/GGlogo';
import GlobalStyles from '../../styles/GlobalStyles';

export default function SavedScreen() {
  return (
    <View style={GlobalStyles.container}>
      <GGlogoComponent/>
      <Text style={GlobalStyles.underTitle}>Gemt</Text>
      {/* Her kan du tilføje din liste eller anden funktionalitet */}
    </View>
  );
}


