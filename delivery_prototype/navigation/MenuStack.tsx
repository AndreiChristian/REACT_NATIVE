import { createStackNavigator } from '@react-navigation/stack';
import MenuCategoryScreen from '../screens/Menu/Category';
import MainMenuScreen from '../screens/Menu/MainMenu';

const Stack = createStackNavigator();

function MenuStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='MainMenu' component={MainMenuScreen} />
      <Stack.Screen name="Category" component={MenuCategoryScreen} />
    </Stack.Navigator>
  );
}

export default MenuStack
