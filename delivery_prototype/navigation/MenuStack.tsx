import MenuCategoryScreen from '../screens/Menu/Category';
import MainMenuScreen from '../screens/Menu/MainMenu';
import MenuItem from '../screens/Menu/Item';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type MenuStackParamList = {
  MainMenu: undefined,
  Category: { categoryId: number },
  Item: { itemId: number }
}

const Stack = createNativeStackNavigator<MenuStackParamList>();

function MenuStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='MainMenu' component={MainMenuScreen} />
      <Stack.Screen name="Category" component={MenuCategoryScreen} />
    </Stack.Navigator>
  );
}

export default MenuStack
