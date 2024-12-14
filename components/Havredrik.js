import { View, Image, Dimensions, StyleSheet } from "react-native";

const dimensions = Dimensions.get("window");
const imageWidth = Math.round(dimensions.height * 0.3);
const imageHeight = Math.round(dimensions.height * 0.06);

const HavredrikTilbudComponent = () => {
  return (
    <View style={styles.image}>
      <Image
        source={require("../assets/HavredrikTilbud.png")}
        style={styles.imageSize}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: imageWidth,
    height: imageHeight,
    position: "absolute",
    top: 70,
    left: 90,
  },
  imageSize: {
    width: "100%",
    height: 125,
  },
});
export default HavredrikTilbudComponent;
