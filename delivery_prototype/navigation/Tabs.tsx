import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import MenuScreen from '../screens/Menu';
import CartScreen from '../screens/Cart';
import ProfileScreen from '../screens/Profile';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Tab = createBottomTabNavigator();

interface TabBarIconProps {
  focused: boolean,
  color: string,
  size: number
}

const ICON_SIZE = 28

export default function TabsNavigation() {

  const cartItems = useSelector((state: RootState) => state.cart.items)

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.hintText,
        headerTintColor: Colors.primary,
        headerStyle: {
          backgroundColor: "white",
          borderBottomWidth: 0,
          shadowColor: Colors.shadows,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 5
        },
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          marginTop: 10,
          opacity: 0.9,
          position: "absolute",
          borderTopWidth: 0,
          shadowColor: Colors.shadows,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 5
        },
        headerTitle: "Taverna",
      }}

    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }: TabBarIconProps) => {
            return <Ionicons color={color} size={ICON_SIZE} name='home-outline' />
          }
        }}
        name="Acasa" component={HomeScreen} />
      <Tab.Screen
        name="Meniu"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ color }: TabBarIconProps) => {
            return <Ionicons color={color} size={ICON_SIZE} name='restaurant' />
          }
        }}
      />
      <Tab.Screen
        name="Cos"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }: TabBarIconProps) => {
            return <Ionicons color={color} size={ICON_SIZE} name='cart-outline' />
          },
          tabBarBadge: cartItems.length === 0 ? undefined : cartItems.length,
          tabBarBadgeStyle: {
            backgroundColor: Colors.accent,
            color: Colors.primaryText
          }
        }}
      />
      <Tab.Screen name="Profil" component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }: TabBarIconProps) => {
            return <Ionicons color={color} size={ICON_SIZE} name='person-outline' />
          }
        }}
      />
    </Tab.Navigator>
  );
}
