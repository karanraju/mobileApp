import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Screen1} from './Screen1';
import {Screen2} from './Screen2';

const Tab = createBottomTabNavigator();

export const BottonNavigator = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Screen1} />
        <Tab.Screen name="Settings" component={Screen2} />
      </Tab.Navigator>
    </>
  );
};
