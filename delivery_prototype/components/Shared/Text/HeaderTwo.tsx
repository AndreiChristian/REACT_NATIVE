
import { StyleSheet, Text } from "react-native"
import Colors from "../../../constants/Colors"

interface Props {
  text: string,
}

const HeaderTwo: React.FC<Props> = ({ text }) => {

  return <Text style={styles.header} >{text}</Text>

}

const styles = StyleSheet.create({
  header: {
    color: Colors.secondaryText,
    fontSize: 25,
    fontWeight: "bold",
    letterSpacing: 1
  }
})

export default HeaderTwo 
