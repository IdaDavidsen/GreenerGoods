import { StatusBar } from "expo-status-bar";
import { Text, Pressable } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";

export default function RemoveButtonComponents({ title, onPress }) {
  
  return (
    <Pressable style={GlobalStyles.button} onPress={onPress}>
      <Text style={GlobalStyles.text}>{title}</Text>
    </Pressable>
  );
}

