import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Bubbles1 from '../assets/svgs/Bubbles_1.svg';
export default function SplahScreen() {
  return (
    <LinearGradient
      style={styles.LinearGradient}
      colors={['#9815ff', '#553bbc']}>
      <View style={styles.logoContainer}>
        <Bubbles1 />
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  LinearGradient: {
    flex: 1,
    // alignItems:"center",
    justifyContent:"center"
  },
  logoContainer:{
    //   borderWidth:1,
    //   alignSelf:"center",
  }
});
