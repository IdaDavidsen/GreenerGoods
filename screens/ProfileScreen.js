import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

import SignUpForm from "../components/SignUpComponent";
import LoginForm from "../components/LogInComponent";
import GlobalStyles from "../styles/GlobalStyles";
import ProfileStyles from "../styles/ProfileStyles";
import GreenerGoodsComponent from "../components/GreenerGoods";

export default function ProfileScreen({ navigation }) {
  const [isLogin, setIsLogin] = useState(true);
  const [showInput, setShowInput] = useState(false);

  const auth = getAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setShowInput(false);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  // Log ud funktion
  const handleLogOut = async () => {
    await signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <SafeAreaView style={GlobalStyles.background}>
      <GreenerGoodsComponent />
      <View style={ProfileStyles.container}>
        <View style={{ marginVertical: 20 }}>
          {!user ? (
            <Text style={GlobalStyles.text}>Email: Du er ikke logget ind</Text>
          ) : (
            <View>
              <Text style={GlobalStyles.text}>Email: {user.email}</Text>
              <TouchableOpacity onPress={handleLogOut}></TouchableOpacity>
            </View>
          )}
        </View>
        <View style={ProfileStyles.ProfileButtons}>
          <TouchableOpacity
            onPress={() => {
              if (!user) {
                setShowInput(true);
              } else {
                handleLogOut();
              }
            }}
          >
            {!user ? (
              <Text style={ProfileStyles.buttonText}>Log ind</Text>
            ) : (
              <View>
                <Text style={ProfileStyles.buttonText}>Log ud</Text>
              </View>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ShoppingList")}>
            <Text style={ProfileStyles.buttonText}>Indkøbsliste</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Saved")}>
            <Text style={ProfileStyles.buttonText}>Gemte favoritter</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("BehindGG")}>
            <Text style={ProfileStyles.buttonText}>Bag om GreenerGoods</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        {showInput &&
          (isLogin ? (
            <LoginForm switchToSignUp={() => setIsLogin(false)} />
          ) : (
            <SignUpForm switchToLogin={() => setIsLogin(true)} />
          ))}
      </View>
    </SafeAreaView>
  );
}

export const Input = () => (
  <TextInput
    style={{
      width: 200,
      height: 50,
      backgroundColor: "lightgrey",
      borderRadius: 10,
    }}
  />
);
