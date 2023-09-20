import { Text, View } from "react-native";
import { CartItem } from "../../../dummyData/models";

export default function CartItemIndividual({ item }: { item: CartItem }) {
  return <View>
    <Text>{item.item.name}</Text>
    <Text>Cantitate : {item.quantity.toString()}</Text>
  </View>
}
