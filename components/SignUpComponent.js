import {Button,Text, View, TextInput, ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import ProfileStyles from '../styles/ProfileStyles';

function SignUpForm({switchToLogin}) {
    //Instantiering af state-variabler, der skal benyttes i SignUpForm
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isCompleted, setCompleted] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    
    const auth =  getAuth();
    //Her defineres brugeroprettelsesknappen, som aktiverer handleSubmit når der trykkes på knappen
    /*const renderButton = () => {
        return <Button onPress={() => handleSubmit()} title="Opret bruger" />;
    };*/
    
    //Funktion, der håndterer oprettelse af bruger, når brugeren trykker på knappen
      const handleSubmit = async() => {
        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage)
          // ..
        });
      }

    return (
        <View style={ProfileStyles.userBox}>
            <Text style={GlobalStyles.underTitle}>Sign up</Text>
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
            {errorMessage && (
                <Text style={styles.error}>Error: {errorMessage}</Text>
            )}
            {/*{renderButton()}*/}
            <TouchableOpacity onPress={handleSubmit}> 
                <Text style={[GlobalStyles.button, GlobalStyles.text]}>Opret bruger</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={switchToLogin}> 
                <Text style={ProfileStyles.buttonText}>Har du allerede en bruger log ind her</Text>
            </TouchableOpacity>
        </View>
    );
}

//Lokal styling til brug i SignUpForm
const styles = StyleSheet.create({
    error: {
        color: 'red',
    },
});

//Eksport af Loginform, så den kan importeres og benyttes i andre komponenter
export default SignUpForm