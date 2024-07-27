import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppointmentsScreen from "../../screens/Main/AppointmentsScreen";

const Stack = createNativeStackNavigator();

const AppointmentsStackNav = () => {
  return (
    <Stack.Navigator screenOptions={
      {
        headerShown: false
      }
    } >
      <Stack.Screen name="Appointments" component={AppointmentsScreen} />
    </Stack.Navigator>
  );
}

export default AppointmentsStackNav;