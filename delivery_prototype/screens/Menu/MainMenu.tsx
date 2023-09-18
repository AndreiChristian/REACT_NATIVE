import { ScrollView } from "react-native-gesture-handler"
import ScreenContainer from "../../components/Layoout/ScreenContainer"
import HeaderOne from "../../components/Shared/Text/HeaderOne"
import HeaderTwo from "../../components/Shared/Text/HeaderTwo"
import { categories } from "../../dummyData/Categories"
import { Image, StyleSheet, Text, View } from "react-native"
import Colors from "../../constants/Colors"

export default function MainMenuScreen() {
  return (

    <ScreenContainer>
      <HeaderTwo text="Categorii" />
      <ScrollView style={styles.scrollContainer} horizontal={true} showsHorizontalScrollIndicator={false} >
        {categories.map((c) => {
          return (
            <View style={styles.listItem} key={c.id} >
              <Image
                style={styles.image}
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg'
                }}
                width={90}
                height={90}
              />
              <Text style={styles.label} >{c.name}</Text>
            </View>
          )
        })}
      </ScrollView>
      <View style={{ flex: 1 }} >
        <HeaderOne text="Special" />
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
