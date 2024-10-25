import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, remove } from "firebase/database";
  
const RemoveButtonComponent = ({ productName, setShoppingList, onRemove }) => {
  const handleRemove = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const db = getDatabase();
        const productRef = ref(db, `shoppingLists/${user.uid}/${productName}`);

        // Fjerner varen fra databasen
        await remove(productRef);

        // Opdaterer den lokale tilstand, hvis setShoppingList er angivet
        if (setShoppingList) {
          setShoppingList((prevList) =>
            prevList.filter((item) => item.Produkt !== productName)
          );
        }

        // Kald onRemove callback, hvis den findes
        if (onRemove) onRemove();

        console.log("Product removed from shopping list");
      }
    } catch (error) {
      console.error("Error removing product: ", error);
    }
  };
// <Text style={[GlobalStyles.text, { color: "red" }]}>Fjern</Text>
  return (
    <TouchableOpacity onPress={handleRemove} style={[GlobalStyles.button]}>
      <Text style={[GlobalStyles.text]}>Slet</Text>
    </TouchableOpacity>
  );
};

export default RemoveButtonComponent;
