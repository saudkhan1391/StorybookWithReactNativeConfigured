import * as React from 'react';
import {Appbar, TextInput} from 'react-native-paper';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-paper';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function CreateNewFurbaby() {
  const [CustomisePlanVisible,SetCustomisePlanVisible] = React.useState(false);
  return (
    <View style={{borderWidth: 0, borderColor: 'red'}}>
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
        <View style={{borderWidth: 2, borderColor: 'yellow',height:2500}}>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              borderWidth: 0,
              borderColor: 'green',
            }}>
            <View style={{height: 20}} />
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
                textAlign: 'center',
                color: '#666',
              }}>
              FUR BABIES SCHEDULED FOR
            </Text>
            <View style={{height: 10}} />
            <Text
              style={{
                fontSize: 22,
                fontWeight: '600',
                textAlign: 'center',
                color: '#666',
              }}>
              Today, Feb 24, 2020
            </Text>
            <View style={{height: 40}} />
            <Text style={{fontSize: 17}}>MANUALLY CREATE A NEW FURBABY</Text>
            <View style={{height: 40}} />
            <View>
              <View style={[styles.inputNlabelContainer, {marginTop: 0}]}>
                <Text style={styles.ownerEmailText}>
                  Owner Email <Text style={{color: 'red'}}>*</Text>{' '}
                </Text>
                <TextInput
                  //   label="Email"
                  mode="outlined"
                  value={''}
                  style={{}}
                  selectionColor="red"
                  underlineColor="blue"
                  underlineColorAndroid="aqua"
                  theme={{colors: ''}}
                />
              </View>
              <View style={styles.inputNlabelContainer}>
                <Text style={styles.ownerEmailText}>
                  Owner First Name <Text style={{color: 'red'}}>*</Text>{' '}
                </Text>
                <TextInput mode="outlined" theme={{colors: ''}} />
              </View>
              <View style={styles.inputNlabelContainer}>
                <Text style={styles.ownerEmailText}>
                  Owner Last Name <Text style={{color: 'red'}}>*</Text>{' '}
                </Text>
                <TextInput mode="outlined" theme={{colors: ''}} />
              </View>
              <View style={styles.inputNlabelContainer}>
                <Text
                  style={[
                    styles.ownerEmailText,
                    {paddingVertical: 0, paddingTop: 6},
                  ]}>
                  Owner Phone Number <Text style={{color: 'red'}}>*</Text>{' '}
                </Text>
                <Text style={{fontSize: 12}}>
                  Please enter the 10 digit phone number in the format
                  0000000000
                </Text>
                <TextInput mode="outlined" theme={{colors: ''}} />
              </View>
              <View style={styles.inputNlabelContainer}>
                <Text style={styles.ownerEmailText}>
                  Owner Address <Text style={{color: 'red'}}>*</Text>{' '}
                </Text>
                <TextInput mode="outlined" theme={{colors: ''}} />
              </View>
              <View style={styles.inputNlabelContainer}>
                <Text style={styles.ownerEmailText}>
                  Furbaby Name <Text style={{color: 'red'}}>*</Text>{' '}
                </Text>
                <TextInput mode="outlined" theme={{colors: ''}} />
              </View>
              <View style={styles.inputNlabelContainer}>
                <Text style={styles.ownerEmailText}>
                  Owner Image <Text style={{color: 'red'}}>*</Text>{' '}
                </Text>
                <TextInput mode="outlined" theme={{colors: ''}} />
              </View>
              <View style={styles.inputNlabelContainer}>
                <Text style={styles.ownerEmailText}>
                  Owner Microchip <Text style={{color: 'red'}}>*</Text>{' '}
                </Text>
                <TextInput mode="outlined" theme={{colors: ''}} />
              </View>
              <View style={styles.inputNlabelContainer}>
                <Text style={styles.ownerEmailText}>
                  Furbaby DOB <Text style={{color: 'red'}}>*</Text>{' '}
                </Text>
                <TextInput mode="outlined" theme={{colors: ''}} />
              </View>
              <View style={styles.inputNlabelContainer}>
                <Text style={styles.ownerEmailText}>
                  Species <Text style={{color: 'red'}}>*</Text>{' '}
                </Text>
                <TextInput mode="outlined" theme={{colors: ''}} />
              </View>
              <View style={styles.inputNlabelContainer}>
                <Text style={styles.ownerEmailText}>
                  Breed <Text style={{color: 'red'}}>*</Text>{' '}
                </Text>
                <TextInput mode="outlined" theme={{colors: ''}} />
              </View>
              <Text style={{textAlign: 'center', fontSize: 18, marginTop: 40}}>
                SELECT REASON FOR VISIT AND DATE
              </Text>
              <View style={styles.inputNlabelContainer}>
                <Text style={styles.ownerEmailText}>
                  Visit Reason <Text style={{color: 'red'}}>*</Text>{' '}
                </Text>
                <TextInput mode="outlined" theme={{colors: ''}} />
              </View>
              <View style={styles.inputNlabelContainer}>
                <Text style={styles.ownerEmailText}>
                  Schedule Date <Text style={{color: 'red'}}>*</Text>{' '}
                </Text>
                <TextInput mode="outlined" theme={{colors: ''}} />
              </View>
              {CustomisePlanVisible == false ? (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      SetCustomisePlanVisible(!CustomisePlanVisible);
                    }}>
                    <Text style={styles.optionButon}>
                      OPTIONAL: REVIEW A CUSTOMISE TREATMENT PLAN{' '}
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View>
                    <Text style={{marginTop:50}}>DEFAULT TREATMENT PLAN INCLUDES</Text>
                      <TouchableOpacity
                    onPress={() => {
                      SetCustomisePlanVisible(!CustomisePlanVisible);
                    }}>
                    <Text style={[styles.optionButon,{alignSelf:"flex-start",width:"35%",marginTop:10,marginBottom:10}]}>
                      REMOVE{' '}
                    </Text>
                  </TouchableOpacity>
                  <Text>OPTIONAL - CUSTOMIZE TREATMENT PLAN</Text>

                  <Text style={{marginTop: 40}}>
                    Add custom Plan components
                  </Text>
                  <Text>To add multiple seperate by a line break</Text>
                  <TextInput
                    mode={'outlined'}
                    style={{height: 120}}
                    multiline={true}
                    numberOfLines={40}
                  />
                </View>
              )}
            </View>
          </View>

          <View
            style={{
              borderWidth: 0,
              borderColor: 'green',
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 50,
            }}>
            {/* <View style={{height: 50}} /> */}
            <Button
              onPress={() => {
                alert('Button pressed');
              }}
              mode="contained"
              color="#30C5FD"
              labelStyle={{color: 'white'}}
              contentStyle={{color: 'red'}}
              style={styles.addactivityBtn}>
              ADD TO SCHDULE
            </Button>
            {/* <View style={{height: 20}} /> */}
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
  optionButon: {
    borderWidth: 1,
    borderColor: '#A01D5F',
    fontSize: 12,
    textAlign: 'center',
    padding: 6,
    marginTop: 50,
    color: '#A01D5F',
    //   width:"60%",
    alignSelf: 'center',
  },
  inputNlabelContainer: {marginTop: 30},
  ownerEmailText: {fontSize: 17, paddingVertical: 6},
  addactivityBtn: {
    height: 60,
    width: '40%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    //   borderWidth:2
  },
  textInputStyle: {
    borderWidth: 2,
    borderColor: '#efeff4',
    // height: '35%',
    height: 150,
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
