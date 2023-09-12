import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function Input() {
  const [text, setText] = useState("");
  return (
    <View style={{ flexDirection: 'column', alignItems: "center", justifyContent: "center", backgroundColor: "red", width: 400 }} >
      <TextInput
        style={{ height: 40 }}
        placeholder="Type here to translate"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{ padding: 10, fontSize: 42 }}>
        {text}
      </Text>
    </View>
  )
}
