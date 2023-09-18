import { Text } from "react-native"
import Colors from "../../../constants/Colors"
import { ButtonProps } from "./ButtonProps"
import { TouchableOpacity } from "react-native-gesture-handler"


const SecondaryButton: React.FC<ButtonProps> = ({
  text = "PlaceHolder",
  onPress = () => { },
  onLongPress = () => { } }) => {
  return <TouchableOpacity
    onPress={onPress}
    onLongPress={onLongPress}
    style={
      {
        backgroundColor: Colors.surface,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
        borderRadius: 5,
        shadowColor: Colors.shadows,
      }
    }
  >
    <Text style={{
      color: Colors.highEmphasisText,
      fontSize: 15,
      fontWeight: 'bold',
      letterSpacing: 1,
      textTransform: "uppercase"
    }}
    >{text}
    </Text>
  </TouchableOpacity>
}

export default SecondaryButton
