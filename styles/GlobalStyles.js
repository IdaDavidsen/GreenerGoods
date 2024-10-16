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
  seasonContainer: {
    alignItems: "center",
    justifyContent: "center", // Center content vertically
    marginHorizontal: 10,
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
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
  productContainer: {
    alignItems: "left",
    height: "85%",
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    // Add shadow to the product container
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
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
    shadowOpacity: 0.20,
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
  smallText: {
    fontSize: 14,
    color: "#dfd3c3",
    fontWeight: "bold",
    lineHeight: 20,
    fontFamily: "Anton_400Regular",
  },
 

  // Add styles for the search bar
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderRadius: 10,
    paddingLeft: 10,
    margin: 20,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
  },
  searchIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
  },
  clearIconContainer: {
    position: 'absolute',
    right: 10,
  },

  // Add styles for the button
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    borderColor: '#967859',
    margin: 20,
    padding: 10,
    borderWidth: 1,
    },
});