import { StackScreenProps } from "@react-navigation/stack"
import HeaderOne from "../../components/Shared/Text/HeaderOne"
import { MenuStackParamList } from "../../navigation/MenuStack"
import MenuCategoryList from "../../components/Menu/MenuCategoryList"
import { categories } from "../../dummyData/Categories"
import { menuItems } from "../../dummyData/Items"
import { FlatList } from "react-native-gesture-handler"
import MenuListItem from "../../components/Menu/MenuListItem"

type Props = StackScreenProps<MenuStackParamList, "Category">

const MenuCategoryScreen = ({ route, navigation }: Props) => {

  function getCategoriesItem() {
    return menuItems.filter(i => i.categoryId === route.params.categoryId)
  }

  function getCategoryName(): string {
    const category = categories.find(i => i.id === route.params.categoryId)
    const categoryName: string = category?.name || "Place"
    return categoryName
  }

  return (
    <MenuCategoryList>
      <HeaderOne text={getCategoryName()} />
      <FlatList data={getCategoriesItem()}
        renderItem={({ item }) => {
          return (
            <MenuListItem item={item} />
          )
        }}
      />
    </MenuCategoryList>
  )
}

export default MenuCategoryScreen 
