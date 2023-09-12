import { Button, StyleSheet, Text, View } from "react-native"
import HeaderOne from "../Shared/Text/HeaderOne"
import { TextInput } from "react-native-gesture-handler"
import Colors from "../../constants/Colors"
import { useState } from "react"
import Animated, { FadeIn } from "react-native-reanimated"

const RegisterSection = () => {

  const [name, setName] = useState("")
  const [nameWasTouched, setNameWasTouched] = useState(false)

  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [confirmationPassword, setConfirmationPassword] = useState("")

  function handleSubmit() {
    console.log("I am pressed")
    if (password != confirmationPassword) {
      console.log("Passwords do not match")
    } else {
      console.log({ name, phoneNumber, password, confirmationPassword })
    }
  }

  function handleNameChange(text: string) {
    setNameWasTouched(true)
    setName(text)

  }

  return (
    <View style={styles.container} >
      <HeaderOne text="Inregistrati-va" />

      <View style={styles.formSection} >
        <View style={styles.inputSection} >
          <Text style={[styles.label, (!name && nameWasTouched) && styles.errorStyling]} >Nume</Text>
          <TextInput style={styles.input} placeholder="ion " onChangeText={text => handleNameChange(text)} defaultValue={name} />
        </View>
        {(!name && nameWasTouched) && <Animated.Text entering={FadeIn} style={styles.error} >Numele nu poate fi gol.</Animated.Text>}
      </View>

      <Button title="Faceti cont" onPress={handleSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20
  },
  formSection: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: Colors.surface,
    padding: 20,
    borderRadius: 5,
    gap: 10
  },
  input: {
    flex: 1,
    fontSize: 15
  },
  inputSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10
  },
  label: {
    fontWeight: "bold",
    fontSize: 15
  },
  error: {
    color: Colors.error,
    fontSize: 15
  },
  errorStyling: {
    color: Colors.error
  }
})

export default RegisterSection
