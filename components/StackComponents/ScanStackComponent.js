import { createStackNavigator } from "@react-navigation/stack";

import CameraScreen from "../../screens/CameraScreen";

const Stack = createStackNavigator();

export default function ScanStackComponent() {
  return (
    <Stack.Navigator initialRouteName="ScanFeature">
      <Stack.Screen
        name={"CameraScreen"}
        component={CameraScreen}
        options={{ headerShown: null }}
      />
    </Stack.Navigator>
  );
}
