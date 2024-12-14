import {
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const dimensions = Dimensions.get("window");
const imageWidth = Math.round(dimensions.height * 0.3);
const imageHeight = Math.round(dimensions.height * 0.06);

const GGlogoComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons style={styles.arrow} name="arrow-back" size={24} />
      </TouchableOpacity>
      <Image
        style={styles.image}
        source={require("../assets/Logo.png")}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  arrow: {
    right: 30,
    color: "#1e6904",
  },
  image: {
    width: imageWidth,
    height: imageHeight,
    left: 120,
  },
});
export default GGlogoComponent;
