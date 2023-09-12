import Ionicons from '@expo/vector-icons/Ionicons';
import { ReactNode } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

interface Props {
  children: ReactNode,
  padding?: number,
  gap?: number,
  navigation: any
}

const ModalContainer: React.FC<Props> = ({ children, padding = 20, gap = 20, navigation }) => {

  return <View style={{ flex: 1 }} >
    <View style={styles.header} >
      <Pressable style={styles.headerButton} onPress={() => navigation.goBack()}>
        <Ionicons name='chevron-back-outline' size={25} color={Colors.info} />
        <Text style={styles.button}>Inapoi</Text>
      </Pressable>
    </View>
    <View style={[styles.container, { padding, gap }]}>
      {children}
    </View>
  </View>
}

export default ModalContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    padding: 20,
    shadowColor: Colors.shadows,
    backgroundColor: Colors.background,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1
  },
  headerButton: {
    flexDirection: "row"
  },
  button: {
    fontSize: 20,
    color: Colors.info,
    fontWeight: "bold"
  }
})
