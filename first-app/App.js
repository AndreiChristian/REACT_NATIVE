import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, SafeAreaView, Text, View } from 'react-native';
import Input from './Input';
import Scrollable from './Scroll';
import List from './List';
import Styling from './Styling';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <View>
          <Text>Hello World</Text>
          <StatusBar style="auto" />
          <Input />
          <Scrollable />
          <List />
          <Styling />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
