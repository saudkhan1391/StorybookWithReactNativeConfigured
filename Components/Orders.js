import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Bubbles2Logo from '../assets/svgs/Bubbles_2.svg';
import IronSvg from '../assets/svgs/icon-iron.svg';
import ClothesSvg from '../assets/svgs/icon-clothes.svg';
import ShirtSvg from '../assets/svgs/icon-shirt.svg';
import WachingMachineSvg from '../assets/svgs/icon-washing-machine.svg';
import TowelSvg from '../assets/svgs/icon-towel.svg';
// import Orders from '../assets/svgs/orders.svg';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import BottomNav from './ResuableFunction/BottomNav';
export default function Orders() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Fontisto name={'filter'} size={18} color="#8a8a8f" />
        <Text style={styles.headerText}>Orders</Text>
        <Icon name="ios-search" size={31} color="#8a8a8f" />
      </View>
      <View style={styles.topButoonContainer}>
        <TouchableOpacity style={styles.topButoon}>
          <View style={styles.smallDot} />
          <Text style={{color: '#fe5398'}}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.topButoon}>
          <Text>Complete</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.ScrollViewContainer}>
        <ScrollView contentContainerStyle={{}}>
          <View style={{}}>
            <View style={styles.orderContainer}>
              <View style={styles.insideScrollviewBox}>
                <View style={{width: '80%'}}>
                  <Text style={styles.orderText}>Order#: 9990001</Text>
                  <Text style={styles.washandFoldText}>Wash and fold</Text>
                  <Text style={styles.pickupText}>
                    Pickup:{' '}
                    <Text style={{color: '#8c8c8c'}}>
                      Oct 07 7:30 to 9:00 Am
                    </Text>
                  </Text>
                  <Text style={styles.pickupText}>
                    Delivery:{' '}
                    <Text style={{color: '#8c8c8c'}}>
                      Oct 07 7:30 to 9:00 Am
                    </Text>
                  </Text>
                </View>
                <View style={styles.rightTextsContainer}>
                  <View style={styles.roundView}>
                    <Text>pickup</Text>
                  </View>
                  <View style={styles.roundView2}>
                    <Text style={{fontWeight: 'bold', fontSize: 17}}>
                      Rs 800
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.orderContainer}>
              <View style={styles.insideScrollviewBox}>
                <View style={{width: '80%'}}>
                  <Text style={styles.orderText}>Order#: 9990001</Text>
                  <Text style={styles.washandFoldText}>Wash and fold</Text>
                  <Text style={styles.pickupText}>
                    Pickup:{' '}
                    <Text style={{color: '#8c8c8c'}}>
                      Oct 07 7:30 to 9:00 Am
                    </Text>
                  </Text>
                  <Text style={styles.pickupText}>
                    Delivery:{' '}
                    <Text style={{color: '#8c8c8c'}}>
                      Oct 07 7:30 to 9:00 Am
                    </Text>
                  </Text>
                </View>
                <View style={styles.rightTextsContainer}>
                  <View
                    style={[styles.roundView, {backgroundColor: '#54c7fc'}]}>
                    <Text>Wash</Text>
                  </View>
                  <View style={styles.roundView2}>
                    <Text style={{fontWeight: 'bold', fontSize: 17}}>
                      Rs 800
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.orderContainer}>
              <View style={styles.insideScrollviewBox}>
                <View style={{width: '80%'}}>
                  <Text style={styles.orderText}>Order#: 9990001</Text>
                  <Text style={styles.washandFoldText}>Wash and fold</Text>
                  <Text style={styles.pickupText}>
                    Pickup:{' '}
                    <Text style={{color: '#8c8c8c'}}>
                      Oct 07 7:30 to 9:00 Am
                    </Text>
                  </Text>
                  <Text style={styles.pickupText}>
                    Delivery:{' '}
                    <Text style={{color: '#8c8c8c'}}>
                      Oct 07 7:30 to 9:00 Am
                    </Text>
                  </Text>
                </View>
                <View style={styles.rightTextsContainer}>
                  <View
                    style={[styles.roundView, {backgroundColor: '#01ca36'}]}>
                    <Text>Delivery</Text>
                  </View>
                  <View style={styles.roundView2}>
                    <Text style={{fontWeight: 'bold', fontSize: 17}}>
                      Rs 800
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.orderContainer}>
              <View style={styles.insideScrollviewBox}>
                <View style={{width: '80%'}}>
                  <Text style={styles.orderText}>Order#: 9990001</Text>
                  <Text style={styles.washandFoldText}>Wash and fold</Text>
                  <Text style={styles.pickupText}>
                    Pickup:{' '}
                    <Text style={{color: '#8c8c8c'}}>
                      Oct 07 7:30 to 9:00 Am
                    </Text>
                  </Text>
                  <Text style={styles.pickupText}>
                    Delivery:{' '}
                    <Text style={{color: '#8c8c8c'}}>
                      Oct 07 7:30 to 9:00 Am
                    </Text>
                  </Text>
                </View>
                <View style={styles.rightTextsContainer}>
                  <View
                    style={[styles.roundView, {backgroundColor: '#ff6f01'}]}>
                    <Text>Iron</Text>
                  </View>
                  <View style={styles.roundView2}>
                    <Text style={{fontWeight: 'bold', fontSize: 17}}>
                      Rs 800
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.orderContainer}>
              <View style={styles.insideScrollviewBox}>
                <View style={{width: '80%'}}>
                  <Text style={styles.orderText}>Order#: 9990001</Text>
                  <Text style={styles.washandFoldText}>Wash and fold</Text>
                  <Text style={styles.pickupText}>
                    Pickup:{' '}
                    <Text style={{color: '#8c8c8c'}}>
                      Oct 07 7:30 to 9:00 Am
                    </Text>
                  </Text>
                  <Text style={styles.pickupText}>
                    Delivery:{' '}
                    <Text style={{color: '#8c8c8c'}}>
                      Oct 07 7:30 to 9:00 Am
                    </Text>
                  </Text>
                </View>
                <View style={styles.rightTextsContainer}>
                  <View style={styles.roundView}>
                    <Text>pickup</Text>
                  </View>
                  <View style={styles.roundView2}>
                    <Text style={{fontWeight: 'bold', fontSize: 17}}>
                      Rs 800
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.orderContainer}>
              <View style={styles.insideScrollviewBox}>
                <View style={{width: '80%'}}>
                  <Text style={styles.orderText}>Order#: 9990001</Text>
                  <Text style={styles.washandFoldText}>Wash and fold</Text>
                  <Text style={styles.pickupText}>
                    Pickup:{' '}
                    <Text style={{color: '#8c8c8c'}}>
                      Oct 07 7:30 to 9:00 Am
                    </Text>
                  </Text>
                  <Text style={styles.pickupText}>
                    Delivery:{' '}
                    <Text style={{color: '#8c8c8c'}}>
                      Oct 07 7:30 to 9:00 Am
                    </Text>
                  </Text>
                </View>
                <View style={styles.rightTextsContainer}>
                  <View style={styles.roundView}>
                    <Text>pickup</Text>
                  </View>
                  <View style={styles.roundView2}>
                    <Text style={{fontWeight: 'bold', fontSize: 17}}>
                      Rs 800
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      {/* <View style={{height: '100%'}}> */}
      <BottomNav selectedButton={'orders'} />
      {/* </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  smallDot: {
    width: 10,
    height: 10,
    borderWidth: 0,
    backgroundColor: '#fe5398',
    borderRadius: 20,
    marginRight: 10,
  },
  topButoonContainer: {
    width: '100%',
    height: '8%',
    // borderWidth: 2,

    flexDirection: 'row',
  },
  topButoon: {
    width: '50%',
    height: '100%',
    borderWidth: 1,
    borderColor: '#efeff4',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  pickupText: {
    color: 'black',
    fontSize: 13,
    lineHeight: 20,
    fontWeight: 'bold',
  },
  roundView2: {
    marginTop: '30%',
  },
  rightTextsContainer: {
    // marginLeft: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection:""
  },
  washandFoldText: {
    fontSize: 13,
    color: 'black',
    lineHeight: 20,
    fontWeight: 'bold',
  },
  orderText: {
    fontWeight: 'bold',
    // color: '#666666',

    fontSize: 17,
    lineHeight: 20,
  },
  roundView: {
    backgroundColor: '#a964f8',
    // width: 48,
    height: 22,
    paddingHorizontal: 10,
    // marginLeft: '5%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  insideScrollviewBox: {
    // overflow:"hidden",
    height: '100%',
    width: '100%',
    borderWidth: 1,
    borderColor: '#efeff4',
    backgroundColor: 'white',
    // marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    borderRadius: 9,
  },
  orderContainer: {
    marginTop: '1%',
    // marginBottom: '1%',
    // height: '20%',
    height: 100,
    width: '95%',
    alignSelf: 'center',
    // borderWidth: 1,
    borderColor: '#efeff4',
  },
  ScrollViewContainer: {
    // borderWidth: 1,
    height: '72%',
    borderColor: 'green',
    backgroundColor: '#f9f9f9',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  header: {
    height: '10%',
    // borderWidth:9,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: '6%',
  },
  buttonNavIcon: {
    // borderWidth: 2,
    width: '80%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  butoninNav: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '24%',
    height: '100%',
    // borderWidth: 2,
  },
  BottomNavigationMenu: {
    borderWidth: 1,
    borderColor: '#efeff4',
    // height: 60,
    height: '35%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  choosethetypeofText: {
    textAlign: 'center',
    color: '#666666',
  },
  container: {
    // flex: 1,
    height: '100%',
    width: '100%',
  },
  topHeader: {
    height: '20%',
    backgroundColor: 'white',
  },
});
