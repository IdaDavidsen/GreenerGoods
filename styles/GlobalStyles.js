// green color: #1E6904

import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F5F5",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  title: {
    fontSize: 42,
    color: "#1E6904",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Anton_400Regular",
  },
  underTitle: {
    fontSize: 28,
    marginTop: 20,
    color: "#1E6904",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Anton_400Regular",
  },
  text: {
    fontSize: 18,
    color: "#1E6904",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Anton_400Regular",
  },
  productContainer: {
    alignItems: "center",
    justifyContent: "center", // Center content vertically
    marginHorizontal: 10,
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
    height: 200,
    // Add shadow to the product container
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
});