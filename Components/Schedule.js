import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import EntypIcon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
export default function Schedule(props) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <EntypIcon name={'arrow-long-left'} size={24} color="#8a8a8f" />
        <Text style={styles.headerText}>Schedule</Text>
        <Icon name="ios-add" size={31} color="#8a8a8f" />
      </View>
      <View style={styles.middleContainer}>{/* midlle code here */}</View>
      <View style={styles.addressModal}>
        <View style={styles.deliveryOptContainer}>
          <View style={{width: '4.4%'}} />
          <Text style={{fontSize: 19, fontWeight: 'bold'}}>
            Deliver Options
          </Text>
        </View>
        <ScrollView horizontal={true}>
          <View style={styles.HomeAddressView}>
            <View style={styles.checkcircleIconView}>
              <AntIcon name="checkcircle" size={22} color="#fe5497" />
            </View>
            <View style={styles.daysandfeeContainer}>
              <View style={{height: '10%'}} />
              <View style={{}}>
                <Text style={{color: '#666'}}>5 days</Text>
                <Text style={{fontWeight: 'bold', fontSize: 17}}>Standard</Text>
                <Text style={{fontWeight: 'bold'}}>Thur,Oct 12</Text>
              </View>
              <View style={{}}>
                <Text>Service Fee</Text>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>RS0</Text>
              </View>
            </View>
          </View>
          <View style={styles.HomeAddressView}>
            <View style={styles.checkcircleIconView}>
            <FontAwesome5Icon name="circle" size={22} color="lightgrey" />
            </View>
            <View style={styles.daysandfeeContainer}>
              <View style={{height: '10%'}} />
              <View style={{}}>
                <Text style={{color: '#666'}}>5 days</Text>
                <Text style={{fontWeight: 'bold', fontSize: 17}}>Standard</Text>
                <Text style={{fontWeight: 'bold'}}>Thur,Oct 12</Text>
              </View>
              <View style={{}}>
                <Text>Service Fee</Text>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>RS0</Text>
              </View>
            </View>
          </View>
          <View style={styles.HomeAddressView}>
            <View style={styles.checkcircleIconView}>
            <FontAwesome5Icon name="circle" size={22} color="lightgrey" />
            </View>
            <View style={styles.daysandfeeContainer}>
              <View style={{height: '10%'}} />
              <View style={{}}>
                <Text style={{color: '#666'}}>5 days</Text>
                <Text style={{fontWeight: 'bold', fontSize: 17}}>Standard</Text>
                <Text style={{fontWeight: 'bold'}}>Thur,Oct 12</Text>
              </View>
              <View style={{}}>
                <Text>Service Fee</Text>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>RS0</Text>
              </View>
            </View>
          </View>
          <View style={styles.HomeAddressView}>
            <View style={styles.checkcircleIconView}>
              <FontAwesome5Icon name="circle" size={22} color="lightgrey" />
            </View>
            <View style={styles.daysandfeeContainer}>
              <View style={{height: '10%'}} />
              <View style={{}}>
                <Text style={{color: '#666'}}>5 days</Text>
                <Text style={{fontWeight: 'bold', fontSize: 17}}>Standard</Text>
                <Text style={{fontWeight: 'bold'}}>Thur,Oct 12</Text>
              </View>
              <View style={{}}>
                <Text>Service Fee</Text>
                <Text style={{fontSize: 20, fontWeight: 'bold'}}>RS0</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <View style={styles.signButtonView}>
        <TouchableOpacity onPress={()=>{props.navigation.navigate("PickupAddress")}}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#fe5497', '#7f2284']}
          style={styles.LinearGradient}>
          <Text style={styles.signinText}>Next</Text>
        </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}
var styles = StyleSheet.create({
  checkcircleIconView: {
    position: 'absolute',
    alignSelf: 'flex-end',
    padding: 5,
  },
  daysandfeeContainer: {
    height: '90%',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
  },
  deliveryOptContainer: {
    height: '20%',
    width: '100%',
    // borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  middleContainer: {height: '45%', width: '100%', backgroundColor: 'grey'},
  mainContainer: {
    height: '100%',
    borderColor: 'red',
  },
  minusIcon: {
    width: 40,
    height: 3,
    position: 'absolute',
    marginTop: 5,
    backgroundColor: 'lightgrey',
    alignSelf: 'center',
  },
  HomeAddressView: {
    height: '85%',
    marginLeft: 20,
    width: 130,
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#c8c7cc',
  },
  addressModal: {
    // backgroundColor: '#f9f9f9',
    // borderWidth: 2,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    height: '37%',
    width: '100%',
    // position: 'absolute',
    zIndex: 3,
    // bottom: 0,
  },
  firstScrollContainer: {
    height: 60,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#efeff4',
  },
  filterItemView: {
    borderRadius: 14,
    backgroundColor: '#fe5398',
    height: 30,
    // width: 50,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  filterItemViewNormal: {
    borderRadius: 14,
    backgroundColor: '#efeff4',
    height: 30,
    // width: 50,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  addMinusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 70,
    alignItems: 'center',
  },
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

    borderBottomWidth: 1,
    borderColor: '#efeff4',
    // borderWidth:9,
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
  itemsAddedText: {
    color: '#c8c7cc',
    fontWeight: 'bold',
  },
  signWithFBtext: {
    color: '#fe5398',
    fontWeight: 'bold',
  },
  LinearGradient: {
    height: '100%',
    width: '100%',
    // borderWidth:2,
    // alignSelf:"center",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // borderRadius: 8,
    // marginTop:"5%"
    // marginTop: 40,
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
    // height: 50,
    height: '8%',
    // borderWidth: 3,
    alignSelf: 'center',
    width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
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
    height: 60,
    borderBottomWidth: 1,
    borderColor: '#efeff4',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
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
    // height: '200%',
    // marginTop: '5%',
    // width: '90%',
    // alignSelf: 'center',
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
