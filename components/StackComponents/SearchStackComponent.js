import { createStackNavigator } from "@react-navigation/stack";

import SearchScreen from "../../screens/SearchScreen";
import ProductDetails from "../../screens/StackScreens/ProductDetails";

const Stack = createStackNavigator();

export default function SearchStackComponent() {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen
        name={"Search"}
        component={SearchScreen}
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
