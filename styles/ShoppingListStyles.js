import { StyleSheet } from "react-native";

export default StyleSheet.create({
  productCard: {
    marginHorizontal: 10,
    marginTop: 20,
  },
  productTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkboxContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  checkbox: {
    width: 45,
    height: 45,
    borderWidth: 1,
    borderColor: "#6E8840",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  checkboxIcon: {
    fontSize: 16,
    color: "#6E8840",
  },
});
