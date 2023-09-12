import { Button, Text, View } from "react-native";
import Animated, { FadeInUp, useSharedValue, withSpring } from "react-native-reanimated";

export default function FadeIn() {

  const opacity = useSharedValue(0)

  function appeear() {
    opacity.value = withSpring(1, {
      duration: 1000
    })
  }

  function dissapear() {
    opacity.value = withSpring(0, {
      duration: 1000
    })
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
      <Text >Fade in</Text>
      <Animated.View
        entering={FadeInUp.duration(3000)}
        style={
          {
            width: 100,
            height: 100,
            backgroundColor: "blue",
            opacity
          }
        } />
      <View >
        <Button onPress={appeear} title="make me appear" />
        <Button onPress={dissapear} title="make me dissapear" />
      </View>
    </View>
  )
}
