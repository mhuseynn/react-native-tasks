import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UserStack from './UserStack';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="UserTab" component={UserStack} />
    </Tab.Navigator>
  )
}

export default TabStack