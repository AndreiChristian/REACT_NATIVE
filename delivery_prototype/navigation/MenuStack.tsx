import { createStackNavigator } from '@react-navigation/stack';
import MenuCategoryScreen from '../screens/Menu/Category';
import MainMenuScreen from '../screens/Menu/MainMenu';
import MenuItem from '../screens/Menu/Item';

export type MenuStackParamList = {
  MainMenu: undefined,
  Category: { categoryId: number },
  Item: { itemId: number }
}

const Stack = createStackNavigator<MenuStackParamList>();

function MenuStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='MainMenu' component={MainMenuScreen} />
      <Stack.Screen name="Category" options={{ animationEnabled: false }} component={MenuCategoryScreen} />
      <Stack.Screen name='Item' component={MenuItem} />
    </Stack.Navigator>
  );
}

export default MenuStack
