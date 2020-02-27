import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
const ScreenHeight = Dimensions.get('window').height;
export default function FurbabyDashboard() {
  const [ScheduleBoxVisible, SetScheduleBoxVisible] = useState(false);
  const [dbBoxVisible, SetdbBoxVisible] = useState(false);
  const [toolsboxVisible, SettoolsboxVisible] = useState(false);
  return (
    <View style={{height: '100%', width: '100%'}}>
      <ScrollView>
        <View style={styles.header}>
          <View />
          <Text style={{color: 'white', fontSize: 17}}>FURBABY DASHBOARD</Text>
          <View>
            <Ionicons color="white" size={39} name={'ios-menu'} />
          </View>
        </View>
        <View style={styles.afterHeader}>
          <Text style={styles.todayDate}>Today, Febuary 2,2020</Text>
        </View>
        <View style={styles.checkinBtn}>
          <Text style={{color: 'white'}}>CHECKIN A SCHEDULED FURBABY</Text>
        </View>
        <View style={{height: 20}} />
        <View style={styles.inprogressView}>
          <Text style={styles.inprogresstext}>IN PROGRESS</Text>
        </View>
        <View style={{height: 40}} />
        <View style={styles.TreatmentsView}>
          <View style={{height: 30}} />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.treatmentText}>TREATMENTS </Text>
            <Text>Swipe to view more</Text>
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
            </View>
          </ScrollView>
        </View>
        <View style={{height: 50}} />
        <View
          style={{
            borderWidth: 1,
            height: 60,
            width: '70%',
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            style={{
              height: '100%',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 50}} />
        <View style={styles.bigDropDownContainer}>
          <TouchableOpacity
            onPress={() => {
              SetScheduleBoxVisible(!ScheduleBoxVisible);
            }}
            style={[styles.bigDropDownTouchable, {backgroundColor: '#A01D5F'}]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="md-calendar" color="white" size={20} />
              <Text style={{color: 'white'}}> SCHEDULE</Text>
            </View>
            <AntDesign name="down" color="white" size={20} />
          </TouchableOpacity>
        </View>
        {ScheduleBoxVisible && (
          <View style={[styles.insdebottomboxView, {borderColor: '#A01D5F'}]}>
            <View style={styles.insidebottomboxTexticonView}>
              <Text style={{fontSize: 16}}>
                View and edit scheduled furbabies
              </Text>
              <AntDesign name="right" size={20} color="#A01D5F" />
            </View>
            <View style={styles.insidebottomboxTexticonView}>
              <Text style={{fontSize: 16}}>Add a furbaby to the schedule</Text>
              <AntDesign name="right" size={20} color="#A01D5F" />
            </View>
          </View>
        )}
        <View style={{height: 30}} />
        <View style={styles.bigDropDownContainer}>
          <TouchableOpacity
            onPress={() => {
              SetdbBoxVisible(!dbBoxVisible);
            }}
            style={styles.bigDropDownTouchable}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="md-calendar" color="white" size={20} />
              <Text style={{color: 'white'}}> FUR BABY DATABASE</Text>
            </View>
            <AntDesign name="down" color="white" size={20} />
          </TouchableOpacity>
        </View>
        {dbBoxVisible && (
          <View style={styles.insdebottomboxView}>
            <View style={styles.insidebottomboxTexticonView}>
              <Text style={{fontSize: 16}}>Create a new furbaby</Text>
              <AntDesign name="right" size={20} color="#30C5FD" />
            </View>
            <View style={styles.insidebottomboxTexticonView}>
              <Text style={{fontSize: 16}}>Add a furbaby to the schedule</Text>
              <AntDesign name="right" size={20} color="#30C5FD" />
            </View>
          </View>
        )}
        <View style={{height: 30}} />
        <View style={styles.bigDropDownContainer}>
          <TouchableOpacity
          onPress={()=>{
            SettoolsboxVisible(!toolsboxVisible)
          }}
            style={[styles.bigDropDownTouchable, {backgroundColor: '#8DC246'}]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="md-calendar" color="white" size={20} />
              <Text style={{color: 'white'}}> TOOLS & SETTINGS</Text>
            </View>
            <AntDesign name="down" color="white" size={20} />
          </TouchableOpacity>
        </View>
        {toolsboxVisible && (
          <View style={[styles.insdebottomboxView,{borderColor:"#8DC246"}]}>
            <View style={styles.insidebottomboxTexticonView}>
              <Text style={{fontSize: 16}}>Manage clinic users</Text>
              <AntDesign name="right" size={20} color="#8DC246" />
            </View>
            <View style={styles.insidebottomboxTexticonView}>
              <Text style={{fontSize: 16}}>Manage new database</Text>
              <AntDesign name="right" size={20} color="#8DC246" />
            </View>
            <View style={styles.insidebottomboxTexticonView}>
              <Text style={{fontSize: 16}}>Customise Medication & food dropdown</Text>
              <AntDesign name="right" size={20} color="#8DC246" />
            </View>
          </View>
        )}
        <View style={{height: 30}} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  insdebottomboxView: {
    borderWidth: 1,
    // height: 150,
    width: '90%',
    alignSelf: 'center',
    borderColor: '#30C5FD',
    borderWidth: 1,
  },
  insidebottomboxTexticonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    height: 60,
  },
  bigDropDownContainer: {
    height: 70,
    width: '90%',
    alignSelf: 'center',
    // marginBottom: 30,
  },
  bigDropDownTouchable: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#30C5FD',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  petNameText: {width: 70, textAlign: 'center'},
  insideProgresbarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
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
    fontSize: 18,
    color: '#333',
  },
  TreatmentsView: {
    height: 350,
    width: '100%',
    backgroundColor: '#efefef',
  },
  inprogresstext: {color: '#666', fontSize: 19, fontWeight: 'bold'},
  inprogressView: {
    height: 60,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: '#666',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  checkinBtn: {
    width: '70%',
    height: 60,
    alignSelf: 'center',
    backgroundColor: '#30C5FD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  todayDate: {
    fontSize: 18,
  },
  afterHeader: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth:1
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
});
