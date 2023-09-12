import { Pressable, Text } from "react-native"
import Colors from "../../../constants/Colors"
import { ButtonProps } from "./ButtonProps"


const RaisedButton: React.FC<ButtonProps> = ({ style = "primary", text = "PlaceHolder" }) => {
  return <Pressable
    style={
      {
        backgroundColor: Colors[style],
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
        borderRadius: 5,
        shadowColor: Colors.shadows,
      }
    }
  >
    <Text style={{
      color: Colors.lightText,
      fontSize: 15,
      fontWeight: 'bold',
      letterSpacing: 1,
      textTransform: "uppercase"
    }}
    >{text}
    </Text>
  </Pressable>
}

export default RaisedButton
