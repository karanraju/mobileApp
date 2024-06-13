import {Text, View} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {Main} from './Main';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={Main} />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
};
