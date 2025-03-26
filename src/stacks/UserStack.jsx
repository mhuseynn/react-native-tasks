import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Users from '../screens/user/Users';
import UserDetail from '../screens/user/UserDetail';

const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen name="UserDetail" component={UserDetail} />
    </Stack.Navigator>
  );
};

export default UserStack;
