import * as React from 'react';
import {Appbar, TextInput} from 'react-native-paper';
import {StyleSheet, ScrollView} from 'react-native';
import {Button} from 'react-native-paper';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function PeeAndPoop() {
  return (
    <View style={{borderWidth: 1}}>
      {/* <View style={{height: 1000, width: '100%'}}> */}
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
      <ScrollView style={{}} contentContainerStyle={{}}>
          <View style={{height:"20%",width:"100%",backgroundColor:"rgba(0,0,0,0.7)"}} ></View>
        <View style={{height: 850, borderWidth: 0, borderColor: 'yellow'}}>
          <View style={{borderWidth: 0, borderColor: 'red', height: 300}}>
            {/* <View style={{height: '6%'}} /> */}
            {/* <Text style={styles.notesTitle}>Notes</Text> */}
            <View style={{height: '3%', borderWidth: 0}} />
            <Text style={{width: '90%', alignSelf: 'center', fontSize: 17}}>
              Select the pee and pop from the drop down below.
              Click add activity to send the update to the pet owner.
            </Text>
            <View style={{height: '10%'}} />
            <Text
              style={{
                fontSize: 17,
                width: '90%',
                alignSelf: 'center',
              }}>
              Pee & Pop
            </Text>
            <View style={{height: '1%'}} />
            <View style={styles.dropdownstyle}>
              <Text>SELECT</Text>
              <AntDesign name="caretdown" />
            </View>
            <View style={{height: '1%'}} />
          </View>
          <View style={{borderWidth: 0, borderColor: 'green'}}>
            {/* <View style={{height: 100}} /> */}
            <Button
              mode="contained"
              color="#A01D5F"
              labelStyle={{color: 'white'}}
              contentStyle={{color: 'red'}}
              style={styles.addactivityBtn}>
                  ADD ACTIVITY
            </Button>
            <View style={{height: 20}} />
            <Button
              mode="contained"
              color="#666"
              labelStyle={{color: 'white'}}
              contentStyle={{color: 'red'}}
              style={styles.addactivityBtn}>
              Cancel
            </Button>
          </View>
        </View>
      </ScrollView>
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
    addactivityBtn:{
        height: 60,
        width: '62%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        //   borderWidth:2
      },
  textInputStyle: {
    borderWidth: 2,
    borderColor: '#efeff4',
    // height: '35%',
    height:150,
    width: '90%',
    alignSelf: 'center',
  },
  dropdownstyle: {
    width: '90%',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#efefef',
    height: '15%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  notesTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    width: '90%',
    alignSelf: 'center',
  },
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
