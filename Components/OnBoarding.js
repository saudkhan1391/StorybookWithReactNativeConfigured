import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Bubbles1 from '../assets/svgs/Bubbles_1.svg';
import Bubbles2 from '../assets/svgs/Bubbles_2.svg';
import Backgroundimage from '../assets/background.png';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function OnBoarding(props) {
  return (
    <ImageBackground source={Backgroundimage} style={styles.container}>
      <View style={styles.logoContainer}>
        <Bubbles1 width={150} height={150} />
      </View>
      <View style={styles.dowhatyouloveView}>
        <Text style={styles.dowhatyouloveText}>
          Do what you love. We care for your clothes
        </Text>
      </View>
      <View style={styles.dotsContainer}>
        <View style={styles.dot} />
        <View style={styles.OtherDot} />
        <View style={styles.OtherDot} />
      </View>
      <View style={styles.bottomButtonsContainer}>
        <TouchableOpacity 
        onPress={()=>{
          props.navigation.navigate("WelcomeUser");
        }}
        style={styles.signButtonView}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#fe5497', '#7f2284']}
            style={styles.LinearGradient}>
            <Text style={styles.signinText}>Sign Up</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={()=>{
          props.navigation.navigate("WelcomeBack");
        }}
        style={styles.signInButtonView}>
          <Text style={styles.signinText}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.termsandpolicyView}>
        <Text style={styles.termsAndPolicyText}>
          By joining you agree to our{' '}
          <Text style={styles.subTermsText}> Terms of Service </Text> and{' '}
          <Text>Privacy Policy</Text>
        </Text>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  signinText: {
    color: 'white',
    fontWeight:"900",
    fontSize:17
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 20,
    // borderWidth: 1,
    backgroundColor: 'white',
  },
  OtherDot: {
    width: 8,
    height: 8,
    opacity: 0.4,
    borderRadius: 20,
    borderWidth: 0.4,
    backgroundColor: 'white',
  },
  dotsContainer: {
    marginTop: '30%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 60,
    alignSelf: 'center',
    // borderWidth: 1,
  },
  subTermsText: {
    fontWeight: 'bold',
    color: 'white',
  },
  termsandpolicyView: {
    marginTop: '5%',
    width: '90%',
    alignSelf: 'center',
  },
  termsAndPolicyText: {
    textAlign: 'center',
    color: '#c8c7cc',
  },
  bottomButtonsContainer: {
    marginTop: '10%',
    flexDirection: 'row',
    width: '100%',
    // borderWidth:2,
    borderColor: 'green',
    justifyContent: 'space-around',
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
  },
  signButtonView: {
    height: 50,
    // borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    width: 150,
    // width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButtonView: {
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    width: 150,
    // width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dowhatyouloveView: {
    marginTop: '15%',
  },
  dowhatyouloveText: {
    // marginTop: '10%',
    color: '#232323',
    fontSize: 24,
    textAlign: 'center',
  },
  container: {
    flex: 1,
  },
  logoContainer: {
    marginTop: '10%',
    //   borderWidth:1,
    alignSelf: 'center',
  },
});
