import React, {useState, useContext, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Orders from '../../assets/svgs/orders.svg';

// import Orders from '../../assets/svgs';
import Icon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
let selectedButton = 'home';
export default function BottomNav(props) {
  useEffect(() => {}, []);
  // const [selectedButton1, setSelectedButton1] = useState('home');
  if (props.selectedButton != null) {
    selectedButton = props.selectedButton;
    // setSelectedButton(props.selectedButton);
  }
  return (
    <View style={props.style}>
      <View style={styles.BottomNavigationMenu}>
        <TouchableOpacity
         onPress={()=>{props.navigation.navigate("HomeScreen")}}
        style={styles.butoninNav}>
          <View style={styles.buttonNavIcon}>
            <FontAwesome5Icon
              name="home"
              size={24}
              color={selectedButton == 'HomeScreen' ? '#fe5497' : '#c8c7cc'}
            />
          </View>
          <View>
            <Text>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{props.navigation.navigate("Orders")}}
        style={styles.butoninNav}>
          <View style={styles.buttonNavIcon}>
            {/* <Orders
              width={'100%'}
              height={'60%'}
              color={selectedButton == 'orders' ? '#fe5497' : '#c8c7cc'}
            /> */}
            <SimpleLineIcons
              name="note"
              size={25}
              color={selectedButton == 'orders' ? '#fe5497' : '#c8c7cc'}
            />
          </View>
          <View>
            <Text>Orders</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
         onPress={()=>{props.navigation.navigate("Notifications")}}
        style={styles.butoninNav}>
          <View style={styles.buttonNavIcon}>
            <Icon
              name="ios-notifications"
              size={29}
              color={selectedButton == 'notifications' ? '#fe5497' : '#c8c7cc'}
            />
          </View>
          <View>
            <Text style={{}}>Notifications</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={()=>{props.navigation.navigate("Account")}}
        style={styles.butoninNav}>
          <View style={styles.buttonNavIcon}>
            <Octicons
              name="person"
              size={24}
              color={selectedButton == 'person' ? '#fe5497' : '#c8c7cc'}
            />
          </View>
          <View>
            <Text>Account</Text>
          </View>
        </TouchableOpacity>
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
    borderWidth: 1,
    borderColor: '#efeff4',
    // borderColor: '#efeff4',
    // height: 60,
    // height: '32%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor:"white"
  },
});
