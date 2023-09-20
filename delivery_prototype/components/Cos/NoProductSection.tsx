import { StyleSheet, View } from "react-native"
import HeaderOne from "../Shared/Text/HeaderOne"
import ScreenContainer from "../Layoout/ScreenContainer"
import SecondaryButton from "../Shared/Button/SecondaryButton"

const NoProductSection = ({ navigation }: { navigation: any }) => {
  return <ScreenContainer>
    <View style={styles.container} >
      <HeaderOne text="Din pacate, nu ai niciun produs in cos!" />
      <View style={styles.spacer} >
        <SecondaryButton text="Vezi meniu" onPress={() => navigation.navigate("Meniu")} />
      </View>
    </View>
  </ScreenContainer>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20
  },
  spacer: {
    width: "100%"
  }
})

export default NoProductSection
