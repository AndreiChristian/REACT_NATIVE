import { Image, StyleSheet, Text, View } from "react-native";
import { MenuItem, } from "../../dummyData/models";
import Animated, { FadeInLeft } from "react-native-reanimated";
import Colors from "../../constants/Colors";
import { Swipeable } from "react-native-gesture-handler";
import { useRef } from "react";


const renderRightAction = (text: string, color: string) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color,
        justifyContent: 'center',
        alignItems: "flex-end",
        paddingHorizontal: 20,
        borderRadius: 10,
      }}
    >
      <Text style={{ color: 'white', }}>{text}</Text>
    </View>
  );
};
export default function MenuListItem({ item }: { item: MenuItem }) {

  const swipableRef = useRef<Swipeable>(null)


  return (
    <Swipeable
      ref={swipableRef}
      containerStyle={{
        flex: 1,
        backgroundColor: Colors.background,
      }}
      childrenContainerStyle={{
        backgroundColor: Colors.background
      }}
      renderLeftActions={() => renderRightAction("Add to favorites", Colors.secondary)}
      renderRightActions={() => renderRightAction("Add to Cart", Colors.success)}
      onSwipeableOpen={(direction) => {
        console.log(direction)
        console.log(item)
        if (swipableRef.current) {
          swipableRef.current.close()
        }
      }
      }
      onSwipeableClose={() => console.log("Close")}
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
    paddingRight: 10
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
