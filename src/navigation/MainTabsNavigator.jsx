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
import i18n from "../translations/i18n";


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
        headerShown: false
      }
    }>
      <Tab.Screen name="DoctorsTab" component={DoctorsStackNav} options={
        {
          tabBarLabel: i18n.t("doctors"),
          tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="doctor" size={24} color={getIconColor(focused)} />
        }
      } />
      <Tab.Screen name="AppointmentsTab" component={AppointmentsStackNav} options={
        {
          tabBarLabel: i18n.t("appointments"),
          tabBarIcon: ({ focused }) => <MaterialIcons name="event" size={24} color={getIconColor(focused)} />
        }
      } />
      <Tab.Screen name="MapTab" component={MapStackNav} options={
        {
          tabBarLabel: i18n.t("map"),
          tabBarIcon: ({ focused }) => <MaterialIcons name="map" size={24} color={getIconColor(focused)} />
        }
      } />
      <Tab.Screen name="ProfileTab" component={ProfileStackNav} options={
        {
          tabBarLabel: i18n.t("profile"),
          tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="account" size={24} color={getIconColor(focused)} />
        }
      } />
    </Tab.Navigator>
  )
}

export default MainTabsNavigator