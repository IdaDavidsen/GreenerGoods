import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { createStackNavigator} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import GlobalStyles from "../styles/GlobalStyles";
import SearchScreen from "../screens/SearchScreen";
import ProductDetails from "../screens/StackScreens/ProductDetails"

const Stack = createStackNavigator();

export default function StackComponent() {
  return (
   
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name={"Search"} component={SearchScreen} options={{headerShown:null}} />
        <Stack.Screen name={"ProductDetails"} component={ProductDetails} />
      </Stack.Navigator>

  );
}