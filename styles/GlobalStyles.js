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
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.20,
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
  box: {
    width: "90%",
  },

  // Add styles for the search bar
  searchBar: {
    height: 40,
    borderRadius: 10,
    paddingLeft: 10,
    margin: 20,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },

  // Add styles for the button
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: 'pink',
    margin: 20,
    },
});
