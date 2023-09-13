import { Text, View } from "react-native";
import ScreenContainer from "../components/Layoout/ScreenContainer";
import NoProductSection from "../components/Cos/NoProductSection";


export default function CartScreen({ navigation }: { navigation: any }) {
  return (
    <ScreenContainer>
      <NoProductSection navigation={navigation}></NoProductSection>
    </ScreenContainer>
  )
}


