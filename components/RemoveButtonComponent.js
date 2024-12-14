import { TouchableOpacity } from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, remove } from "firebase/database";
import Icon from "react-native-vector-icons/MaterialIcons";

const RemoveButtonComponent = ({
  productName,
  setShoppingList,
  setSavedProducts,
  onRemove,
  showIcon = true,
  referenceType = "",
  children,
}) => {
  const handleRemove = async () => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (user) {
        const db = getDatabase();
        const productRef = ref(
          db,
          `${referenceType}/${user.uid}/${productName}`
        );

        // Fjerner varen fra databasen
        await remove(productRef);

        // Opdaterer den lokale tilstand baseret på referenceType
        if (referenceType === "shoppingLists" && setShoppingList) {
          setShoppingList((prevList) =>
            prevList.filter((item) => item.Produkt !== productName)
          );
        } else if (referenceType === "savedProducts" && setSavedProducts) {
          setSavedProducts((prevList) =>
            prevList.filter((item) => item.Produkt !== productName)
          );
        }
        // Kald onRemove callback, hvis den findes
        if (onRemove) onRemove();

        console.log(`Product removed from ${referenceType}`);
      }
    } catch (error) {
      console.error("Error removing product: ", error);
    }
  };

  return (
    <TouchableOpacity onPress={handleRemove} style={GlobalStyles.button}>
      {showIcon ? <Icon name="delete" size={24} color="#D9534F" /> : null}
      {children}
    </TouchableOpacity>
  );
};

export default RemoveButtonComponent;
