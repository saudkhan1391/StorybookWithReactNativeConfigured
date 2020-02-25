// In App.js in a new project
//"storybook": "start-storybook -p 7007"
import * as React from 'react';
import {View, Text, AsyncStorage} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
import LoginMain from './Login/LoginMain';
// var CurrentScreem = 'Gratitude';
function DrawerNav() {
  return (
    // <NavigationContainer independent={true}>
    <Drawer.Navigator initialRouteName="OnBoarding">
         <Drawer.Screen name="LoginMain" component={LoginMain} />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator1;
