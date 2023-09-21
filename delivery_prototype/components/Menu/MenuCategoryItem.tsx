import { Dimensions, Pressable, StyleSheet, View } from "react-native"
import { MenuCategory } from "../../dummyData/models"
import { useNavigation } from "@react-navigation/native";
import HeaderOne from "../Shared/Text/HeaderOne";
import { Image } from "expo-image";

interface Props {
  item: MenuCategory
}

const screenWidth = Dimensions.get("screen").width;

export default function MenuCategroyItem({ item }: Props) {


  const navigation = useNavigation<any>()

  function handleNavigate() {
    navigation.navigate("Category", { categoryId: item.id })
  }

  return <Pressable onPress={() => handleNavigate()} >
    <View style={styles.container}>
      <Image
        style={{
          width: screenWidth - 40,
          height: 110,
          borderRadius: 10
        }}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg'
        }}
      />
      <View style={styles.center} >
        <HeaderOne text={item.name} />
      </View>
    </View>
  </Pressable>
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: "center",
    padding: 5,
  },
  center: {
    alignItems: "center",
    marginVertical: 10
  },
  image: {
    borderRadius: 10
  }
})
