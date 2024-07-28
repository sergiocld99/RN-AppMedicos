import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Specialties from "../../screens/Doctors/Specialties";
import DoctorsOfSpeciality from "../../screens/Doctors/DoctorsOfSpeciality";
import DoctorDetail from "../../screens/Doctors/DoctorDetail";
import MainHeader from "../../components/MainHeader";
import i18n from "../../translations/i18n";

const Stack = createNativeStackNavigator();

const DoctorsStackNav = () => {

  const getTitle = (routeName) => {
    switch(routeName){
      case 'Specialties':
        return i18n.t('specialties')
      case 'DoctorsOfSpecialty':
        return i18n.t('doctors')
      case 'DoctorDetail':
        return i18n.t('doctor_detail')
      default:
        return routeName
    }
  }

  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: () => <MainHeader title={getTitle(route.name)} />,
      })}
    >
      <Stack.Screen name="Specialties" component={Specialties} />
      <Stack.Screen name="DoctorsOfSpecialty" component={DoctorsOfSpeciality} />
      <Stack.Screen name="DoctorDetail" component={DoctorDetail} />
    </Stack.Navigator>
  );
};

export default DoctorsStackNav;
