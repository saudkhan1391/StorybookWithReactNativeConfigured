import React from 'react';
import {View, Text, AsyncStorage} from 'react-native';

export default function CheckPreviousScreen(props) {
  console.log(props, 'props of check prev screen');
  _retrieveData();
  async function _retrieveData() {
    try {
      const value = await AsyncStorage.getItem('@MySuperStore:currentScreen');
      if (value !== null) {
        var valueInJson = JSON.parse(value);
        // We have data!!
        console.log('Screen Name', value);
        console.log('Screen Name JSON', valueInJson);
        CurrentScreem = valueInJson;
        props.navigation.navigate(valueInJson);
      } else {
        props.navigation.navigate('Gratitude');
      }
    } catch (error) {
      console.log(error, 'error in retreving data');
      // Error retrieving data
    }
  }
  return (
    <View>
      <Text>Loading the last state</Text>
    </View>
  );
}
