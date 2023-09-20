import { StyleSheet, Text, View } from "react-native";
import { CartItem } from "../../../dummyData/models";
import { FlatList } from "react-native-gesture-handler";
import HeaderOne from "../../Shared/Text/HeaderOne";
import CartItemIndividual from "./CartItemIndividual";

interface Props {
  items: CartItem[]
}

export default function CartItemList({ items }: Props) {
  return (
    <View>
      <View style={styles.center}>
        <HeaderOne text="Cos" />
      </View>
      <FlatList
        data={items}
        renderItem={({ item }) => <CartItemIndividual item={item} />}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  center: {
    alignItems: "center"
  }
})
