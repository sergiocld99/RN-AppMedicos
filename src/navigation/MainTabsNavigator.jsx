import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from "../screens/Main/HomeScreen";
import ProfileScreen from "../screens/Main/ProfileScreen";
import AppointmentsScreen from "../screens/Main/AppointmentsScreen";
import MapScreen from "../screens/Main/MapScreen";

const Tab = createBottomTabNavigator()

/**
 * 
 * @returns Navegador para las pantallas principales de la aplicación
 */
const MainTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Appointments" component={AppointmentsScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default MainTabsNavigator