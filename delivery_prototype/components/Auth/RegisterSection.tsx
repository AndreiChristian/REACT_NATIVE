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
  const [phoneNumberWasTouched, setPhoneNumberWasTouched] = useState(false)

  const [email, setEmail] = useState("")
  const [emailWasTouched, setEmailWasTouched] = useState(false)

  const [password, setPassword] = useState("")
  const [passwordWasTouched, setPasswordWasTouched] = useState(false)

  const [confirmationPassword, setConfirmationPassword] = useState("")
  const [confirmationPasswordWasTouched, setConfirmationPasswordWasTouched] = useState(false)

  function handleSubmit() {
    console.log("I am pressed")
    if (password != confirmationPassword) {
      console.log("Passwords do not match")
    } else {
      console.log({ name, phoneNumber, password, confirmationPassword })
    }
  }

  function onNameChange(text: string) {
    setNameWasTouched(true)
    setName(text)
  }

  function onEmailChange(text: string) {
    setEmailWasTouched(true)
    setEmail(text)
  }

  function onPhoneNumberChange(text: string) {
    setPhoneNumberWasTouched(true)
    setPhoneNumber(text)
  }

  function onPasswordWasTouched(text: string) {
    setPasswordWasTouched(true)
    setPassword(text)
  }

  function onConfirmationPasswordWasTouched(text: string) {
    setConfirmationPasswordWasTouched(true)
    setConfirmationPassword(text)
  }

  return (
    <View style={styles.container} >
      <HeaderOne text="Inregistrati-va" />

      <View style={styles.formSection} >
        <View style={styles.inputSection} >
          <Text style={[styles.label, (!name && nameWasTouched) && styles.errorStyling]} >Nume</Text>
          <TextInput style={styles.input} onChangeText={text => onNameChange(text)} defaultValue={name} />
        </View>
        {(!name && nameWasTouched) && <Animated.Text entering={FadeIn} style={styles.error} >Numele nu poate fi gol.</Animated.Text>}
      </View>

      <View style={styles.formSection} >
        <View style={styles.inputSection} >
          <Text style={[styles.label, (!email && emailWasTouched) && styles.errorStyling]} >Email</Text>
          <TextInput style={styles.input} keyboardType="email-address" onChangeText={text => onEmailChange(text)} />
        </View>
        {(!email && emailWasTouched) && <Animated.Text entering={FadeIn} style={styles.error} >Numele nu poate fi gol.</Animated.Text>}
      </View>

      <View style={styles.formSection} >
        <View style={styles.inputSection} >
          <Text style={[styles.label, (!phoneNumber && phoneNumberWasTouched) && styles.errorStyling]} >Telefon</Text>
          <TextInput style={styles.input} keyboardType="phone-pad" onChangeText={text => onPhoneNumberChange(text)} defaultValue={phoneNumber} />
        </View>
        {(!phoneNumber && phoneNumberWasTouched) && <Animated.Text entering={FadeIn} style={styles.error} >Numele nu poate fi gol.</Animated.Text>}
      </View>

      <View style={styles.formSection} >
        <View style={styles.inputSection} >
          <Text style={[styles.label, (!password && passwordWasTouched) && styles.errorStyling]} >Parola</Text>
          <TextInput secureTextEntry={true} style={styles.input} onChangeText={text => onPasswordWasTouched(text)} defaultValue={email} />
        </View>
        {(!password && passwordWasTouched) && <Animated.Text entering={FadeIn} style={styles.error} >Parola nu poate fi goala.</Animated.Text>}
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
