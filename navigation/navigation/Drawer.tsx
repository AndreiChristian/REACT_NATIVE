import { createDrawerNavigator } from "@react-navigation/drawer";
import Feed from "../screens/Feed";
import FadeIn from "../screens/Animations/FadeIn";
import Translate from "../screens/Animations/Translate";
import Scaler from "../screens/Animations/Scaler";
import Rotate from "../screens/Animations/Rotate";

const Drawer = createDrawerNavigator();

export default function DrawerContainer() {
  return (
    <Drawer.Navigator initialRouteName="Feed"  >
      <Drawer.Screen
        name="Feed"
        component={Feed}
        options={{ drawerLabel: 'Animation' }}
      />
      <Drawer.Screen
        name="FadeIn"
        component={FadeIn}
        options={{ drawerLabel: "FadeIN" }}
      />
      <Drawer.Screen
        name="Translate"
        component={Translate}
        options={{ drawerLabel: "Translate" }}
      />
      <Drawer.Screen
        name="Scaler"
        component={Scaler}
        options={{ drawerLabel: "Scaler" }}
      />
      <Drawer.Screen
        name="Rotate"
        component={Rotate}
        options={{ drawerLabel: "Rotate" }}
      />
    </Drawer.Navigator>
  );
}
