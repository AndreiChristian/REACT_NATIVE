import LoginSection from "../../components/Auth/LoginSection"
import ModalContainer from "../../components/Layoout/ModalContainer"

const LoginScreen = ({ navigation }: { navigation: any }) => {
  return <ModalContainer navigation={navigation} >
    <LoginSection />
  </ModalContainer>
}

export default LoginScreen
