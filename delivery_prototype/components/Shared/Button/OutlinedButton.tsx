import { Pressable, Text } from "react-native"
import Colors from "../../../constants/Colors"
import { ButtonProps } from "./ButtonProps"


const OutlinedButton: React.FC<ButtonProps> = ({ style = "primary", text = "PlaceHolder" }) => {
  return <Pressable
    style={
      {
        backgroundColor: Colors.background,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 15,
        borderRadius: 5,
        shadowColor: Colors.shadows,
        borderWidth: 2,
        borderColor: Colors[style]
      }
    }
  >
    <Text style={{
      color: Colors[style],
      fontSize: 15,
      fontWeight: 'bold',
      letterSpacing: 1,
      textTransform: "uppercase"
    }}
    >{text}
    </Text>
  </Pressable>
}

export default OutlinedButton 
