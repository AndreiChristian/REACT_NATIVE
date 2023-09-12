import { Button, Text, View } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";


export default function Feed() {

  const width = useSharedValue(100)
  const translateX = useSharedValue(0)

  const handlePress = () => {
    width.value = withSpring(width.value + 50)
  }

  const handleTranslate = () => {
    translateX.value += 50
  }

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(translateX.value * 2) }]
  }))

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Animated.View style={{
        width: width,
        height: 100,
        backgroundColor: "violet",
        borderRadius: 20
      }} />
      <Button title="Press me" onPress={handlePress} />
      <Animated.View style={[animatedStyle, {
        width: 100,
        height: 100,
        backgroundColor: "purple",
        borderRadius: 20
      }]} />
      <Button onPress={handleTranslate} title="Click me" />
    </View>
  )
}

