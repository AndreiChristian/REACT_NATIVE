import ScreenContainer from "../components/Layoout/ScreenContainer";
import NoProductSection from "../components/Cos/NoProductSection";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import CartItemList from "../components/Cos/CartItemsList/CartItemList";
import { useEffect } from "react";


export default function CartScreen({ navigation }: { navigation: any }) {

  const cartItems = useSelector((state: RootState) => state.cart.items)

  return (
    <ScreenContainer>
      {cartItems.length === 0 ?
        <NoProductSection navigation={navigation}></NoProductSection>
        :
        <CartItemList items={cartItems} />}
    </ScreenContainer>
  )
}


