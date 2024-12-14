import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "../../screens/ProfileScreen";
import ShoppingList from "../../screens/StackScreens/ShoppingList";
import Saved from "../../screens/StackScreens/Saved";
import BehindGG from "../../screens/StackScreens/BehindGG";

const Stack = createStackNavigator();

export default function ProfileStackComponent() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name={"Profile"}
        component={ProfileScreen}
        options={{ headerShown: null }}
      />
      <Stack.Screen
        name={"ShoppingList"}
        component={ShoppingList}
        options={{ headerShown: null }}
      />
      <Stack.Screen
        name={"Saved"}
        component={Saved}
        options={{ headerShown: null }}
      />
      <Stack.Screen
        name={"BehindGG"}
        component={BehindGG}
        options={{ headerShown: null }}
      />
    </Stack.Navigator>
  );
}
