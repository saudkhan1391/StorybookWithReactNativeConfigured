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
import AddItems from './AddItems';
import PickupAddress from './PickupAddress';
import DeliveryAddress from './DeliveryAddress';
import HomeScreen from './HomeScreen';
import Notifications from './Notifications';
import Orders from './Orders';
import Success from '../Success';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Account from './Account';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
// var CurrentScreem = 'Gratitude';
function DrawerNav() {
  return (
    // <NavigationContainer independent={true}>
    <Drawer.Navigator initialRouteName="Account">
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="Success" component={Success} />
      <Drawer.Screen name="AddAddress" component={AddAddress} />
      <Drawer.Screen name="AddItems" component={AddItems} />
      <Drawer.Screen name="ForgotPassword" component={ForgotPassword} />
      <Drawer.Screen name="Logos" component={Logos} />
      <Drawer.Screen name="Notifications" component={Notifications} />
      <Drawer.Screen name="OnBoarding" component={OnBoarding} />
      <Drawer.Screen name="OnBoarding2" component={OnBoarding2} />
      <Drawer.Screen name="OnBoarding3" component={OnBoarding3} />
      <Drawer.Screen name="Orders" component={Orders} />
      <Drawer.Screen name="PickupAddress" component={PickupAddress} />
      <Drawer.Screen name="DeliveryAddress" component={DeliveryAddress} />
      <Drawer.Screen name="SetLocation" component={SetLocation} />
      <Drawer.Screen name="SplahScreen" component={SplahScreen} />
      <Drawer.Screen name="WelcomeBack" component={WelcomeBack} />
      <Drawer.Screen name="WelcomeUser" component={WelcomeUser} />
      <Drawer.Screen name="Gratitude" component={Gratitude} />
      <Drawer.Screen name="Screen2" component={Screen2} />
      <Drawer.Screen name="Screen3" component={Screen3} />
    </Drawer.Navigator>
    // </NavigationContainer>
  );
}
function Navigator1() {
  // cosnt [currentScreem,setCurrentScreen]=React.useState("Gratitude");
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="DrawerNav"
          component={DrawerNav}
          options={{
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Success"
          component={Success}
          options={{
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Orders"
          component={Orders}
          options={{
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />

        <Stack.Screen
          name="DeliveryAddress"
          component={DeliveryAddress}
          options={{
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="PickupAddress"
          component={PickupAddress}
          options={{
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="AddItems"
          component={AddItems}
          options={{
            gestureDirection: 'horizontal',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
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
