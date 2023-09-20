import { StackScreenProps } from "@react-navigation/stack"
import { MenuStackParamList } from "../../navigation/MenuStack"
import { FlatList } from "react-native-gesture-handler"
import { categories } from "../../dummyData/Categories"
import MenuCategroyItem from "../../components/Menu/MenuCategoryItem"
import { View } from "react-native"
import HeaderOne from "../../components/Shared/Text/HeaderOne"
import ScreenContainer from "../../components/Layoout/ScreenContainer"

type Props = StackScreenProps<MenuStackParamList, "MainMenu">

export default function MainMenuScreen({ navigation }: Props) {
  return (
    <ScreenContainer>
      <FlatList
        ListHeaderComponent={() => (
          <View style={{ alignItems: "center", marginBottom: 20 }} >
            <HeaderOne text="Categorii" />
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={categories}
        renderItem={({ item }) => <MenuCategroyItem item={item} />}
      />
      <View style={{ height: 60 }}></View>
    </ScreenContainer>
  )
}
