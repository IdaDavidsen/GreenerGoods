import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../../screens/HomeScreen";
import ProductDetails from "../../screens/StackScreens/ProductDetails";

const Stack = createStackNavigator();

export default function HomeStackComponent() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name={"Home"}
        component={HomeScreen}
        options={{ headerShown: null }}
      />
      <Stack.Screen
        name={"ProductDetails"}
        component={ProductDetails}
        options={{ headerShown: null }}
      />
    </Stack.Navigator>
  );
}
