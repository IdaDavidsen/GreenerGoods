// ShoppingListScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BehindGG() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bag om GG</Text>
      {/* Her kan du tilføje din liste eller anden funktionalitet */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
