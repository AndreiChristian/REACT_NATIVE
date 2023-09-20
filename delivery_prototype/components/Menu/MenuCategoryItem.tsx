import { Dimensions, Image, StyleSheet, Text, View } from "react-native"
import { MenuCategory } from "../../dummyData/models"
import HeaderTwo from "../Shared/Text/HeaderTwo";

interface Props {
  item: MenuCategory
}

const screenWidth = Dimensions.get("screen").width;

export default function MenuCategroyItem({ item }: Props) {
  return <View style={styles.container}>
    <Image
      style={
        styles.image
      }
      source={{
        uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg'
      }}
      width={screenWidth - 20}
      height={110}
    />
    <View style={styles.center} >
      <HeaderTwo text={item.name} />
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignItems: "center"
  },
  center: {
    alignItems: "center",
    marginVertical: 10
  },
  image: {
    borderRadius: 10
  }
})
