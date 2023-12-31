import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import { categories } from "../../dummyData/Categories"
import Colors from "../../constants/Colors"
import ScreenContainer from "../Layoout/ScreenContainer"
import { ReactNode } from "react"
import { useNavigation } from "@react-navigation/native"
import { Image } from "expo-image"

interface Props {
  children: ReactNode
}


export default function MenuCategoryList({ children }: Props) {

  const navigation = useNavigation<any>()

  function handleNavigate(id: number) {
    navigation.navigate("Category", { categoryId: id })
  }

  return (
    <ScreenContainer>
      <ScrollView style={styles.scrollContainer} horizontal={true} showsHorizontalScrollIndicator={false} >
        {categories.map((c) => {
          return (
            <Pressable onPress={() => handleNavigate(c.id)} key={c.id}>
              <View style={styles.listItem}>
                <Image
                  style={[styles.image, {
                    width: 90,
                    height: 90
                  }]}
                  source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg'
                  }}
                />
                <Text style={styles.label} >{c.name}</Text>
              </View>
            </Pressable>
          )
        })}
      </ScrollView>
      <View style={{ flex: 1 }} >
        {children}
      </View>
    </ScreenContainer>
  )
}
const styles = StyleSheet.create({
  scrollContainer: {
    maxHeight: 140,
  },
  listItem: {
    marginHorizontal: 10,
    flexShrink: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 5
  },
  label: {
    fontSize: 18,
    color: Colors.primaryText,
    fontWeight: "bold"
  },
  image: {
    borderRadius: 10
  }
})

