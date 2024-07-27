import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Specialties from "../../screens/Doctors/Specialties";
import DoctorsOfSpeciality from "../../screens/Doctors/DoctorsOfSpeciality";

const Stack = createNativeStackNavigator();

const DoctorsStackNav = () => {
  return (
    <Stack.Navigator screenOptions={
      {
        headerShown: false
      }
    } >
      <Stack.Screen name="Specialties" component={Specialties} />
      <Stack.Screen name="DoctorsOfSpecialty" component={DoctorsOfSpeciality} />
    </Stack.Navigator>
  );
}

export default DoctorsStackNav