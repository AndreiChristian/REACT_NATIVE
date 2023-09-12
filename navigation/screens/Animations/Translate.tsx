import { Button, StyleSheet, View } from "react-native";
import Animated, { FadeInUp, SlideInLeft, SlideInRight, useSharedValue, withSpring } from "react-native-reanimated";

export default function Translate() {

  const translateX = useSharedValue(0)

  const handlePress = () => {
    translateX.value = withSpring(translateX.value + 50)
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <Animated.View entering={SlideInLeft} style={[styles.box, { transform: [{ translateX }] }]} />
      <Button onPress={handlePress} title="Translate me senpai" />
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderRadius: 20,
    padding: 20,
    alignSelf: "flex-start"
  }
})
