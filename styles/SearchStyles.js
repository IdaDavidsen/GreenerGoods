import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
});