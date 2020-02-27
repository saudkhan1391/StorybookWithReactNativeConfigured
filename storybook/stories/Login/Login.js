import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {Button} from 'react-native-material-ui';
export default function Login(props) {
  return (
    <ImageBackground 
    source={require("../../../assets/images/login-background2.jpg")}
    style={styles.MainContainer}>
      <View style={{height: '5%'}} />
      <View style={styles.LogoContainer}>
        <Image
          style={styles.logoImage}
          source={require('../../../assets/images/logo.png')}
        />
      </View>
      <View style={{height: '10%'}} />
      <View style={styles.piecofMindView}>
        <Text style={styles.pieceofmindtext}>
          PIECE OF MIND,{'\n'} WHEN THEY NEED IT MOST
        </Text>
      </View>
      <View style={{height: '20%'}} />
      {/* <View style={styles.loginButonView}>
          <Text>Login</Text>
      </View> */}

      <Button
        style={{container: {height: '9%', width: '70%', alignSelf: 'center',backgroundColor:"#30C5FD"}}}
        raised
        primary
        text="Login"
      />
      <View style={{height: '5%'}} />
      <Button
        style={{
          container: {
            height: '9%',
            width: '70%',
            alignSelf: 'center',
            backgroundColor: '#9E1E61',
          },
        }}
        raised
        primary
        text="Login with Phone Number"
      />
      {/* // disabled button */}
      {/* <Text>LOGIN WITH PHONE NUMBER</Text> */}
      {/* <View style={[styles.loginButonView, {backgroundColor: 'purple'}]}></View> */}
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  logoImage: {resizeMode: 'contain', width: '100%', height: '100%'},
  loginButonView: {
    height: '9%',
    width: '65%',
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  pieceofmindtext: {color: 'white', fontSize: 24, textAlign: 'center', lineHeight:35},
  piecofMindView: {
    height: '15%',
    width: '85%',
    alignSelf: 'center',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  LogoContainer: {
    width: '40%',
    height: '20%',
    // borderWidth: 1,
    alignSelf: 'center',
  },
  MainContainer: {
    height: '100%',
  },
});
