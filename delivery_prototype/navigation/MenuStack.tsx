import { createStackNavigator } from '@react-navigation/stack';
import MenuCategoryScreen from '../screens/Menu/Category';
import MainMenuScreen from '../screens/Menu/MainMenu';

export type MenuStackParamList = {
  MainMenu: undefined,
  Category: { categoryId: number }
}

const Stack = createStackNavigator<MenuStackParamList>();

function MenuStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='MainMenu' component={MainMenuScreen} />
      <Stack.Screen name="Category" component={MenuCategoryScreen} />
    </Stack.Navigator>
  );
}

export default MenuStack
