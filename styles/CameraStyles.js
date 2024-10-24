import { StyleSheet } from "react-native";

 // Styles for the camera screen
export default StyleSheet.create({
 cameraContainer: {
    flex: 1,
    alignSelf: "center",
    width: "80%",
    borderRadius: 20,
    overflow: "hidden",
  },
  camera: {
    flex: 1,
    overflow: "hidden",
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
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    borderColor: "#967859",
    margin: 20,
    padding: 10,
    borderWidth: 1,
  },
});