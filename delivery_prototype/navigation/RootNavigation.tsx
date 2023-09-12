import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import RootStack from "./RootStack";

export default function RootNavigtaion() {
  return (
    <NavigationContainer >
      <RootStack />
    </NavigationContainer>
  )
}
