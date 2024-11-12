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
       alignSelf: 'flex-start'
   }, imageSize: {
       width: '100%',
       height: 100,
   }
});

  export default KvicklyComponent;