import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../../../constants/Colors";

interface Props {
  children: ReactNode,
}

const BaseCard: React.FC<Props> = ({ children }) => {

  return (
    <View style={styles.container} >
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface,
    padding: 20,
    borderRadius: 10,
    color: Colors.hintText
  }
})

export default BaseCard 
