import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";

export default function Coop() {
    return (
      <View style={GlobalStyles.container}>
        <View>
        <Image source={require("../assets/coopApp.png")} 
        style={{ width: 400, height: 700}}
        />
      </View>
        <StatusBar style="auto" />
      </View>
    );
  }
  