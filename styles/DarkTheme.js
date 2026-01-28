// Dark Theme for GreenerGoods
// Dark background colors with adjusted green and text colors for night mode

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  error: {
    color: "#FF6B6B",
    fontFamily: "Anton_400Regular",
  },
  background: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  container: {
    backgroundColor: "#1E1E1E",
    width: 350,
    borderRadius: 10,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  smallContainer: {
    height: 200,
    marginHorizontal: 10,
    marginTop: 20,
  },
  seasonContainer: {
    alignItems: "center",
    justifyContent: "center",
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
    color: "#81C784",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Anton_400Regular",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
  },
  underTitle: {
    fontSize: 28,
    marginTop: 20,
    color: "#A5D6A7",
    fontWeight: "bold",
    lineHeight: 30,
    textAlign: "center",
    fontFamily: "Anton_400Regular",
  },
  text: {
    fontSize: 18,
    color: "#CFB8A3",
    fontWeight: "bold",
    lineHeight: 30,
    fontFamily: "Anton_400Regular",
  },
  textToLeft: {
    textAlign: "left",
  },
  mediumText: {
    fontSize: 16,
    color: "#CFB8A3",
    fontWeight: "bold",
    lineHeight: 30,
    fontFamily: "Anton_400Regular",
  },
  smallText: {
    fontSize: 14,
    color: "#888888",
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
    backgroundColor: "#1E1E1E",
    borderColor: "#81C784",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1,
  },

  buttonText: {
    color: "#81C784",
    fontWeight: "bold",
    fontFamily: "Anton_400Regular",
  },
});
