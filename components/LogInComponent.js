import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import GlobalStyles from "../styles/GlobalStyles";
import ProfileStyles from "../styles/ProfileStyles";

//LoginForm er en funktion, der returnerer en række komponenter, som tilsammen udgør en formular til login
function LoginForm({ switchToSignUp }) {
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCompleted, setCompleted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // Funktion, der håndterer login, når brugeren trykker på knappen
  const handleSubmit = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + ": " + errorMessage);
      });
  };

  //Loginknappen, som aktiverer handleSubmit når der trykkes på knappen
  /*const renderButton = () => {
        return <Button onPress={() => handleSubmit()} title="Login" style={styles.button}/>;
    };*/

  return (
    <View style={ProfileStyles.userBox}>
      <Text style={GlobalStyles.underTitle}>Login</Text>
      <TextInput
        placeholder="email"
        value={email}
        onChangeText={(email) => setEmail(email)}
        style={ProfileStyles.inputField}
      />
      <TextInput
        placeholder="password"
        value={password}
        onChangeText={(password) => setPassword(password)}
        secureTextEntry
        style={ProfileStyles.inputField}
      />
      {errorMessage && <Text style={GlobalStyles.error}>Error: {errorMessage}</Text>}
      {/*{renderButton()*/}
      <TouchableOpacity onPress={handleSubmit}>
        <Text style={[GlobalStyles.button, GlobalStyles.text]}>Log ind</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={switchToSignUp}>
        <Text style={ProfileStyles.buttonText}>Opret bruger her</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginForm;
