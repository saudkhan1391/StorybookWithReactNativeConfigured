import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import {View, Text} from 'react-native';
export default function AddEditTracker (){
    return (
      <View style={{height: '100%', width: '100%'}}>
        <Appbar style={styles.top} raised theme={{dark: true}}>
          <Appbar.Action
            icon="arrow-left"
            color="white"
            style={{borderColor: 'white'}}
            onPress={() => console.log('Pressed archive')}
          />
          <Text style={{color: 'white', fontSize: 17}}>IN PROGRESS</Text>
          <Appbar.Action
            icon="menu"
            color="white"
            onPress={() => console.log('Pressed delete')}
          />
        </Appbar>
        <View style={{borderWidth: 0, borderColor: 'red', height: '50%'}}>
          <View style={{height: '10%'}} />
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              width: '90%',
              alignSelf: 'center',
            }}>
            ADD/EDIT/REMOVE TRACKER COMPONENT
          </Text>
          <View style={{height: '5%', borderWidth: 0}} />
          <Text style={{width: '90%', alignSelf: 'center'}}>
            To add multiple separate by a line break
          </Text>
          <View style={{height: '1%'}} />
          <View
            style={{
              borderWidth: 1,
              height: '60%',
              width: '90%',
              alignSelf: 'center',
            }}></View>
        </View>
        <Button
          mode="contained"
          color="#30C5FD"
          labelStyle={{color: 'white'}}
          contentStyle={{color: 'red'}}
          style={{
            height: '9%',
            width: '62%',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          Update
        </Button>
        <View style={{height:"3%"}} />
        <Button
          mode="contained"
          color="#666"
          labelStyle={{color: 'white'}}
          contentStyle={{color: 'red'}}
          style={{
            height: '9%',
            width: '62%',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          Cancel
        </Button>
      </View>
    );
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#30C5FD',
    justifyContent: 'space-between',
    height: '10%',
    // height:40
  },
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});
