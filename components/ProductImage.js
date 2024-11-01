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
    Løg: require('../assets/food/loeg.png'),
    Porre: require('../assets/food/porrer.webp'),
    Pære: require('../assets/food/paere.png'),
    Rødbede: require('../assets/food/roedbede.png'),
    Rødkål: require('../assets/food/roedkaal.png'),
    Savoykål: require('../assets/food/savoykaal.webp'),
    Torsk: require('../assets/food/torsk.png'),
    Tranebær: require('../assets/food/tranebaer.png'),
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