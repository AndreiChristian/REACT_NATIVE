import { StackScreenProps } from "@react-navigation/stack"
import { MenuStackParamList } from "../../navigation/MenuStack"
import MenuCategoryList from "../../components/Menu/MenuCategoryList"
import HeaderTwo from "../../components/Shared/Text/HeaderTwo"

type Props = StackScreenProps<MenuStackParamList, "MainMenu">

export default function MainMenuScreen({ navigation }: Props) {
  return (
    <MenuCategoryList >
      <HeaderTwo text="Special" />
    </MenuCategoryList>
  )
}

