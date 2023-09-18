import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { MenuItem, } from "../../dummyData/models";
import Animated, { FadeInLeft } from "react-native-reanimated";
import Colors from "../../constants/Colors";
import { Swipeable } from "react-native-gesture-handler";
import { useRef } from "react";
import renderRightAction from "./SwipableActions/Right";
import renderLeftAction from "./SwipableActions/Left";
import { useNavigation } from "@react-navigation/native";


export default function MenuListItem({ item, }: { item: MenuItem }) {

  const swipableRef = useRef<Swipeable>(null)
  const navigation = useNavigation<any>()

  function handleNavigate() {
    navigation.navigate("Item", { itemId: item.id })
  }


  return (
    <Swipeable
      friction={2}
      rightThreshold={50}
      leftThreshold={50}
      ref={swipableRef}
      containerStyle={{
        flex: 1,
        backgroundColor: Colors.background,
      }}
      childrenContainerStyle={{
        backgroundColor: Colors.background
      }}
      renderLeftActions={() => renderLeftAction()}
      renderRightActions={() => renderRightAction()}
      onSwipeableOpen={(direction) => {
        console.log("Test")
        if (direction == "left") {
          console.log("Add items to favorites")
        } else {
          console.log("Add items to cart")
        }
        if (swipableRef.current) {
          swipableRef.current.close()
        }
      }
      }
    >
      <Pressable
        onPress={handleNavigate}
      >
        <Animated.View entering={FadeInLeft} style={styles.container} >
          <View style={styles.info}>
            <Text style={styles.title} >{item.name}</Text>
            <Text style={styles.subtitle} >{item.price} roni </Text>
          </View>
          <Image
            style={styles.image}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg'
            }}
            width={100}
            height={100}
          />

        </Animated.View>
      </Pressable>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    backgroundColor: Colors.background,
    paddingHorizontal: 10
  },
  info: {
  },
  image: {
    borderRadius: 10
  },
  title: {
    fontSize: 25,
    color: Colors.primaryText,
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 20,
    color: Colors.secondaryText
  }
})
