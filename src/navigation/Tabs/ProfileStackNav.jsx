import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../../screens/Profile/ProfileScreen";

const Stack = createNativeStackNavigator();

const ProfileStackNav = () => {
  return (
    <Stack.Navigator screenOptions={
      {
        headerShown: false
      }
    } >
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default ProfileStackNav;