import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../../../constants/Colors";

interface Props {
  children: ReactNode,
}

const HighlightCard: React.FC<Props> = ({ children }) => {

  return (
    <View style={styles.container} >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    padding: 20,
    borderRadius: 10,
    color: Colors.hintText
  }
})

export default HighlightCard
