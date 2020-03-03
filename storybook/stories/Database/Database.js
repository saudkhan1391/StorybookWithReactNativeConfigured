import * as React from 'react';
import {Appbar, TextInput} from 'react-native-paper';
import {StyleSheet, ScrollView, Image} from 'react-native';
import {Button} from 'react-native-paper';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import logo from '../../../assets/images/logo.png';
export default function Database() {
  return (
    <View style={{borderWidth: 1, height: '100%'}}>
      {/* <View style={{height: 1000, width: '100%'}}> */}
      <Appbar style={styles.top} raised theme={{dark: true}}>
        <Appbar.Action
          icon="arrow-left"
          color="white"
          style={{borderColor: 'white'}}
          onPress={() => console.log('Pressed archive')}
        />
        <Text style={{color: 'white', fontSize: 17}}>DATABASE</Text>
        <Appbar.Action
          icon="menu"
          color="white"
          onPress={() => console.log('Pressed delete')}
        />
      </Appbar>
      <ScrollView style={{}} contentContainerStyle={{}}>
        <View style={{height: 20}} />
        <Text style={{textAlign: 'center', fontSize: 24}}>
          Create a new Furbaby
        </Text>
        <View style={{height: 20}} />
        <Button
          mode="contained"
          contentStyle={{backgroundColor: '#8DC246', height: 60}}
          style={{width: '80%', alignSelf: 'center'}}>
          Manually add a furbaby
        </Button>
        <View style={styles.borderLine} />
        <View style={{height: 40}} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '90%',
            alignSelf: 'center',
          }}>
          <TextInput
            mode="outlined"
            style={{
              width: '100%',
              alignSelf: 'center',
              backgroundColor: 'white',
            }}
            placeholder="     Search the furbaby tracker database"></TextInput>
          <AntDesign
            name="search1"
            size={24}
            color="#30C5FD"
            style={{position: 'absolute', right: 20}}
          />
        </View>
        <Text style={{width: '90%', alignSelf: 'center', lineHeight: 20}}>
          Search by the pet's name, Pet's Owner Name. ,email or phone, or scroll
          through the database below. Records are listed by Pet Owner's last
          name and first name.
        </Text>
        <View style={styles.Record}>
          <View style={styles.ViewRecordsTextContainer}>
            <Text style={styles.ViewRecordsText}>VIEW RECORDS</Text>
          </View>
          <View style={styles.recordFirstRow}>
            <Ionicons name="ios-person" size={15} color="#30C5FD" />
            <Text style={styles.petownername}>
              Akram, Assad | +92 3119265209
            </Text>
          </View>
          <View style={styles.recordFirstRow}>
            <Ionicons name="ios-paw" size={15} color="#8DC246" />
            <Text style={styles.petownername}>Akhu</Text>
          </View>
          <View style={{height:15}} />
        </View>
        <View style={styles.Record}>
          <View style={styles.ViewRecordsTextContainer}>
            <Text style={styles.ViewRecordsText}>VIEW RECORDS</Text>
          </View>
          <View style={styles.recordFirstRow}>
            <Ionicons name="ios-person" size={15} color="#30C5FD" />
            <Text style={styles.petownername}>
              Akram, Assad | +92 3119265209
            </Text>
          </View>
          <View style={styles.recordFirstRow}>
            <Ionicons name="ios-paw" size={15} color="#8DC246" />
            <Text style={styles.petownername}>Akhu</Text>
          </View>
          <View style={{height:15}} />
        </View>
        <View style={styles.Record}>
          <View style={styles.ViewRecordsTextContainer}>
            <Text style={styles.ViewRecordsText}>VIEW RECORDS</Text>
          </View>
          <View style={styles.recordFirstRow}>
            <Ionicons name="ios-person" size={15} color="#30C5FD" />
            <Text style={styles.petownername}>
              Akram, Assad | +92 3119265209
            </Text>
          </View>
          <View style={styles.recordFirstRow}>
            <Ionicons name="ios-paw" size={15} color="#8DC246" />
            <Text style={styles.petownername}>Akhu</Text>
          </View>
          <View style={{height:15}} />
        </View>
      </ScrollView>
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  petownername: {fontSize: 16, color: '#666', paddingLeft: 10},
  recordFirstRow: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height:25
  },
  ViewRecordsTextContainer: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  Record: {borderWidth: 0.3, width: '90%', alignSelf: 'center', marginTop: 30},
  ViewRecordsText: {
    color: '#30C5FD',
    borderColor: '#30C5FD',
    borderWidth: 1,
    width: '35%',
    textAlign: 'center',
    lineHeight: 30,
  },
  borderLine: {
    height: 40,
    borderBottomWidth: 0.6,
    borderColor: '#666',
    width: '90%',
    alignSelf: 'center',
  },
  addactivityBtn: {
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
    height: 250,
    width: '90%',
    alignSelf: 'center',
  },
  dropdownstyle: {
    width: '90%',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: '#efefef',
    height: '12%',
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
