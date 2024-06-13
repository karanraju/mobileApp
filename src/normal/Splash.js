import {useEffect} from 'react';
import {Text, View} from 'react-native';

export const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Parent');
    }, 2000);
  }, []);

  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
};
