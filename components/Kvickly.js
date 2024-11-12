import { View, Image, Dimensions, StyleSheet } from "react-native";

const dimensions = Dimensions.get('window');   
const imageWidth = Math.round(dimensions.height * 0.3);
const imageHeight = Math.round(dimensions.height * 0.06);

const KvicklyComponent = () => {
    return (
        <View style={styles.image}>
          <Image source={require("../assets/Kvickly.png")} 
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
       position: 'absolute',
       top: 2,
       left: 175,
   }, imageSize: {
       width: '100%',
       height: 70,
   }
});

  export default KvicklyComponent;