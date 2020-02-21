import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Bubbles2Logo from '../assets/svgs/Bubbles_2.svg';
import IronSvg from '../assets/svgs/icon-iron.svg';
import ClothesSvg from '../assets/svgs/icon-clothes.svg';
import ShirtSvg from '../assets/svgs/icon-shirt.svg';
import WachingMachineSvg from '../assets/svgs/icon-washing-machine.svg';
import TowelSvg from '../assets/svgs/icon-towel.svg';
import Orders from '../assets/svgs/orders.svg';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import BottomNav from './ResuableFunction/BottomNav';
import LinearGradient from 'react-native-linear-gradient';
export default function Notifications(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Fontisto name={'filter'} size={18} color="#8a8a8f" />
        <Text style={styles.headerText}>Notifications</Text>
        <Icon name="ios-search" size={31} color="#8a8a8f" />
      </View>
      <View style={styles.ScrollViewContainer}>
        <ScrollView contentContainerStyle={{}}>
          <View style={{}}>
            <View style={styles.orderContainer}>
              <View style={styles.insideScrollviewBox}>
                <LinearGradient
                  colors={['#fe5497', '#7f2284']}
                  style={styles.roundView}>
                  <TowelSvg width="60%" height="60%" />
                </LinearGradient>
                <View style={{marginLeft: '4%'}}>
                  <Text style={styles.orderText}>Order#: 9990001</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'black',
                      lineHeight: 20,
                      fontWeight: 'bold',
                    }}>
                    Your Order has been processed
                  </Text>
                  <Text
                    style={{color: '#8c8c8c', fontSize: 13, lineHeight: 20}}>
                    34 minutes ago
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.orderContainer}>
              <View style={styles.insideScrollviewBox}>
                <LinearGradient
                  colors={['#fe5497', '#7f2284']}
                  style={styles.roundView}>
                  <TowelSvg width="60%" height="60%" />
                </LinearGradient>
                <View style={{marginLeft: '4%'}}>
                  <Text style={styles.orderText}>Order#: 9990001</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'black',
                      lineHeight: 20,
                      fontWeight: 'bold',
                    }}>
                    Your Order has been processed
                  </Text>
                  <Text
                    style={{color: '#8c8c8c', fontSize: 13, lineHeight: 20}}>
                    34 minutes ago
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.orderContainer}>
              <View style={styles.insideScrollviewBox}>
                <LinearGradient
                  colors={['#fe5497', '#7f2284']}
                  style={styles.roundView}>
                  <TowelSvg width="60%" height="60%" />
                </LinearGradient>
                <View style={{marginLeft: '4%'}}>
                  <Text style={styles.orderText}>Order#: 9990001</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'black',
                      lineHeight: 20,
                      fontWeight: 'bold',
                    }}>
                    Your Order has been processed
                  </Text>
                  <Text
                    style={{color: '#8c8c8c', fontSize: 13, lineHeight: 20}}>
                    34 minutes ago
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.orderContainer}>
              <View style={styles.insideScrollviewBox}>
                <LinearGradient
                  colors={['#fe5497', '#7f2284']}
                  style={styles.roundView}>
                  <TowelSvg width="60%" height="60%" />
                </LinearGradient>
                <View style={{marginLeft: '4%'}}>
                  <Text style={styles.orderText}>Order#: 9990001</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'black',
                      lineHeight: 20,
                      fontWeight: 'bold',
                    }}>
                    Your Order has been processed
                  </Text>
                  <Text
                    style={{color: '#8c8c8c', fontSize: 13, lineHeight: 20}}>
                    34 minutes ago
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.orderContainer}>
              <View style={styles.insideScrollviewBox}>
                <LinearGradient
                  colors={['#fe5497', '#7f2284']}
                  style={styles.roundView}>
                  <TowelSvg width="60%" height="60%" />
                </LinearGradient>
                <View style={{marginLeft: '4%'}}>
                  <Text style={styles.orderText}>Order#: 9990001</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'black',
                      lineHeight: 20,
                      fontWeight: 'bold',
                    }}>
                    Your Order has been processed
                  </Text>
                  <Text
                    style={{color: '#8c8c8c', fontSize: 13, lineHeight: 20}}>
                    34 minutes ago
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.orderContainer}>
              <View style={styles.insideScrollviewBox}>
                <LinearGradient
                  colors={['#fe5497', '#7f2284']}
                  style={styles.roundView}>
                  <TowelSvg width="60%" height="60%" />
                </LinearGradient>
                <View style={{marginLeft: '4%'}}>
                  <Text style={styles.orderText}>Order#: 9990001</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'black',
                      lineHeight: 20,
                      fontWeight: 'bold',
                    }}>
                    Your Order has been processed
                  </Text>
                  <Text
                    style={{color: '#8c8c8c', fontSize: 13, lineHeight: 20}}>
                    34 minutes ago
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.orderContainer}>
              <View style={styles.insideScrollviewBox}>
                <LinearGradient
                  colors={['#fe5497', '#7f2284']}
                  style={styles.roundView}>
                  <TowelSvg width="60%" height="60%" />
                </LinearGradient>
                <View style={{marginLeft: '4%'}}>
                  <Text style={styles.orderText}>Order#: 9990001</Text>
                  <Text
                    style={{
                      fontSize: 16,
                      color: 'black',
                      lineHeight: 20,
                      fontWeight: 'bold',
                    }}>
                    Your Order has been processed
                  </Text>
                  <Text
                    style={{color: '#8c8c8c', fontSize: 13, lineHeight: 20}}>
                    34 minutes ago
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      {/* <View style={{height: '100%'}}> */}
      <BottomNav selectedButton={'notifications'} style={{height:"10%"}} navigation={props.navigation} />
      {/* </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  orderText: {
    fontWeight: 'bold',
    color: '#666666',
    fontSize: 15,
    lineHeight: 20,
  },
  roundView: {
    // backgroundColor: '#fe5398',
    width: 48,
    height: 48,
    marginLeft: '5%',
    borderRadius: 29,
    justifyContent: 'center',
    alignItems: 'center',
  },
  insideScrollviewBox: {
    height: '100%',
    width: '100%',
    // borderWidth: 2,
    // borderColor:"#efeff4",
    backgroundColor: 'white',
    // marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderContainer: {
    // height: '20%',
    height: 100,
    width: '100%',
    borderWidth: 1,
    borderColor: '#efeff4',
  },
  ScrollViewContainer: {
    borderWidth: 1,
    height: '80%',
    borderColor: 'green',
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
