import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
export default function Success() {
  return (
    <View style={styles.container}>
      <View style={styles.thankYouView}>
        <Text style={styles.ThankYouText}>Thank You</Text>
      </View>

      <View style={styles.bigBox}>
        <LinearGradient
          style={styles.LinearGradient}
          colors={['#fe5497', '#7f2284']}>
          <AntDesign name="check" size={32} color="white" />
        </LinearGradient>
        <View style={{height: '15%'}} />
        <View style={[styles.textsContainerInBox, {marginTop: '0%'}]}>
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
      {/* <View style={{height:"5%"}} /> */}
      <View style={styles.Rs1100Container}>
        <Text style={styles.Rs1100}>Rs 1100</Text>
        <Text style={styles.yourhavesucText}>
          You have Successfully placed your order
        </Text>
      </View>
      <View style={{height:"5%"}} />
      <TouchableOpacity style={styles.doneButton}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#fe5497', '#7f2284']}
          style={styles.LinearGradientinButton}>
          <Text style={styles.doneText}>Done</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  LinearGradientinButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    borderRadius:8
  },
  doneButton: {
    height: '30%',
    width: '90%',
    // borderWidth: 2,
    alignSelf: 'center',
  },
  doneText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 17,
  },
  Rs1100Container: {
    // marginVertical: '10%',
    height:"25%",
    // borderWidth:2,
    justifyContent:"center"
  },
  yourhavesucText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 17,
    width: 300,
    // borderWidth:2,
    alignSelf: 'center',
  },
  Rs1100: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  LinearGradient: {
    width: 50,
    height: 50,
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    alignSelf: 'center',
    top: -20,
    // bottom:2
  },
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
    // flexWrap:"wrap",
    // overflow:"scroll",
    width: '80%',
    height: '35%',
    borderWidth: 2,
    backgroundColor: '#fff',
    alignSelf: 'center',
    borderColor: '#efeff4',
    borderRadius: 8,
    // paddingTop:"10%"
    // justifyContent:"center"
  },
  container: {
    // flex: 1,
    height:"100%",
    // flexWrap:"wrap",
    // overflow:"hidden",
    // borderWidth:2,
    borderColor:"red"
    // backgroundColor:"white"
  },
  thankYouView: {
    // marginTop: '5%',
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
