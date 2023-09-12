import { Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated";

export default function Rotate() {

  const rotate = useSharedValue(0)

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotate.value}deg` }]
    }
  })

  function handlePress() {
    console.log("Pressed")
    rotate.value = withTiming(rotate.value + 90, {
      duration: 300,
      easing: Easing.bezier(0.25, 1, 0.5, 1)
    })
  }

  return <View style={styles.container} >
    <Pressable onPress={handlePress} >
      <Animated.View style={[styles.box, animatedStyles]} />
    </Pressable>
  </View>
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginVertical: 30
  },
  button: {
    padding: 20,
    backgroundColor: "red",
    color: "white",
  },
  box: {
    backgroundColor: "red",
    height: 100,
    width: 100
  }
});
