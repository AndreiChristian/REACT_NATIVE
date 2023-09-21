import { Pressable, StyleSheet, Text, View } from "react-native";
import { CartItem } from "../../../dummyData/models";
import { Image } from "expo-image";
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from "../../../constants/Colors";
import { useDispatch } from "react-redux";
import { addItemToCart, reduceQuantity, removeItemFromCart } from "../../../store/slices/cartSlice";
import Animated, { FadeOut } from "react-native-reanimated";

export default function CartItemIndividual({ item }: { item: CartItem }) {

  const dispatch = useDispatch()

  function handleIncrease() {
    dispatch(addItemToCart({
      item: item.item,
      quantity: 1,
      mentions: item.mentions
    }))
  }

  function handleDecrease() {
    dispatch(reduceQuantity(item))
  }

  function handleRemove() {
    dispatch(removeItemFromCart(item))
  }


  return <Animated.View exiting={FadeOut} style={styles.container} >
    <View style={styles.firstCol} >
      <Text style={styles.name} >{item.item.name}</Text>
      <View style={styles.actions} >
        {item.quantity !== 1 ?
          <Ionicons name="remove" color={Colors.primaryText} size={25} onPress={handleDecrease} />
          : <Ionicons name="trash" color={Colors.primaryText} size={25} onPress={handleRemove} />
        }
        <Text>{item.quantity}</Text>
        <Ionicons name="add" color={Colors.primaryText} size={25} onPress={handleIncrease} />
      </View>
    </View>
    <View style={styles.firstCol} >
      <Image
        style={styles.image}
        source={{
          uri: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80"
        }}
      />
      <Text style={styles.price} >{item.item.price * item.quantity} lei </Text>
    </View>

  </Animated.View>
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10
  },
  firstCol: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 10
  },
  price: {
    fontSize: 20,
    fontWeight: "bold"
  },
  name: {
    marginRight: 5,
    fontSize: 24,
    fontWeight: "bold"
  },
  actions: {
    width: 140,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.surface,
    padding: 10,
    borderRadius: 20
  }
})
