import {Text, View} from 'react-native';
import {DrawerNavigator} from '../drawer/drawerNavigator';

export const Parent = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Text>Parent</Text> */}
      <DrawerNavigator />
    </View>
  );
};
