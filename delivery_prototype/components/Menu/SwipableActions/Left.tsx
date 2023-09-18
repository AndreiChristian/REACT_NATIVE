import { StyleSheet, Text, View } from "react-native";
import Colors from "../../../constants/Colors";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function renderLeftAction() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.accent,
        justifyContent: 'center',
        alignItems: "flex-start",
        paddingHorizontal: 20,
        borderRadius: 10,
      }}
    >
      <Ionicons name="heart-outline" size={35} color={Colors.lightText} />
      <Text style={styles.content}>Adauga la favorite</Text>
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
