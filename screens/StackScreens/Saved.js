// ShoppingListScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import LogoComponent from '../../components/LogoComponent';
import GlobalStyles from '../../styles/GlobalStyles';

export default function SavedScreen() {
  return (
    <View style={GlobalStyles.container}>
      <LogoComponent/>
      <Text style={GlobalStyles.underTitle}>Gemt</Text>
      {/* Her kan du tilføje din liste eller anden funktionalitet */}
    </View>
  );
}


