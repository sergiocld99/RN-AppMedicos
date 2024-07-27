import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MapScreen from "../../screens/Main/MapScreen";

const Stack = createNativeStackNavigator();

const MapStackNav = () => {
  return (
    <Stack.Navigator screenOptions={
      {
        headerShown: false
      }
    } >
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
}

export default MapStackNav;