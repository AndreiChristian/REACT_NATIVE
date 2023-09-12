import { StyleSheet, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function SearchBar() {
  return (
    <View style={styles.searchContainer} >
      <View style={styles.searchSection} >
        <View style={styles.searchField} >
          <Ionicons name="search-outline" size={20} color={Colors.medium} />
          <TextInput style={styles.input} placeholder="Search for nearby restaurants" />
        </View>
        <Link href={'/'} asChild >
          <TouchableOpacity style={styles.optionButton} >
            <Ionicons name="options-outline" size={20} color={Colors.primary} />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
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
