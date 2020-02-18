// In App.js in a new project

import * as React from 'react';
import {View, Text,AsyncStorage} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Gratitude from './Gratitude';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import CheckPreviousScreen from './CheckPreviousScreen';
import { Consumer } from './store/Store';
import ChildComponent from './ConsumerText';

const Stack = createStackNavigator();
var CurrentScreem="Gratitude"
function Navigator1() {
  // cosnt [currentScreem,setCurrentScreen]=React.useState("Gratitude");
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" >
      <Stack.Screen
          name="CheckPreviousScreen"
          // component={CurrentScreem}
          component={CheckPreviousScreen}
          options={{
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Gratitude"
          // component={CurrentScreem}
          component={Gratitude}
          options={{
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Screen2"
          // component={ChildComponent}
          component={Screen2}
          options={{
            gestureDirection: 'horizontal',
            title: 'Screen2',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Screen3"
          component={Screen3}
          options={{
            gestureDirection: 'horizontal',
            title: 'Profile',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator1;
