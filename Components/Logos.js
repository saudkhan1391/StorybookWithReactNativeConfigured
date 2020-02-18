import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Bubbles1 from '../assets/svgs/Bubbles_1.svg';
import Bubbles2 from '../assets/svgs/Bubbles_2.svg';
export default function Logos() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Bubbles2 />
      </View>
      <View style={styles.logoContainer}>
        <Bubbles1 />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems:"center",
    // justifyContent: 'center',
  },
  logoContainer: {
      marginTop:"10%"
    //   borderWidth:1,
    //   alignSelf:"center",
  },
});
