// In App.js in a new project

import * as React from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Gratitude from './Gratitude';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import CheckPreviousScreen from './CheckPreviousScreen';
import {Consumer} from './store/Store';
import ChildComponent from './ConsumerText';
import WelcomeBack from './WelcomeBack';
import WelcomeUser from './WelcomeUser';
import SetLocation from './SetLocation';
import ForgotPassword from './ForgotPassword';
import SplahScreen from './SplashScreen';
import Logos from './Logos';
import OnBoarding from './OnBoarding';
import OnBoarding2 from './OnBoarding2';
import OnBoarding3 from './OnBoarding3';
import AddAddress from './AddAddress';

const Stack = createStackNavigator();
var CurrentScreem = 'Gratitude';
function Navigator1() {
  // cosnt [currentScreem,setCurrentScreen]=React.useState("Gratitude");
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
      <Stack.Screen
          name="AddAddress"
          component={AddAddress}
          options={{
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
      <Stack.Screen
          name="WelcomeUser"
          component={WelcomeUser}
          options={{
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="OnBoarding3"
          component={OnBoarding3}
          options={{
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="OnBoarding2"
          component={OnBoarding2}
          options={{
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="SplashScreen"
          component={SplahScreen}
          options={{
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />

        <Stack.Screen
          name="Logos"
          component={Logos}
          options={{
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="SetLocation"
          component={SetLocation}
          options={{
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        
        <Stack.Screen
          name="WelcomeBack"
          component={WelcomeBack}
          options={{
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="CheckPreviousScreen"
          component={CheckPreviousScreen}
          options={{
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Gratitude"
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
