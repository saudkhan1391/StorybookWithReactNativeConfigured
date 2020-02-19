import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
export default function Success() {
  return (
    <View style={styles.container}>
      <View style={styles.thankYouView}>
        <Text style={styles.ThankYouText}>Thank You</Text>
      </View>
      <LinearGradient
        style={{width: 50, height: 50, borderRadius: 27}}
        colors={['#fe5497', '#7f2284']}>
        <Ionicons name="ios-add" />
      </LinearGradient>
      <View style={styles.bigBox}>
        <View style={[styles.textsContainerInBox, {marginTop: '15%'}]}>
          <Text style={{color: '#666666'}}>Border Id</Text>
          <Text>3987834</Text>
        </View>
        <View style={styles.textsContainerInBox}>
          <Text style={{color: '#666666'}}>Border Id</Text>
          <Text>3987834</Text>
        </View>
        <View style={styles.textsContainerInBox}>
          <Text style={{color: '#666666'}}>Border Id</Text>
          <Text>3987834</Text>
        </View>
        <View style={styles.trackOrderView}>
          <Text style={{color: '#fe5398', fontSize: 17}}>Track Order</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  trackOrderView: {
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:1,
    height: '20%',
  },
  textsContainerInBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingHorizontal:"5%",
    height: '20%',
    borderBottomWidth: 2,
    borderColor: '#efeff4',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  bigBox: {
    width: '70%',
    height: '40%',
    borderWidth: 1,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderColor: '#efeff4',
    borderRadius: 8,
    // paddingTop:"10%"
    // justifyContent:"center"
  },
  container: {
    flex: 1,
    // backgroundColor:"white"
  },
  thankYouView: {
    marginTop: '5%',
    width: '100%',
    height: '20%',
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ThankYouText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
