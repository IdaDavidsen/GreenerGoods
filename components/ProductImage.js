import React from 'react';
import { Image } from 'react-native';
import GlobalStyles from "../styles/GlobalStyles.js";

const ProductImage = ({ product }) => {
  const images = {
    Agurk: require('../assets/food/agurk.png'),
    Bladselleri: require('../assets/food/bladselleri.png'),
    Blomkål: require('../assets/food/blomkal.png'),
    Broccoli: require('../assets/food/broccoli.webp'),
    Dild: require('../assets/food/dild.webp'),
    Græskar: require('../assets/food/graeskar.webp'),
    Æbler: require('../assets/food/aebler.webp'),
  };

  const imageSource = images[product.Produkt];

  return (
    imageSource && (
      <Image
        style={[GlobalStyles.foodImage]}
        source={imageSource}
      />
    )
  );
};

export default ProductImage;