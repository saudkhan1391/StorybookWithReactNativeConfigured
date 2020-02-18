import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import EntypIcon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
export default function AddAddress(props) {
  return (
    <View>
      <View style={styles.header}>
        <Icon name={'ios-close'} size={24} />
        <Text style={styles.headerText}>Add Address</Text>
        <View />
      </View>
      <ScrollView
        style={{}}
        contentContainerStyle={{
          height: 700,
        //   height: 650,
        //   borderWidth: 2,
          borderColor: 'red',
        }}>
        <View style={styles.container}>
          <View style={styles.welcomeBackView}>
            <Text style={styles.welcomeBackText}>Choose your address type</Text>
          </View>
          <View style={styles.signInToContinueView}>
            <View>
              <TouchableOpacity style={styles.typesButton}>
                <Text style={styles.signIntoContinueText}>Home</Text>
              </TouchableOpacity>
              <IconFA5
                name={'check-circle'}
                size={22}
                style={styles.checkcircle}
              />
            </View>
            <View>
              <TouchableOpacity style={styles.typesButton}>
                <Text style={styles.signIntoContinueText}>Office</Text>
              </TouchableOpacity>
              <EntypIcon name="circle" size={22} style={styles.circle} />
            </View>
            <View>
              <TouchableOpacity style={styles.typesButton}>
                <Text style={styles.signIntoContinueText}>Other</Text>
              </TouchableOpacity>
              <EntypIcon name="circle" size={22} style={styles.circle} />
            </View>
          </View>
          <View style={styles.userinputsContainer}>
            <View style={styles.usernameView}>
              <TextInput style={{paddingHorizontal: 10}} placeholder="Street" />
            </View>
            <View style={styles.usernameView}>
              <TextInput style={{paddingHorizontal: 10}} placeholder="City" />
            </View>
            <View style={styles.usernameView}>
              <TextInput style={{paddingHorizontal: 10}} placeholder="State" />
            </View>
            <View style={styles.usernameView}>
              <TextInput
                style={{paddingHorizontal: 10}}
                placeholder="Country"
              />
            </View>
            <View style={styles.usernameView}>
              <TextInput
                style={{paddingHorizontal: 10}}
                placeholder="Zip Code"
              />
            </View>
          </View>
          <View style={styles.signButtonView}>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#fe5497', '#7f2284']}
              style={styles.LinearGradient}>
              <Text style={styles.signinText}>Save</Text>
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
var styles = StyleSheet.create({
  checkcircle: {alignSelf: 'center', marginTop: '10%', color: '#fE5398'},
  circle: {alignSelf: 'center', marginTop: '10%', color: '#d8d8d8'},
  typesButton: {
    // width:"100%",
    width: 80,
    height: 50,
    backgroundColor: '#832484',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  header: {
    height: '10%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  donthaveanaccountView: {
    marginTop: '20%',
    width: '95%',
    alignSelf: 'center',
    // justifyContent: 'space-around',
    // borderWidth: 2,
  },
  iconView: {
    width: 30,
    // borderWidth: 1,
  },
  signinText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signWithFBtext: {
    color: '#fe5398',
    fontWeight: 'bold',
  },
  LinearGradient: {
    height: '100%',
    width: '100%',
    // alignSelf:"center",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    // marginTop:"5%"
    marginTop: 40,
  },
  singWithFbView: {
    justifyContent: 'center',
    alignItems: 'center',
    // alignContent:"center",
    height: 50,
    borderWidth: 2,
    borderColor: '#fe5398',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 8,
    // marginTop: '10%',
    marginTop: 30,
    flexDirection: 'row',
  },
  signButtonView: {
    height: 50,
    // borderWidth: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  remebermeText: {
    color: '#666666',
  },
  forgotPassText: {
    color: '#8a8a8f',
  },
  remembermeView: {
    justifyContent: 'space-between',
    // paddingHorizontal: '3%',
    flexDirection: 'row',
    marginTop: '5%',
    width: '90%',
    alignSelf: 'center',
    // borderWidth:1,
    alignItems: 'center',
  },
  userinputsContainer: {
    marginTop: '4%',
    // borderWidth: 1,
  },
  usernameView: {
    //   borderWidth:10,
    marginTop: '2%',
    // height: '23%',
    height: 50,
    width: '90%',
    alignSelf: 'center',
    // borderWidth:1,
    // backgroundColor:"red"
    backgroundColor: '#efeff4',
    borderRadius: 8,
  },
  signIntoContinueText: {
    color: 'white',
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '900',
  },
  signInToContinueView: {
    marginTop: '5%',
    justifyContent: 'space-around',
    alignItems: 'center',
    // borderWidth:1,
    // height:100,
    height: '20%',
    borderBottomWidth: 1,
    borderColor: '#efeff4',
    flexDirection: 'row',
  },
  welcomeBackView: {
    borderBottomWidth: 1,
    borderColor: '#efeff4',
    height: 45,
    justifyContent: 'center',
    // marginTop: '20%',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeBackText: {
    // borderWidth:1,
    // marginTop: '8%',
    color: '#666666',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    // justifyContent: 'space-between',
    // height: 700,
    // height: '100%',
    marginTop: '5%',
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'white',
    // borderWidth: 2,
  },
  textInputView: {
    // alignSelf: 'stretch',
    borderWidth: 2,
    bottom: 0,
    borderColor: 'red',
  },
  textFiled: {
    height: 40,
    width: '99%',
    borderWidth: 1,
    backgroundColor: 'aqua',
    alignSelf: 'center',
  },
});
