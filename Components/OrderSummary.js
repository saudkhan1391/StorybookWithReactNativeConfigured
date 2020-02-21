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
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {Line} from 'react-native-svg';

export default function OrderSummary(props) {
  var individualOrder = () => {
    return (
      <View style={styles.HomeAddressView}>
        <View style={{}}>
          <Text style={{fontWeight: '600', fontSize: 15, color: '#666'}}>
            Order Id
          </Text>
          <Text style={{fontSize: 15, fontWeight: '900'}}>39878345</Text>
        </View>
      </View>
    );
  };
  var IndividualOrderArray = [];
  for (let i = 0; i < 4; i++) {
    IndividualOrderArray.push(individualOrder());
  }
  return (
    <View style={styles.mainContainer}>
      <View style={styles.welcomeBackView}>
        <FontAwesome name="long-arrow-left" color={'#666'} size={22} />
        <Text style={styles.welcomeBackText}>Order Summary</Text>
        <TouchableOpacity>
          <EntypIcon name="dots-three-horizontal" color="white" size={22} />
        </TouchableOpacity>
      </View>
      {/* big white modal  */}
      <View style={styles.addressModal}>
        <ScrollView contentContainerStyle={{borderWidth: 0}}>
          {/* {individualOrder()} */}
          {/* {IndividualOrderArray} */}
          <View style={styles.HomeAddressView}>
            <View style={{}}>
              <Text style={styles.pickupText}>PickUp</Text>
              <Text style={styles.dateText}>Saturday, Octuber 7</Text>
              <Text style={styles.timeText}>7:30 to 8:00 AM</Text>
            </View>
            <AntIcon name="right" size={18} color="#666" />
          </View>

          <View style={styles.HomeAddressView}>
            <View style={{}}>
              <Text style={styles.pickupText}>Delivery</Text>
              <Text style={styles.dateText}>Saturday, Octuber 7</Text>
              <Text style={styles.timeText}>7:30 to 8:00 AM</Text>
            </View>
            <AntIcon name="right" size={18} color="#666" />
          </View>

          <View style={styles.HomeAddressView}>
            <View style={{}}>
              <Text style={styles.pickupText}>PickUp Address</Text>
              <Text style={styles.dateText}>Home</Text>
              <Text style={styles.timeText}>7:30 to 8:00 AM</Text>
            </View>
            <AntIcon name="right" size={18} color="#666" />
          </View>

          <View style={styles.HomeAddressView}>
            <View style={{}}>
              <Text style={{fontWeight: '600', fontSize: 15, color: '#666'}}>
                Delivery Address
              </Text>
              <Text style={styles.dateText}>Home</Text>
              <Text style={{fontSize: 15, fontWeight: '900'}}>
                43 Boruke street. Newbridge NSW 837..
              </Text>
            </View>
          </View>
          <View style={styles.HomeAddressView}>
            <View style={{}}>
              <Text style={{fontWeight: '600', fontSize: 15, color: '#666'}}>
                Payment Method
              </Text>
              <Text style={{fontSize: 15, fontWeight: '900'}}>
                Cash on delivery
              </Text>
            </View>
            <AntIcon name="right" size={18} color="#666" />
          </View>
          <View style={styles.ordersContainer}>
            <View style={{paddingVertical: 5}}>
              <Text style={{fontWeight: '600', fontSize: 15, color: '#666'}}>
                Order
              </Text>
              <View style={styles.orders}>
                <Text style={{fontSize: 15}}>
                  4<Text style={{color: '#666'}}> pieces of </Text> Shirts
                </Text>
                <Text style={{fontSize: 15, fontWeight: '900'}}>Rs500</Text>
              </View>
              <View style={styles.orders}>
                <Text style={{fontSize: 15}}>
                  4<Text style={{color: '#666'}}> pieces of </Text> Shirts
                </Text>
                <Text style={{fontSize: 15, fontWeight: '900'}}>Rs500</Text>
              </View>
              <View style={styles.orders}>
                <Text style={{fontSize: 15}}>
                  4<Text style={{color: '#666'}}> pieces of </Text> Shirts
                </Text>
                <Text style={{fontSize: 15, fontWeight: '900'}}>Rs500</Text>
              </View>
            </View>
          </View>
          <View style={styles.totalPriceView}>
            <Text style={{fontWeight: 'bold'}}>Total</Text>
            <Text style={{color: '#fe5497'}}>Rs1100</Text>
          </View>
          <View style={styles.totalPirceContainer}>
            <Text style={{fontWeight: 'bold'}}>Code Redeemed</Text>
            <LinearGradient
              colors={['#fe5497', '#fe5497']}
              style={{borderRadius: 20, paddingHorizontal: 10}}>
              <Text style={{fontWeight: 'bold', color: 'white'}}>20% off</Text>
            </LinearGradient>
          </View>
          <View style={{height: 20}} />
        </ScrollView>
      </View>
      <View style={styles.botomNavView}>
      {/* <BottomNav style={{borderWidth:3,height:"100%"}} /> */}
      <LinearGradient
        colors={['#fe5497', '#7f2284']}
        start={{x:0,y:0}}
        end={{x:1,y:0}}
        style={{borderRadius: 8,height:"60%",width:"95%",alignSelf:"center",justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontWeight: 'bold', color: 'white',}}>Confirm Order</Text>
      </LinearGradient>
      </View>
    </View>
  );
}
var styles = StyleSheet.create({
  totalPriceView: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
  },
  timeText: {fontSize: 12, fontWeight: 'bold'},
  dateText: {fontSize: 15, fontWeight: 'bold'},
  pickupText: {fontWeight: '600', fontSize: 13, color: '#666'},
  totalPirceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#efeff4',
    alignSelf: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
    height: 50,
    alignItems: 'center',
  },
  ordersContainer: {
    // height: 180,
    width: '90%',
    alignSelf: 'center',
  },
  orders: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    // borderWidth: 2,
  },
  washGradient: {
    // alignSelf:"center",
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    // borderWidth:1,
  },
  welcomeBackView: {
    // borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#efefef',
    // marginTop: '20%',
    height: '10%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    // borderBottomWidth:1,
    // backgroundColor:"white"
  },
  welcomeBackText: {
    // borderWidth:1,
    // marginTop: '8%',
    fontSize: 18,
    fontWeight: 'bold',
    // color: 'white',
    // alignSelf:"center"
  },
  belowMinusContainer: {
    width: '90%',
    alignSelf: 'center',
    height: '20%',
    justifyContent: 'center',
  },
  plusButonGradient: {
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
    // height: '10%',
    height: 20,
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
    backgroundColor: 'white',
    height: '100%',
    borderColor: 'red',
  },
  topIcon: {alignSelf: 'flex-end', padding: 10, position: 'absolute'},
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
    borderWidth: 2,
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
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'red',
    // borderWidth:2,
    //   backgroundColor:"#"
  },
  botomNavView: {
    height: '15%',
    width: '100%',
    // borderWidth: 3,
    borderColor: 'red',
    // justifyContent: 'center',
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
    height: 80,
    // height: '23.33%',
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
    height: '75%',
    width: '100%',
    zIndex: 2,
    // position: 'absolute',
  },
  checkcircle: {alignSelf: 'center', marginTop: '10%', color: '#fE5398'},
  circle: {alignSelf: 'center', marginTop: '10%', color: '#d8d8d8'},
});
