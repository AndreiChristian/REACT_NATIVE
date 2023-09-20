import HeaderOne from "../../components/Shared/Text/HeaderOne";
import { menuItems } from "../../dummyData/Items";
import HeaderTwo from "../../components/Shared/Text/HeaderTwo";
import Paragraph from "../../components/Shared/Text/Paragraph";
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";
import PrimaryButton from "../../components/Shared/Button/PrimaryButton";
import { useDispatch } from "react-redux";
import { CartItem } from "../../dummyData/models";
import { addItemToCart } from "../../store/slices/cartSlice";
import { useState } from "react";
import ModalContainer from "../../components/Layoout/ModalContainer";
import Placeholder from "../../components/Shared/Placeholder/Placeholder";
import { Image } from "expo-image";


const screenWidth = Dimensions.get('window').width;

const ActionButton = ({
  text = "PlaceHolder",
  onPress = () => { },
  onLongPress = () => { },
  disabled = false
}) => {
  return <TouchableOpacity
    disabled={disabled}
    onPress={onPress}
    onLongPress={onLongPress}
    activeOpacity={disabled ? 1 : 0.2}
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

  const [quantity, setQuantity] = useState(1)
  const [imageLoaded, setImageLoaded] = useState(false);

  function getItemById() {
    return menuItems.find(i => i.id === route.params.itemId)!
  }

  function handleIncreaseQuantity() {
    setQuantity(quantity => quantity + 1)
  }

  function handleDecreaseQuantity() {
    setQuantity(quantity => quantity - 1)
  }


  const dispatch = useDispatch()

  function handleAddTocart() {
    console.log("Hello")
    const item = getItemById()
    const cartItem: CartItem = {
      item: item,
      quantity,
      mentions: ""
    }
    dispatch(addItemToCart(cartItem))
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <ModalContainer navigation={navigation} >

        <Image
          style={{
            alignSelf: "center",
            borderRadius: 10,
            width: screenWidth - 50,
            height: screenWidth - 50
          }}
          onLoad={() => {
            setImageLoaded(true)
          }}
          source={{
            uri: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80'
          }}
        />

        {!imageLoaded &&
          <Placeholder width={screenWidth - 50} height={screenWidth - 50} borderRadius={10} />
        }


        <ScrollView style={styles.scrollContainer} >
          <HeaderOne text={getItemById().name} />
          <HeaderTwo text={getItemById().price.toString() + " lei"} />
          <Paragraph text={getItemById().description} />
        </ScrollView>
      </ModalContainer>
      <SafeAreaView style={styles.tabBar} >
        <View style={styles.tabBarContainer} >
          <View style={styles.actions} >
            <ActionButton disabled={quantity <= 1} text="Elimina" onPress={handleDecreaseQuantity} />
            <HeaderOne text={quantity.toString()} />
            <ActionButton text="Adauga" onPress={handleIncreaseQuantity} />
          </View>
          <PrimaryButton text="Adauga in cos" onPress={handleAddTocart} />
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

