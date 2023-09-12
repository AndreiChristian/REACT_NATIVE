import { Text, View } from "react-native"
import ModalContainer from "../../components/Layoout/ModalContainer"

const LoginScreen = ({ navigation }: { navigation: any }) => {
  return <ModalContainer navigation={navigation} >
    <View>
      <Text>Login</Text>
    </View>
  </ModalContainer>
}

export default LoginScreen
