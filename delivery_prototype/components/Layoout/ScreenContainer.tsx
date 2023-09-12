import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";

interface Props {
  children: ReactNode,
  padding?: number,
  gap?: number
}

const ScreenContainer: React.FC<Props> = ({ children, padding = 20, gap = 20 }) => {

  return <View style={[styles.container, { padding, gap }]}>
    {children}
  </View>
}

export default ScreenContainer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  }
})
