import { useNavigation } from "@react-navigation/native"
import CartItemList from "../../components/Cos/CartItemsList/CartItemList"
import ModalContainer from "../../components/Layoout/ModalContainer"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"

const CartProductsScreen = () => {

  const navigate = useNavigation<any>()
  const cartItems = useSelector((state: RootState) => state.cart.items)

  return (
    <ModalContainer navigation={navigate} >
      <CartItemList items={cartItems} />
    </ModalContainer>
  )
}

export default CartProductsScreen
