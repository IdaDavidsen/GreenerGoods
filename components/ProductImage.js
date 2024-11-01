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
    Gulerod: require('../assets/food/gulerod.jpg'),
    Græskar: require('../assets/food/graeskar.webp'),
    Kartoffel: require('../assets/food/kartoffel.webp'),
    Pære: require('../assets/food/paere.png'),
    Æble: require('../assets/food/aebler.webp'),
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