import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from 'react-native'
import React from 'react'
import { colors } from "../global/colors";

// Importar íconos
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import DoctorsStackNav from "./Tabs/DoctorsStackNav";
import AppointmentsStackNav from "./Tabs/AppointmentsStackNav";
import MapStackNav from "./Tabs/MapStackNav";
import ProfileStackNav from "./Tabs/ProfileStackNav";


const Tab = createBottomTabNavigator()

// Función para obtener el color del ícono de la pestaña 
// según si está seleccionada o no
const getIconColor = (focused) => {
  return focused ? colors.focusedIcon : colors.unfocusedIcon;
}

/**
 * 
 * @returns Navegador para las pantallas principales de la aplicación
 */
const MainTabsNavigator = () => {
  return (
    <Tab.Navigator screenOptions={
      {
        tabBarActiveTintColor: colors.focusedIcon,
        tabBarInactiveTintColor: colors.unfocusedIcon,
      }
    }>
      <Tab.Screen name="DoctorsTab" component={DoctorsStackNav} options={
        {
          tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="doctor" size={24} color={getIconColor(focused)} />
        }
      } />
      <Tab.Screen name="AppointmentsTab" component={AppointmentsStackNav} options={
        {
          tabBarIcon: ({ focused }) => <MaterialIcons name="event" size={24} color={getIconColor(focused)} />
        }
      } />
      <Tab.Screen name="MapTab" component={MapStackNav} options={
        {
          tabBarIcon: ({ focused }) => <MaterialIcons name="map" size={24} color={getIconColor(focused)} />
        }
      } />
      <Tab.Screen name="ProfileTab" component={ProfileStackNav} options={
        {
          tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="account" size={24} color={getIconColor(focused)} />
        }
      } />
    </Tab.Navigator>
  )
}

export default MainTabsNavigator