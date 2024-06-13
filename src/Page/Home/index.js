import {Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
import {DrawerNavigator} from '../../drawer/drawerNavigator';

export const Home = () => {
  return (
    <>
      <View style={{flex: 1}}>
        <DrawerNavigator />
        {/* <WebView
          source={{uri: 'http://pphl.midashealthservices.com.np:8685'}}
          style={{flex: 1}}
        /> */}
      </View>
    </>
  );
};
