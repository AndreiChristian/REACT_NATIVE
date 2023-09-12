import { StyleSheet, Text } from "react-native"
import Colors from "../../../constants/Colors"

interface Props {
  text: string,
}

const HeaderOne: React.FC<Props> = ({ text }) => {

  return <Text style={styles.header} >{text}</Text>

}

const styles = StyleSheet.create({
  header: {
    color: Colors.primaryText,
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 1
  }
})

export default HeaderOne 
