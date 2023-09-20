import HeaderOne from "../../components/Shared/Text/HeaderOne";
import ScreenContainer from "../../components/Layoout/ScreenContainer";
import { menuItems } from "../../dummyData/Items";
import HeaderTwo from "../../components/Shared/Text/HeaderTwo";
import Paragraph from "../../components/Shared/Text/Paragraph";
import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";
import PrimaryButton from "../../components/Shared/Button/PrimaryButton";
import Animated from "react-native-reanimated";


const screenWidth = Dimensions.get('window').width;

const ActionButton = ({
  text = "PlaceHolder",
  onPress = () => { },
  onLongPress = () => { } }) => {
  return <TouchableOpacity
    onPress={onPress}
    onLongPress={onLongPress}
    style={
      {
        flex: 1,
        backgroundColor: Colors.surface,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        paddingHorizontal: 30,
      }
    }
  >
    <Text style={{
      color: Colors.highEmphasisText,
      fontSize: 15,
      fontWeight: 'bold',
      letterSpacing: 1,
      textTransform: "uppercase"
    }}
    >{text}
    </Text>
  </TouchableOpacity>
}


export default function MenuItem({ route, navigation }: any) {

  function getItemById() {
    return menuItems.find(i => i.id === route.params.itemId)!
  }

  return (
    <View style={styles.container}>
      <ScreenContainer>
        <Animated.Image
          sharedTransitionTag="tag"
          style={{
            alignSelf: "center",
            borderRadius: 10,
            width: screenWidth - 50,
            height: screenWidth - 50
          }}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg'
          }}
        />

        <ScrollView style={styles.scrollContainer} >
          <HeaderOne text={getItemById().name} />
          <HeaderTwo text={getItemById().price.toString() + " lei"} />
          <Paragraph text={getItemById().description} />
        </ScrollView>
      </ScreenContainer>
      <SafeAreaView style={styles.tabBar} >
        <View style={styles.tabBarContainer} >
          <View style={styles.actions} >
            <ActionButton text="Adauga" />
            <HeaderOne text="1" />
            <ActionButton text="Elimina" />
          </View>
          <PrimaryButton text="Adauga in cos" />
        </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    gap: 20
  },
  scrollContainer: {
    gap: 10
  },
  tabBar: {
    backgroundColor: Colors.background,
    shadowColor: Colors.shadows,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5
  },
  tabBarContainer: {
    paddingHorizontal: 10,
    gap: 10,
    paddingTop: 10
  }
})

