import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";

export default function Home() {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.title}>Velkommen til GreenerGoods {"\n"}</Text>
      <Text style={GlobalStyles.text}>
        Her kan du se diverse produkters CO2 aftryk, {"\n"}
        se grønnere alternativer og {"\n"}
        hvilke varer der er i sæson
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
