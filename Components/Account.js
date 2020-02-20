import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import EntypIcon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import BottomNav from './ResuableFunction/BottomNav';
export default function Account(props) {
  return (
    <LinearGradient
    colors={['#9815ff', '#553bbc']} style={styles.mainContainer}>
      <View
        // colors={['#9815ff', '#553bbc']}
        style={styles.blueContainer}>
        <View style={styles.topIcon}>
          <EntypIcon name="dots-three-horizontal" size={20} color="white" />
        </View>
        <View style={{height: '20%'}} />
        <View style={styles.imgTxtEmailContainer}>
          <LinearGradient
            colors={['#fe5497', '#7f2284']}
            style={styles.smallImage}>
            <Ionicons name="ios-cog" size={24} color="white" />
          </LinearGradient>
          <View style={styles.largeImage}>
            <Image
              style={styles.dpImg}
              source={{
                uri:
                  'https://accel-software.com/assets/pages/img/people/img3-large.jpg',
              }}
            />
          </View>
          <LinearGradient
            colors={['#fe5497', '#7f2284']}
            style={styles.smallImage}>
            <FontAwesome name="pencil" size={20} color="white" />
          </LinearGradient>
        </View>
        <View style={{height: '40%'}}>
          <Text style={styles.aslamgujarText}>Aslam Gujjar</Text>
          <Text style={styles.aslamgmailtext}>Aslam@gmail.com</Text>
        </View>
      </View>
      {/* big white modal  */}
      <View style={styles.addressModal}>
          <ScrollView  contentContainerStyle={{height:"100%",borderWidth:0}}>
        <View style={styles.minusIcon} />
        {/* <View style={{height:200,backgroundColor:"red"}} /> */}
        <View
          style={styles.belowMinusContainer}>
          <Text style={{fontWeight: 'bold'}}>Address</Text>
        </View>
        <View style={styles.HomeAddressView}>
          <View style={{}}>
            <Text style={{fontWeight: '600', fontSize: 15, color: '#666'}}>
              Home
            </Text>
            <Text style={{fontSize: 15, fontWeight: '900'}}>
              Street 334, House 45, F11, Islamabad
            </Text>
          </View>
          <AntIcon name="right" color="#666" size={15} />
        </View>
        <View style={styles.HomeAddressView}>
          <View style={{}}>
            <Text style={{fontWeight: '600', fontSize: 15, color: '#666'}}>
              Home
            </Text>
            <Text style={{fontSize: 15, color: 'black', fontWeight: '900'}}>
              Street 334, House 45, F11, Islamabad
            </Text>
          </View>
          <AntIcon name="right" color="#666" size={15}  />
        </View>
        <View style={styles.addnewaddresContainer}>
          <Text style={{color:"#fe5398"}}>Add new address</Text>
          <LinearGradient
            colors={['#fe5497', '#7f2284']}
            style={styles.plusButonGradient}>
            <FontAwesome name="plus" size={13} color="white" />
          </LinearGradient>
        </View>
        </ScrollView>
      </View>
      {/* <View style={styles.botomNavView}> */}
      {/* <BottomNav style={{borderWidth:3,height:"100%"}} /> */}
      <BottomNav style={{borderWidth: 0}} selectedButton={"person"} />
      {/* </View> */}
    </LinearGradient>
  );
}
var styles = StyleSheet.create({
    belowMinusContainer:{
        width: '90%',
        alignSelf: 'center',
        height: '20%',
        justifyContent: 'center',
      },
    plusButonGradient:{
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
      },
  addnewaddresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    height: '10%',
    alignItems: 'center',
  },
  dpImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 140,
  },
  mainContainer: {
    // justifyContent: 'space-between',
    // borderWidth: 2,
    height: '100%',
    borderColor: 'red',
  },
  topIcon: {alignSelf: 'flex-end', padding: 10, position: 'absolute'},
  largeImage: {
    width: '38%',
    // height:"100%",
    height: '90%',
    // width: 80,
    // height: 80,
    // borderWidth: 1,
    borderRadius: 39,
  },
  smallImage: {
    width: '20%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',

    // height: 40,
    // borderWidth: 1,
    borderRadius: 29,
  },
  imgTxtEmailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '60%',
    height: '40%',
    alignSelf: 'center',
    // borderWidth: 2,
  },
  aslamgmailtext: {textAlign: 'center', fontSize: 15, color: 'white'},
  aslamgujarText: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  blueContainer: {
    height: '40%',
    //   backgroundColor:"#"
  },
  botomNavView: {
    height: '20%',
    width: '100%',
    borderWidth: 3,
    borderColor: 'red',
    justifyContent: 'center',
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
    height: '23.33%',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    // borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#c8c7cc',
    flexDirection: 'row',
  },
  addressModal: {
    backgroundColor: 'white',
    // borderWidth: 2,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    // height: 270,
    height: '50%',
    width: '100%',
    zIndex:2
    // position: 'absolute',
  },
  checkcircle: {alignSelf: 'center', marginTop: '10%', color: '#fE5398'},
  circle: {alignSelf: 'center', marginTop: '10%', color: '#d8d8d8'},
});
