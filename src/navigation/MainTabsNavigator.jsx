import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from "../screens/Main/HomeScreen";
import ProfileScreen from "../screens/Main/ProfileScreen";
import AppointmentsScreen from "../screens/Main/AppointmentsScreen";
import MapScreen from "../screens/Main/MapScreen";
import { colors } from "../global/colors";

// Importar íconos
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


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
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={
        {
          tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="doctor" size={24} color={getIconColor(focused)} />
        }
      } />
      <Tab.Screen name="Appointments" component={AppointmentsScreen} options={
        {
          tabBarIcon: ({ focused }) => <MaterialIcons name="event" size={24} color={getIconColor(focused)} />
        }
      } />
      <Tab.Screen name="Map" component={MapScreen} options={
        {
          tabBarIcon: ({ focused }) => <MaterialIcons name="map" size={24} color={getIconColor(focused)} />
        }
      } />
      <Tab.Screen name="Profile" component={ProfileScreen} options={
        {
          tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="account" size={24} color={getIconColor(focused)} />
        }
      } />
    </Tab.Navigator>
  )
}

export default MainTabsNavigator