import { Button, Text, View, TextInput, StyleSheet, TouchableOpacity,} from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import GlobalStyles from '../styles/GlobalStyles';

//LoginForm er en funktion, der returnerer en række komponenter, som tilsammen udgør en formular til login
function LoginForm({switchToSignUp}) {

    const auth = getAuth();

    // useState hooks til at håndtere variabler i form af email, password, isCompleted og errorMessage
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isCompleted, setCompleted] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    // Funktion, der håndterer login, når brugeren trykker på knappen
    const handleSubmit = async () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        // Hvis der opstår en fejl under login, vil der blive fremsat en fejlbesked, som, ved brug af setErrorMessage, angiver værdien for state-variablen, errormessage
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + ": " + errorMessage);
        });
    }

    //Loginknappen, som aktiverer handleSubmit når der trykkes på knappen
    /*const renderButton = () => {
        return <Button onPress={() => handleSubmit()} title="Login" style={styles.button}/>;
    };*/
    
    return (
        <View style={styles.componentsBox}>
            <Text style={GlobalStyles.underTitle}>Login</Text>
            <TextInput
                placeholder="email"
                value={email}
                onChangeText={(email) => setEmail(email)}
                style={GlobalStyles.inputField}
            />
            <TextInput
                placeholder="password"
                value={password}
                onChangeText={(password) => setPassword(password) }
                secureTextEntry
                style={GlobalStyles.inputField}
            />
            {errorMessage && (
                <Text style={styles.error}>Error: {errorMessage}</Text>
            )}
            {/*{renderButton()*/}
            <TouchableOpacity onPress={handleSubmit}> 
                <Text style={[GlobalStyles.button, GlobalStyles.text]}>Log ind</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={switchToSignUp}> 
                <Text style={GlobalStyles.buttonText}>Opret bruger her</Text>
            </TouchableOpacity>
        </View>
    );
}

//Styling 
const styles = StyleSheet.create({
    error: {
        color: 'red',
    },
    componentsBox: {
        flex: 0.75,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9f9f9',
        margin: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.25,
      },
});

//Eksport af Loginform, således denne kan importeres og benyttes i andre komponenter
export default LoginForm