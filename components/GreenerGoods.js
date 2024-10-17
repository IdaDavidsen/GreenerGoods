import { View, Image, Dimensions, StyleSheet } from "react-native";
import Resizer from 'react-image-file-resizer';

const dimensions = Dimensions.get('window');   
const imageWidth = Math.round(dimensions.height * 0.3);
const imageHeight = Math.round(dimensions.height * 0.06);

const GreenerGoodsComponent = () => {
    return (
        <View style={styles.image}>
          <Image source={require("../assets/GreenerGoods.png")} 
        style={styles.imageSize}
        resizeMode="contain"
        />
        </View>
      );
  }

  const styles = StyleSheet.create({
     image: {
        width: imageWidth,
        height: imageHeight,
    }, imageSize: {
        width: '100%',
        height: '100%',
    }
});
  export default GreenerGoodsComponent;