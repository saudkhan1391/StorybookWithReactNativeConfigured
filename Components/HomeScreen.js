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
import BottomNav from './ResuableFunction/BottomNav';
export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <View style={styles.logoContainer}>
          <Bubbles2Logo width={'100%'} height={'100%'} />
        </View>
        <View style={styles.choosethetypeView}>
          <Text style={styles.choosethetypeofText}>
            Choose the type of services that you are interested in below
          </Text>
        </View>
      </View>
      <View style={styles.fourBoxContainer}>
        <View style={styles.twoBoxContainer}>
          <TouchableOpacity  onPress={()=>{props.navigation.navigate("AddItems")}} style={styles.box}>
            <View style={styles.insideBoxContainer}>
              <View style={styles.boxIconContainer}>
                <WachingMachineSvg width={'100%'} height={'100%'} />
              </View>
              <View 
             
              >
                <Text style={styles.washText}>Wash & Fold</Text>
                <Text style={styles.belowWashText}>2 Days</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=>{props.navigation.navigate("AddItems")}} style={styles.box}>
            <View style={styles.insideBoxContainer}>
              <View style={styles.boxIconContainer}>
                <ClothesSvg width={'100%'} height={'100%'} />
              </View>
              <View>
                <Text style={styles.washText}>Wash & Iron</Text>
                <Text style={styles.belowWashText}>2 Days</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.twoBoxContainer, {paddingTop: '2%'}]}>
        <TouchableOpacity  onPress={()=>{props.navigation.navigate("AddItems")}} style={styles.box}>
            <View style={styles.insideBoxContainer}>
              <View style={styles.boxIconContainer}>
                <ShirtSvg width={'100%'} height={'100%'} />
              </View>
              <View>
                <Text style={styles.washText}>Dry Clean</Text>
                <Text style={styles.belowWashText}>2 Days</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=>{props.navigation.navigate("AddItems")}} style={styles.box}>
            <View style={styles.insideBoxContainer}>
              <View style={styles.boxIconContainer}>
                <IronSvg width={'100%'} height={'100%'} />
              </View>
              <View>
                <Text style={styles.washText}>Iron only</Text>
                <Text style={styles.belowWashText}>2 Days</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.BottomAreaContainer}>
        <View style={{height:"67%",borderWidth:0,borderColor:"red"}}>
        <ScrollView horizontal={true}>
          <View style={styles.insideScrollviewBox}>
            <View style={styles.roundView}>
              {/* <Icon name={'ios-add'} /> */}
              <TowelSvg />
            </View>
            <View style={{marginLeft: '4%'}}>
              <Text style={{fontWeight: 'bold', fontSize: 15, lineHeight: 20}}>
                Best Offers
              </Text>
              <Text style={{fontSize: 17, color: '#fe5398', lineHeight: 20}}>
                Enjoy 30% discount
              </Text>
              <Text style={{color: '#390e5b', fontSize: 13, lineHeight: 20}}>
                1- 10 March 2020
              </Text>
            </View>
          </View>
          <View style={styles.insideScrollviewBox}>
            <View style={styles.roundView}>
              {/* <Icon name={'ios-add'} /> */}
              <TowelSvg />
            </View>
            <View style={{marginLeft: '4%'}}>
              <Text style={{fontWeight: 'bold', fontSize: 15, lineHeight: 20}}>
                Best Offers
              </Text>
              <Text style={{fontSize: 17, color: '#fe5398', lineHeight: 20}}>
                Enjoy 30% discount
              </Text>
              <Text style={{color: '#390e5b', fontSize: 13, lineHeight: 20}}>
                1- 10 March 2020
              </Text>
            </View>
          </View>
        </ScrollView>
        </View>
        {/* <View style={{height:50}}> */}
        <BottomNav style={styles.BottomNavigationMenu} navigation={props.navigation} selectedButton={"HomeScreen"}/>
        {/* </View> */}
        {/* <View style={styles.BottomNavigationMenu}>
          <TouchableOpacity style={styles.butoninNav}>
            <View style={styles.buttonNavIcon}>
              <FontAwesome5Icon name="home" size={24} color="#fe5497"/>
            </View>
            <View>
              <Text>Home</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.butoninNav}>
            <View style={styles.buttonNavIcon}>
                <Orders width={"100%"} height={"60%"}  />
            </View>
            <View>
              <Text>Orders</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.butoninNav}>
            <View style={styles.buttonNavIcon}>
                <Icon name ="ios-notifications" size={29} color="#c8c7cc" />
            </View>
            <View>
              <Text style={{}}>Notifications</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.butoninNav}>
            <View style={styles.buttonNavIcon}>
              <Octicons name ="person" size={24}  color="#c8c7cc"/>
            </View>
            <View>
              <Text>Account</Text>
            </View>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
    // borderWidth: 3,
    borderColor: '#289',
    // borderColor: '#efeff4',
    // backgroundColor:"white",
    height: "33%",
    // height: 50,
    // height: '100%',
    // width: '100%',
    // flexDirection: 'row',
    // justifyContent:"flex-end",
    // position:"absolute"
    // justifyContent:"space-around",
    // alignItems:"center",
  },
  roundView: {
    backgroundColor: '#fe5398',
    width: 48,
    height: 48,
    marginLeft: '5%',
    borderRadius: 29,
    justifyContent: 'center',
    alignItems: 'center',
  },
  insideScrollviewBox: {
    height: '80%',
    width: 300,
    // borderWidth: 2,
    // borderColor:"#efeff4",
    backgroundColor: 'white',
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  belowWashText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#666',
  },
  washText: {
    fontWeight: 'bold',
    fontSize: 17,
  },
  insideBoxContainer: {
    width: '80%',
    height: '80%',
    //   alignSelf:"center",
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxIconContainer: {
    width: '30%',
    height: '35%',
    // borderWidth: 2,
  },
  BottomAreaContainer: {
    width: '100%',
    height: '30%',
    // borderWidth:3,
    borderColor: 'green',
    backgroundColor: '#f9f9f9',
  },
  fourBoxContainer: {
    width: '100%',
    height: '50%',
    backgroundColor: '#f9f9f9',
  },
  twoBoxContainer: {
    flexDirection: 'row',
    width: '100%',
    height: '50%',
    justifyContent: 'space-around',
    // borderWidth:2,
    // alignItems: 'center',
    // marginTop
    paddingTop: '7%',
    paddingHorizontal: '3%',
  },
  box: {
    height: '80%',
    width: '40%',
    // borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    paddingTop: '3%',
    // marginTop: '3%',
    alignSelf: 'center',
    width: '70%',
    height: '46%',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  choosethetypeView: {
    width: '70%',
    height: '46%',
    // borderWidth: 2,
    alignSelf: 'center',
    justifyContent: 'center',
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
