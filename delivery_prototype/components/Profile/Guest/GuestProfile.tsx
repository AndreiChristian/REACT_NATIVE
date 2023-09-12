import { Button, Text, View } from "react-native"

const GuestProfile = ({ navigation }: { navigation: any }) => {
  return (
    <View style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      gap: 20
    }} >
      <Text >Nu aveti inca un cont?</Text>
      <Button title="Register" onPress={() => navigation.navigate("Register")} />
      <Text >Sau</Text>
      <Button title="Logati-va folosing email" onPress={() => navigation.navigate("Login")} />
    </View>
  )
}

export default GuestProfile
