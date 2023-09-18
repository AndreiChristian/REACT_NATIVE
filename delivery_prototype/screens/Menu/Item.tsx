import { StackScreenProps } from "@react-navigation/stack";
import { MenuStackParamList } from "../../navigation/MenuStack";
import HeaderOne from "../../components/Shared/Text/HeaderOne";
import ScreenContainer from "../../components/Layoout/ScreenContainer";
import { menuItems } from "../../dummyData/Items";
import HeaderTwo from "../../components/Shared/Text/HeaderTwo";
import Paragraph from "../../components/Shared/Text/Paragraph";

type Props = StackScreenProps<MenuStackParamList, "Item">

export default function MenuItem({ route, navigation }: Props) {

  function getItemById() {
    return menuItems.find(i => i.id === route.params.itemId)!
  }

  return (
    <ScreenContainer>
      <HeaderOne text={getItemById().name} />
      <HeaderTwo text={getItemById().price.toString()} />
      <Paragraph text={getItemById().description} />
    </ScreenContainer>
  )
}
