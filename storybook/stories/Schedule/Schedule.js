import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Calendar} from 'react-native-calendars';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
export default function Schedule() {
  return (
    <View style={styles.container}>
     
        <View style={styles.header}>
          <View>
            <AntDesign color="white" size={30} name={'arrowleft'} />
          </View>
          <Text style={{color: 'white', fontSize: 17}}>SCHEDULE</Text>
          <View>
            <Ionicons color="white" size={39} name={'ios-menu'} />
          </View>
        </View>
        <View style={{height: 20}} />
        <ScrollView>
        <View
          style={{
            borderWidth: 0,
            borderColor: 'red',
            width: '90%',
            alignSelf: 'center',
          }}>
          <Text style={{textAlign: 'center', fontSize: 24}}>
            FUR BABIES SCHEUDLED FOR
          </Text>
          <View style={{height: 20}} />
          <View>
            <Calendar style={{}} />
          </View>
        </View>
        <View style={{height: 20}} />
        <View style={styles.TreatmentsView}>
          <View style={{height: 30}} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.treatmentText}>Swipe to view more </Text>
          </View>
          <ScrollView horizontal={true}>
            <View style={styles.progresbarContainer}>
              <AnimatedCircularProgress
                // style={{borderWidth: 2, width: 120, height: 120}}
                size={110}
                width={12}
                fill={40}
                tintColor="#00e0ff"
                backgroundColor="#3d5875">
                {fill => (
                  <Image
                    style={styles.insideProgresbarImage}
                    source={require('../../../assets/images/image2.png')}
                  />
                )}
              </AnimatedCircularProgress>
              <View style={{height: 20}} />
              <Text style={styles.petNameText}>Baxter Faline</Text>
              <View style={{height: 20}} />
              <Text style={styles.VisitCompleteText}>VISIT COMPLETE</Text>
            </View>
            <View style={styles.progresbarContainer}>
              <AnimatedCircularProgress
                size={110}
                width={12}
                fill={40}
                tintColor="#00e0ff"
                backgroundColor="#3d5875">
                {fill => (
                  <Image
                    style={styles.insideProgresbarImage}
                    source={require('../../../assets/images/image2.png')}
                  />
                )}
              </AnimatedCircularProgress>
              <View style={{height: 20}} />
              <Text style={styles.petNameText}>Baxter Faline</Text>
              <View style={{height: 20}} />
              <Text style={styles.VisitCompleteText}>VISIT COMPLETE</Text>
            </View>
            <View style={styles.progresbarContainer}>
              <AnimatedCircularProgress
                size={110}
                width={12}
                fill={40}
                tintColor="#00e0ff"
                backgroundColor="#3d5875">
                {fill => (
                  <Image
                    style={styles.insideProgresbarImage}
                    source={require('../../../assets/images/image2.png')}
                  />
                )}
              </AnimatedCircularProgress>
              <View style={{height: 20}} />
              <Text style={styles.petNameText}>Baxter Faline</Text>
              <View style={{height: 20}} />
              <Text style={styles.VisitCompleteText}>VISIT COMPLETE</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  VisitCompleteText: {
    color: 'lightgreen',
    // paddingTop:20
  },
  TreatmentsView: {
    height: 350,
    width: '100%',
    // backgroundColor: '#efefef',
  },
  progresbarContainer: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    width: 170,
    height: 230,
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  treatmentText: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
    paddingVertical: 10,
  },
  petNameText: {width: 130, textAlign: 'center'},
  insideProgresbarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  header: {
    // height: 440/ScreenHeight*1000,
    // height: ScreenHeight/70*10,
    height: 70,
    width: '100%',
    backgroundColor: '#30C5FD',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
});
