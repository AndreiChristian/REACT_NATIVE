import ScreenContainer from "../components/Layoout/ScreenContainer";
import NoProductSection from "../components/Cos/NoProductSection";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useEffect } from "react";
import { Text } from "react-native";
import CartItemList from "../components/Cos/CartItemsList/CartItemList";


export default function CartScreen({ navigation }: { navigation: any }) {

  const cartItems = useSelector((state: RootState) => state.cart.items)

  useEffect(() => {

    console.log(cartItems)
    console.log(cartItems.length)

  }, [])

  return (
    <ScreenContainer>
      {cartItems.length === 0 ?
        <NoProductSection navigation={navigation}></NoProductSection>
        :
        <CartItemList items={cartItems} />}
    </ScreenContainer>
  )
}


