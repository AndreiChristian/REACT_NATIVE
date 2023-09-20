import { createStackNavigator } from "@react-navigation/stack";
import TabsNavigation from "./Tabs";
import LoginScreen from "../screens/Auth/LoginScreen";
import RegisterScreen from "../screens/Auth/RegisterScreen";
import MenuItem from "../screens/Menu/Item";

const Stack = createStackNavigator()

export default function RootStack() {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Tabs" component={TabsNavigation} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ presentation: "modal" }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ presentation: "modal" }} />
      <Stack.Screen name="Item" component={MenuItem} options={{ presentation: "modal" }} />
    </Stack.Navigator>
  )

}
