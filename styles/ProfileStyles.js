import { StyleSheet } from "react-native";

export default StyleSheet.create({
   // style til profile
  container: {
    alignSelf: 'flex-start',
    margin: 20,
  },
  ProfileButtons: {
    justifyContent: 'center',
    gap: 10,
    marginTop: 50,
  },
  buttonText: {
    color: '#1e6904',
    fontWeight: 'bold',
  },
   inputField: {
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#f9f9f9',
    borderColor: '#967859',
},
userBox: {
    flex: 0.75,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
    margin: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    marginTop: -50,
  },
  });
