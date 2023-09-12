import { useRef } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, { useSharedValue, withSpring } from "react-native-reanimated";

export default function Scaler() {

  const size = useSharedValue(100);
  const intervalId = useRef<any>(null)

  const animatedStyle = {
    backgroundColor: 'blue',
    width: size,
    height: size,
  };

  const increase = () => {
    size.value = withSpring(size.value + 10, {
      duration: 100
    })
  }

  const decrease = () => {
    size.value = withSpring(size.value - 10, {
      duration: 100
    })
  }

  function resetInterval() {
    if (intervalId !== null) {
      clearInterval(intervalId.current)
      intervalId.current = null
    }
  }



  function handleLongPress() {
    resetInterval()
    intervalId.current = setInterval(() => {
      if (size.value < 300) {
        size.value = withSpring(size.value + 1, {
          duration: 100
        })
      } else {
        resetInterval()
      }
    }, 10)
  }

  function handlePressOut() {
    resetInterval()
    intervalId.current = setInterval(() => {
      if (size.value >= 100) {
        size.value = withSpring(size.value - 1, {
          duration: 100
        })
      } else {
        resetInterval()
      }
    }, 10)
  }



  return (
    <View style={styles.container}>
      <Animated.View style={animatedStyle} />
      <Pressable
        onLongPress={handleLongPress}
        onPressOut={handlePressOut}
      >
        <Text style={styles.button} >Senpai</Text>
      </Pressable>
      <View style={{ flexDirection: "row" }} >
        <Button title="+" onPress={increase} />
        <Button title="-" onPress={decrease} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10,
    marginVertical: 30
  },
  button: {
    padding: 20,
    backgroundColor: "red",
    color: "white",
  }
});
