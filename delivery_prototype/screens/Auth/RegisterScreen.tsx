import ModalContainer from "../../components/Layoout/ModalContainer"
import RegisterSection from "../../components/Auth/RegisterSection"

const RegisterScreen = ({ navigation }: { navigation: any }) => {
  return <ModalContainer navigation={navigation}>
    <RegisterSection />
  </ModalContainer>
}

export default RegisterScreen 
