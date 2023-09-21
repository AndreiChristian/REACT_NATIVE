import { StyleSheet, Text, View } from "react-native";
import { CartItem } from "../../../dummyData/models";
import { FlatList } from "react-native-gesture-handler";
import HeaderOne from "../../Shared/Text/HeaderOne";
import CartItemIndividual from "./CartItemIndividual";
import PrimaryButton from "../../Shared/Button/PrimaryButton";
import SecondaryButton from "../../Shared/Button/SecondaryButton";

interface Props {
  items: CartItem[]
}

export default function CartItemList({ items }: Props) {

  function getTotalAmount(): number {
    let sum = 0
    for (const item of items) {
      sum += item.item.price * item.quantity
    }
    return sum
  }

  return (
    <View style={styles.container} >
      <View style={styles.center}>
        <HeaderOne text="Cos" />
      </View>
      <View style={styles.list} >
        <FlatList
          data={items}
          renderItem={({ item }) => <CartItemIndividual item={item} />}
        />
      </View>
      <HeaderOne text={`Total: ${getTotalAmount()} lei`} />
      <PrimaryButton text="Finalizeaza comanda" />
      <SecondaryButton text="Adauga produse" />
      <View style={styles.bot} ></View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20
  },
  center: {
    alignItems: "center",
  },
  list: {
    flex: 1
  },
  bot: {
    height: 70
  }
})
