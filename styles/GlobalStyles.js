// Grøn farve: #1E6904
// Lys grøn farve: #6E8840
// Brun farve: #967859

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  error: {
    color: "red",
    fontFamily: "Anton_400Regular",
  },
  background: {
    flex: 1,
    backgroundColor: "#F7F5F5",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  container: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  smallContainer: {
    height: 200,
    width: 350,
    marginHorizontal: 10,
    marginTop: 20,
  },
  seasonContainer: {
    alignItems: "center",
    justifyContent: "center", // Center content vertically
  },
  productContainer: {
    alignItems: "left",
    height: "85%",
    width: "90%",
    marginVertical: 10,
  },

  // text styles
  title: {
    fontSize: 42,
    color: "#1E6904",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Anton_400Regular",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  underTitle: {
    fontSize: 28,
    marginTop: 20,
    color: "#6e8840",
    fontWeight: "bold",
    lineHeight: 30,
    textAlign: "center",
    fontFamily: "Anton_400Regular",
  },
  text: {
    fontSize: 18,
    color: "#967859",
    fontWeight: "bold",
    lineHeight: 30,
    fontFamily: "Anton_400Regular",
  },
  textToLeft: {
    textAlign: "left",
  },
  mediumText: {
    fontSize: 16,
    color: "#967859",
    fontWeight: "bold",
    lineHeight: 30,
    fontFamily: "Anton_400Regular",
  },
  smallText: {
    fontSize: 14,
    color: "#DCCEBB",
    fontWeight: "bold",
    lineHeight: 20,
    fontFamily: "Anton_400Regular",
  },

  // Styles for the product image
  foodImage: {
    width: 120,
    height: 100,
    alignItems: "center",
  },

  // Styles for the button
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
    borderColor: "#6E8840",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1,
  },

  buttonText: {
    color: "#6E8840",
    fontWeight: "bold",
    fontFamily: "Anton_400Regular",
  },
});
