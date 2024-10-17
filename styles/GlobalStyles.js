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
  smallText: {
    fontSize: 14,
    color: "#dfd3c3",
    fontWeight: "bold",
    lineHeight: 20,
    fontFamily: "Anton_400Regular",
  },

  // Styles for the search bar
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
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
    position: "absolute",
    right: 10,
  },
  searchFlatlist: {
    width: "100%",
    marginLeft: 50,
  },

  // Styles for the camera screen
  cameraContainer: {
    flex: 1,
    // justifyContent: "center",
    alignSelf: "center",
    width: "80%",
    // marginTop: 0,
    borderRadius: 20,
    // backgroundColor: "#F7F5F5",
    overflow: "hidden",
  },
  camera: {
    flex: 1,
    overflow: "hidden",
    //width: "100%",
    // flexDirection: "column",
    justifyContent: "flex-end",
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 32,
    alignSelf: "center",
  },

  buttonGallery: {
    fontSize: 15,
    color: "white",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  gallery: {
    flex: 0.2,
    paddingTop: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7F5F5",
  },
  cameraBackground: {
    backgroundColor: "#F7F5F5",
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  camerabtn: {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderRadius: 100,
    justifyContent: "center",
  },
  snapbtn: {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    height: 80,
    width: 80,
    borderRadius: 100,
    padding: 10,
    margin: 5,
    alignSelf: "center",
    borderWidth: 4,
    borderColor: "white",
    justifyContent: "center",
  },
  flipbtn: {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderRadius: 100,
    padding: 5,
    alignSelf: "baseline",
    justifyContent: "center",
  },
  gallerybtn: {
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    borderRadius: 100,
    padding: 5,
    alignSelf: "flex-end",
    justifyContent: "center",
  },

  // Styles for the button
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
