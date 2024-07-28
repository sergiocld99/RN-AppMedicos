import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../../screens/Profile/ProfileScreen";
import MainHeader from "../../components/MainHeader";
import i18n from "../../translations/i18n";
import PictureSelector from "../../screens/Profile/PictureSelector";

const Stack = createNativeStackNavigator();

const ProfileStackNav = () => {
  // Función para obtener el título de la pantalla según el nombre de la ruta
  const getTitle = (routeName) => {
    switch(routeName){
      case 'Profile':
        return i18n.t('profile')
      default:
        return routeName
    }
  }

  return (
    <Stack.Navigator screenOptions={
      ({ route }) => ({
        header: () => <MainHeader title={getTitle(route.name)} />,
      })
    } >
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="PictureSelector" component={PictureSelector} />
    </Stack.Navigator>
  );
}

export default ProfileStackNav;