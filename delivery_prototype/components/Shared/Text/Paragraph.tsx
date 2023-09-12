import { StyleSheet, Text } from "react-native"
import Colors from "../../../constants/Colors"

interface Props {
  text: string,
}

const Paragraph: React.FC<Props> = ({ text }) => {

  return <Text style={styles.header} >{text}</Text>

}

const styles = StyleSheet.create({
  header: {
    color: Colors.primaryText,
    fontStyle: "italic",
    fontSize: 15,
    letterSpacing: 1
  }
})

export default Paragraph 
