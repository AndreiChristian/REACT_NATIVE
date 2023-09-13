import { Button, StyleSheet, View } from "react-native"
import HeaderOne from "../Shared/Text/HeaderOne"

const NoProductSection = ({ navigation }: { navigation: any }) => {
  return <View style={styles.container} >
    <HeaderOne text="Din pacate, nu ai niciun produs in cos!" />
    <Button title="Vezi meniu" onPress={() => { navigation.navigate("Meniu") }} />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20
  }
})

export default NoProductSection
