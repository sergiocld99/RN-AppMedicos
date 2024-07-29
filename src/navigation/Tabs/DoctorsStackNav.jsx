import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Specialties from "../../screens/Doctors/Specialties";
import DoctorsOfSpeciality from "../../screens/Doctors/DoctorsOfSpeciality";
import DoctorDetail from "../../screens/Doctors/DoctorDetail";
import MainHeader from "../../components/MainHeader";
import i18n from "../../translations/i18n";
import LocationPreview from "../../screens/Doctors/LocationPreview";
import AppointmentForm from "../../screens/Doctors/AppointmentForm";

const Stack = createNativeStackNavigator();

const DoctorsStackNav = () => {

  const getTitle = (route) => {
    switch(route.name){
      case 'Specialties':
        return i18n.t('specialties')
      case 'DoctorsOfSpecialty':
        return i18n.t('doctors')
      case 'DoctorDetail':
        return route.params?.specialty
      case 'LocationPreview':
        return i18n.t('location')
      case 'AppointmentForm':
        return i18n.t('appointment_form')
      default:
        return routeName
    }
  }

  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: () => <MainHeader title={getTitle(route)} />,
      })}
    >
      <Stack.Screen name="Specialties" component={Specialties} />
      <Stack.Screen name="DoctorsOfSpecialty" component={DoctorsOfSpeciality} />
      <Stack.Screen name="DoctorDetail" component={DoctorDetail} />
      <Stack.Screen name="LocationPreview" component={LocationPreview} />
      <Stack.Screen name="AppointmentForm" component={AppointmentForm} />
    </Stack.Navigator>
  );
};

export default DoctorsStackNav;
