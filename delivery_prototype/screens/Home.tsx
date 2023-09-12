import { StyleSheet, Text, View } from "react-native";
import ScreenContainer from "../components/Layoout/ScreenContainer";
import RaisedButton from "../components/Shared/Button/RaisedButton";
import OutlinedButton from "../components/Shared/Button/OutlinedButton";
import { ScrollView } from "react-native-gesture-handler";

export default function HomeScreen() {
  return (
    <ScreenContainer>
      <ScrollView style={{ flex: 1, flexDirection: "column", }}>
        <Text>Raised</Text>
        <View style={styles.spacer} />
        <RaisedButton text="Default" />
        <View style={styles.spacer} />
        <RaisedButton text="Primary" style="primary" />
        <View style={styles.spacer} />
        <RaisedButton text="Error" style="error" />
        <View style={styles.spacer} />
        <RaisedButton text="Info" style="info" />
        <View style={styles.spacer} />
        <RaisedButton text="Success" style="success" />
        <View style={styles.spacer} />
        <RaisedButton text="Warning" style="warning" />
        <View style={styles.spacer} />
        <Text>Outlined</Text>
        <View style={styles.spacer} />
        <OutlinedButton text="Hello" />
        <View style={styles.spacer} />
        <OutlinedButton text="Primary" style="primary" />
        <View style={styles.spacer} />
        <OutlinedButton text="Error" style="error" />
        <View style={styles.spacer} />
        <OutlinedButton text="Info" style="info" />
        <View style={styles.spacer} />
        <OutlinedButton text="Success" style="success" />
        <View style={styles.spacer} />
        <OutlinedButton text="Warning" style="warning" />
        <View style={styles.spacer} />
      </ScrollView>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  spacer: {
    height: 10
  }
})
