import {Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

export const Home = () => {
  return (
    <>
      <View style={{flex: 1}}>
        <WebView
          source={{uri: 'http://pphl.midashealthservices.com.np:8685'}}
          style={{flex: 1}}
        />
      </View>
    </>
  );
};
