import { StyleSheet, View } from "react-native"
import SecondaryButton from "../../Shared/Button/SecondaryButton"
import HeaderOne from "../../Shared/Text/HeaderOne"
import HeaderTwo from "../../Shared/Text/HeaderTwo"
import PrimaryButton from "../../Shared/Button/PrimaryButton"
import ScreenContainer from "../../Layoout/ScreenContainer"

const GuestProfile = ({ navigation }: { navigation: any }) => {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <HeaderOne text="Trebuie sa aveti cont pentru a vizualiza profilul." />
        <View style={styles.spacer} ></View>
        <HeaderTwo text="Aveti deja cont?" />
        <View style={styles.wide} >
          <PrimaryButton text="Logati-va" onPress={() => navigation.navigate("Login")} />
        </View>
        <HeaderTwo text="Nu aveti cont?" />
        <View style={styles.wide} >
          <SecondaryButton text="Creati-va cont" onPress={() => navigation.navigate("Register")} />
        </View>
      </View>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 20
  },
  wide: {
    width: "100%"
  },
  spacer: {
    height: 10
  }
})

export default GuestProfile
