import { SafeAreaView, Text, View } from "react-native";

import GlobalStyles from "../styles/GlobalStyles";
import GreenFeedStyles from "../styles/GreenFeedStyles";

import GreenerGoodsComponent from "../components/GreenerGoods";
import HavredrikTilbudComponent from "../components/Havredrik";
import KvicklyComponent from "../components/Kvickly";

export default function GreenFeedScreen() {
  return (
    <SafeAreaView style={GlobalStyles.background}>
      <GreenerGoodsComponent />
      <Text style={GlobalStyles.underTitle}>GreenFeed</Text>
      <Text style={GlobalStyles.text}>Få inspiration til grønne tilbud</Text>

      <View style={[GlobalStyles.container, GlobalStyles.smallContainer]}>
        <KvicklyComponent />

        <View style={{ position: "absolute", left: 10 }}>
          <Text style={GlobalStyles.underTitle}>Naturli økologisk</Text>
          <Text style={GlobalStyles.underTitle}>Havredrik</Text>
        </View>

        <HavredrikTilbudComponent />

        <View style={GreenFeedStyles.iconContainer}>
          <Text style={GreenFeedStyles.icon}>♡ 🛒</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
