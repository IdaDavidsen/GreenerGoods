import { createStackNavigator } from "@react-navigation/stack";

import CameraScreen from "../../screens/CameraScreen";
import ScanResult from "../../screens/StackScreens/ScanResult";

const Stack = createStackNavigator();

export default function ScanStackComponent() {
  return (
    <Stack.Navigator initialRouteName="ScanFeature">
      <Stack.Screen
        name={"CameraScreen"}
        component={CameraScreen}
        options={{ headerShown: null }}
      />
      <Stack.Screen name={"ScanResult"} component={ScanResult} />
    </Stack.Navigator>
  );
}
