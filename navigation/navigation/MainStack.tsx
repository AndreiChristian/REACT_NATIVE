import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './navigationTypes';
import DrawerContainer from './Drawer';
import { Button } from 'react-native';
import { HomeScreen } from '../screens/Home';
import { DetailsScreen } from '../screens/Details';

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        title: 'My home',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name='Home' component={HomeScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }}
      />
      <Stack.Screen name='Details' component={DetailsScreen} />
      <Stack.Screen name='Drawer' component={DrawerContainer} />
    </Stack.Navigator>
  )
}
