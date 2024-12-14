import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // Styling til CO2 skalaen
  scaleContainer: {
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
    width: "100%",
  },
  scale: {
    width: "100%",
    height: 15,
    backgroundColor: "#EBECA7",
    position: "relative",
    marginBottom: 5,
    borderRadius: 5,
  },
  scaleMarker: {
    width: 5,
    height: 25,
    backgroundColor: "#967859",
    position: "absolute",
    bottom: -5,
  },
  scaleMarkerLabel: {
    position: "absolute",
    top: -25,
    fontSize: 12,
    fontWeight: "bold",
  },
  scaleLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  scaleLabel: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#1E6904",
  },
  scaleLabelHigh: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#AF0404",
  },

  // Styling til FoldOutMenuComponent
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6E8840",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "Anton_400Regular",
  },
  menu: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
});
