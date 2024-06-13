/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

// import {SafeAreaView, Text, View} from 'react-native';
// import Route from './src/Route';

// function App() {
//   return (
//     <>
//       <SafeAreaView style={{flex: 1}}>
//         <View style={{}}>
//           <Route />
//         </View>
//       </SafeAreaView>
//     </>
//   );
// }

// export default App;

import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Route} from './src/Page/Route';
import {AppNavigator} from './src/AppNavigator';
import {Provider} from 'react-redux';
// import {store} from './src/store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Text>Hellooo</Text> */}
      {/* <Provider store={store}> */}
      <AppNavigator />
      {/* </Provider> */}
    </SafeAreaView>
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;
