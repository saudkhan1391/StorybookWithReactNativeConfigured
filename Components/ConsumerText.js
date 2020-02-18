import React, {useContext, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import authContext, {Consumer} from '../Components/store/Store';
// import authContext, { Consumer } from "./store/store";

export default function ChildComponent(props) {
  const contextValue = useContext(authContext);
  console.log(contextValue, 'context Value');
  return (
    <Consumer>
      {data => {
        console.log(data, 'Data');
        return (
          <View style={styles.container}>
            <Text>
              Child Component
              {/* {contextValue} */}
              {/* {data} */}
            </Text>
            <TouchableOpacity
              style={{
                width: 100,
                height: 50,
                backgroundColor: 'brown',
                borderWidth: 1,
              }}
              onPress={() => {
                //   data.setContextValue("set by consumer");
                contextValue.setContextValue('set by cons');
              }}>
              <Text>Change Value of Provider</Text>
            </TouchableOpacity>
          </View>
        );
      }}
      {/* {props.children} */}
    </Consumer>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '33%',
    width: '100%',
    backgroundColor: '#ebebeb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  parentContainer: {
    // flex: 1,
    height: '50%',
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
