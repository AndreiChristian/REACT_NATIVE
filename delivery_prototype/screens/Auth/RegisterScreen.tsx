import { Text, View } from "react-native"
import ModalContainer from "../../components/Layoout/ModalContainer"

const RegisterScreen = ({ navigation }: { navigation: any }) => {
  return <ModalContainer navigation={navigation}>
    <View>
      <Text>Register</Text>
    </View>
  </ModalContainer>
}

export default RegisterScreen 
