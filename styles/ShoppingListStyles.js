import { StyleSheet } from "react-native";

export default StyleSheet.create({
    productCard: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        marginVertical: 8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
        width: 350,
      },
      productTextContainer: {
        flexDirection: 'row',
        justifyContent: "center"
      },
      checkbox: {
        width: 40,
        height: 40,
        borderWidth: 2,
        borderColor: '#3c763d',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
      },
      checkboxStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        left: 100,
      },
      checkboxIcon: {
        fontSize: 16,
        color: '#3c763d',
      },
});