// import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash} from './normal/Splash';
import {Parent} from './normal/Parent';
import {Home} from './Page/Home';

const Stack = createNativeStackNavigator();
export const AppNavigator = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Parent"
            component={Parent}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
