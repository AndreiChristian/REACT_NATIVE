import { Image, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import SearchBar from "./SearchBar";
import BottomSheet from "./BottomSheet";
import { useRef } from "react";
import { BottomSheetModal } from '@gorhom/bottom-sheet'

export default function Header() {

  const bottomSheetRef = useRef<BottomSheetModal>(null)

  const openModal = () => {
    bottomSheetRef.current?.present()
  }

  return (
    <SafeAreaView style={styles.safeArea} >

      <BottomSheet ref={bottomSheetRef} />

      <View style={styles.container} >
        <TouchableOpacity onPress={openModal} >
          <Image style={styles.image} source={require("../assets/images/icon.png")} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.titleContainer}>
          <Text style={styles.title} >Delivery Now</Text>
          <View style={{ flexDirection: "row" }} >
            <Text style={styles.subtitle} >London</Text>
            <Ionicons name="chevron-down-outline" size={20} color={Colors.primary} />
          </View>
        </TouchableOpacity>

        <View style={styles.spacer} ></View>

        <TouchableOpacity style={styles.profileButton} >
          <Ionicons name="person-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>

      </View>

      <SearchBar />

    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white"
  },
  container: {
    height: 60,
    backgroundColor: "white",
    alignItems: 'center',
    justifyContent: "flex-start",
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
  },
  image: {
    height: 30,
    width: 30
  },
  titleContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  spacer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: Colors.medium
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50
  },
  searchContainer: {
    height: 60,
    backgroundColor: "#fff"
  },
  searchSection: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 20,
    flex: 1,
    alignItems: "center"
  },
  optionButton: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50
  },
  searchField: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  searchIcon: {}
  ,
  input: {
    padding: 10,
    flex: 1,
    color: Colors.mediumDark
  }
})
