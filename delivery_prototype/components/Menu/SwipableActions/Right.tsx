import { StyleSheet, Text, View } from "react-native";
import Colors from "../../../constants/Colors";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function renderRightAction() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.success,
        justifyContent: 'center',
        alignItems: "flex-end",
        paddingHorizontal: 20,
        borderRadius: 10,
      }}
    >
      <Ionicons name="cart-outline" size={35} color={Colors.lightText} />
      <Text style={styles.content}>Adauga in cos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  content: {
    textTransform: "uppercase",
    color: Colors.lightText,
    fontSize: 15,
  }
})
