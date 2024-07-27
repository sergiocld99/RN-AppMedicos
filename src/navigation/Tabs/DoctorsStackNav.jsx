import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Specialties from "../../screens/Doctors/Specialties";

const Stack = createNativeStackNavigator();

const DoctorsStackNav = () => {
  return (
    <Stack.Navigator screenOptions={
      {
        headerShown: false
      }
    } >
      <Stack.Screen name="Specialties" component={Specialties} />
    </Stack.Navigator>
  );
}

export default DoctorsStackNav