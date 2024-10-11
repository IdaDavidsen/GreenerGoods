import {Button,Text,
    View,
    TextInput,
    ActivityIndicator,
    StyleSheet,
} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';

function SignUpForm() {
    //Instantiering af state-variabler, der skal benyttes i SignUpForm
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isCompleted, setCompleted] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    
    const auth =  getAuth();
    //Her defineres brugeroprettelsesknappen, som aktiverer handleSubmit når der trykkes på knappen
    const renderButton = () => {
        return <Button onPress={() => handleSubmit()} title="Create user" />;
    };
    
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
        <View style={styles.componentsBox}>
            <Text style={styles.header}>Sign up</Text>
            <TextInput
                placeholder="email"
                value={email}
                onChangeText={(email) => setEmail(email)}
                style={styles.inputField}
            />
            <TextInput
                placeholder="password"
                value={password}
                onChangeText={(password) => setPassword(password)}
                secureTextEntry
                style={styles.inputField}
            />
            {errorMessage && (
                <Text style={styles.error}>Error: {errorMessage}</Text>
            )}
            {renderButton()}
        </View>
    );
}

//Lokal styling til brug i SignUpForm
const styles = StyleSheet.create({
    error: {
        color: 'red',
    },
    inputField: {
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
        padding: 10,
        width: 300,
        backgroundColor: 'white',
    },
    header: {
        fontSize: 40,
        color: 'white',
    },
    componentsBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        margin: 20,
        borderRadius: 10,
      },
});

//Eksport af Loginform, så den kan importeres og benyttes i andre komponenter
export default SignUpForm