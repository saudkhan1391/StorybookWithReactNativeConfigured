import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Calendar} from 'react-native-calendars';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {TextInput} from 'react-native-gesture-handler';
export default function InProgress() {
  const [selectImagePopup, SetselectImagePopup] = useState(false);
  function selectImageViewFunction() {
    if (selectImagePopup) {
      return (
        <TouchableWithoutFeedback
          onPress={() => {
            SetselectImagePopup(false);
          }}
          style={styles.popupTopContainer}>
          <View style={styles.selectImageModal}>
            <TouchableWithoutFeedback>
              <View style={styles.selectImageModalInside}>
                <View style={{width: '90%', alignSelf: 'center'}}>
                  <Text
                    style={{fontSize: 19, fontWeight: 'bold', marginTop: '7%'}}>
                    Select Image
                  </Text>
                  <Text style={{fontSize: 19, marginTop: '7%'}}>
                    Take Photo
                  </Text>
                  <Text style={{fontSize: 19, marginTop: '7%'}}>
                    Choose from library
                  </Text>
                  <View style={{marginTop: '12%', alignItems: 'flex-end'}}>
                    <TouchableOpacity
                      onPress={() => {
                        SetselectImagePopup(false);
                      }}>
                      <Text style={styles.cancelText}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      );
    }
  }
  return (
    <View style={styles.container}>
      {selectImageViewFunction()}
      <View style={styles.header}>
        <View>
          <AntDesign color="white" size={30} name={'arrowleft'} />
        </View>
        <Text style={{color: 'white', fontSize: 17}}>IN PROGRESS</Text>
        <View>
          <Ionicons color="white" size={39} name={'ios-menu'} />
        </View>
      </View>
      <View style={{height: 20}} />
      <ScrollView>
        <View style={styles.topContainerInScroll}>
          <Text style={{fontSize: 24}}>FUR BABY TRACKER RECORD -</Text>
          <Text style={{fontSize: 24}}>TREATMENT</Text>
          <View style={{height: 20}} />
        </View>
        <View style={{height: 20}} />
        <TouchableOpacity style={styles.returntoInprogressbtn}>
          <Text style={{color: 'white'}}>RETURN TO IN PROGRESS DASHBOARD</Text>
        </TouchableOpacity>
        {/* </View> */}
        <View style={styles.TreatmentsView}>
          <View style={{height: 30}} />
          {/* <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.treatmentText}>Swipe to view more </Text>
          </View> */}
          {/* <ScrollView horizontal={true}> */}
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
            <Text style={[styles.petNameText, {fontWeight: 'bold'}]}>
              Baxter{' '}
            </Text>
            <Text style={styles.petNameText}>Today's Visit </Text>
            <Text style={styles.petNameText}>
              Surgery (elective or non elective){' '}
            </Text>
            <View style={{height: 20}} />
            <TouchableOpacity
              onPress={() => {
                SetselectImagePopup(true);
              }}>
              <Text style={styles.VisitCompleteText}>ADD COVER PHOTO</Text>
            </TouchableOpacity>
          </View>
          {/* </ScrollView> */}
        </View>
        <View style={styles.ownerInfoContainer}>
          <View style={styles.ownerInfoLine}>
            <Text style={styles.ownerText}>Dropped Off @ </Text>
            <Text style={styles.ownernameText}>5:40 pm 2-18-2020</Text>
          </View>
          <View style={styles.ownerInfoLine}>
            <Text style={styles.ownerText}>Owner: </Text>
            <Text style={styles.ownernameText}>Saud Khan</Text>
          </View>
          <View style={styles.ownerInfoLine}>
            <Text style={styles.ownerText}>Phone: </Text>
            <Text style={styles.ownernameText}>03119265290</Text>
          </View>
          <View style={styles.ownerInfoLine}>
            <Text style={styles.ownerText}>Email: </Text>
            <Text style={styles.ownernameText}>saud.alphasquad@gmail.com</Text>
          </View>
          <View style={{height: 30}} />
          <Text>Notes from owner</Text>
          <View style={{height: 15}} />
          <TextInput style={styles.notefromOwnerInput} multiline />
        </View>
        <View style={{height: 40}} />
        <View style={styles.furbabyTrackerContainer}>
          <Text style={{fontSize: 19}}>FURBABY TRACKER</Text>
          <View style={{height: 5}} />
          <TouchableOpacity style={styles.edittrackerbtn}>
            <Text style={styles.edittrackertext}>EDIT TRACKER COMPONENTS</Text>
          </TouchableOpacity>
          <View style={styles.edittrackercomponentline}>
            <View style={styles.trackerImageView}>
              <Image
                style={styles.trackerImage}
                source={require('../../../assets/images/fill-empty.png')}
              />
            </View>
            <Text style={styles.currentConditionText}>Vitals</Text>
          </View>
          <View style={styles.edittrackercomponentline}>
            <View style={styles.trackerImageView}>
              <Image
                style={styles.trackerImage}
                source={require('../../../assets/images/fill-empty.png')}
              />
            </View>
            <Text style={styles.currentConditionText}>Diagnostic Review</Text>
          </View>
          <View style={styles.edittrackercomponentline}>
            <View style={styles.trackerImageView}>
              <Image
                style={styles.trackerImage}
                source={require('../../../assets/images/fill-empty.png')}
              />
            </View>
            <Text style={styles.currentConditionText}>
              Surgical Preparation
            </Text>
          </View>
          <View style={styles.edittrackercomponentline}>
            <View style={styles.trackerImageView}>
              <Image
                style={styles.trackerImage}
                source={require('../../../assets/images/fill-empty.png')}
              />
            </View>
            <Text style={styles.currentConditionText}>In Surgery</Text>
          </View>
          <View style={styles.edittrackercomponentline}>
            <View style={styles.trackerImageView}>
              <Image
                style={styles.trackerImage}
                source={require('../../../assets/images/fill-empty.png')}
              />
            </View>
            <Text style={styles.currentConditionText}>Nail Trim</Text>
          </View>
          <View style={styles.edittrackercomponentline}>
            <View style={styles.trackerImageView}>
              <Image
                style={styles.trackerImage}
                source={require('../../../assets/images/fill-empty.png')}
              />
            </View>
            <Text style={styles.currentConditionText}>Laser Therapy</Text>
          </View>
          <View style={styles.edittrackercomponentline}>
            <View style={styles.trackerImageView}>
              <Image
                style={styles.trackerImage}
                source={require('../../../assets/images/fill-empty.png')}
              />
            </View>
            <Text style={styles.currentConditionText}>In Recovery</Text>
          </View>
          <View style={styles.edittrackercomponentline}>
            <View style={styles.trackerImageView}>
              <Image
                style={styles.trackerImage}
                source={require('../../../assets/images/fill-empty.png')}
              />
            </View>
            <Text style={styles.currentConditionText}>Ready for pickup</Text>
          </View>
          <View style={{height: 20}} />
          <View style={styles.edittrackercomponentline}>
            <View style={styles.trackerImageViewSmall}>
              <Image
                style={styles.trackerImage}
                source={require('../../../assets/images/fill-blue.png')}
              />
            </View>
            <Text style={{marginLeft: '5%'}}>In Progress -tap once</Text>
          </View>
          <View style={styles.edittrackercomponentline}>
            <View style={styles.trackerImageViewSmall}>
              <Image
                style={styles.trackerImage}
                source={require('../../../assets/images/fill-green.png')}
              />
            </View>
            <Text style={{marginLeft: '5%'}}>Complete -tap twice</Text>
          </View>
        </View>
        <View style={{height: 40, borderBottomWidth: 1, borderColor: '#666'}} />
        <View style={{height: 40}} />
        <View style={styles.activityreportcontainer}>
          <Text style={{fontSize: 20}}>ACTIVITY REPORT</Text>
          <View style={{height: 20}} />
          <View>
            <View style={styles.activityheader}>
              <Text style={{fontSize: 18}}>Medication</Text>
              <Text style={styles.activityheadertext}>ADD ACTIVITY</Text>
            </View>
            <View style={styles.activityBody}>
              <Text style={styles.activitybodytext}>Posted Activities</Text>
            </View>
          </View>
          <View style={{height: 20}} />
          <View>
            <View style={styles.activityheader}>
              <Text style={{fontSize: 18}}>Food</Text>
              <Text style={styles.activityheadertext}>ADD ACTIVITY</Text>
            </View>
            <View style={styles.activityBody}>
              <Text style={styles.activitybodytext}>Posted Activities</Text>
            </View>
          </View>
          <View style={{height: 20}} />
          <View>
            <View style={styles.activityheader}>
              <Text style={{fontSize: 18}}>Pee & Poop</Text>
              <Text style={styles.activityheadertext}>ADD ACTIVITY</Text>
            </View>
            <View style={styles.activityBody}>
              <Text style={styles.activitybodytext}>Posted Activities</Text>
            </View>
          </View>
          <View style={{height: 20}} />
          <View>
            <View
              style={[
                styles.activityheader,
                {backgroundColor: '#30C5FD', borderWidth: 0},
              ]}>
              <Text style={{fontSize: 18, color: 'white'}}>
                Staff only notes
              </Text>
              <Text
                style={[
                  styles.activityheadertext,
                  {color: 'white', borderColor: 'white'},
                ]}>
                ADD ACTIVITY
              </Text>
            </View>
            <View style={styles.activityBody}>
              <Text style={styles.activitybodytext}>Posted Activities</Text>
            </View>
          </View>
          <View style={{height: 20}} />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  popupTopContainer: {
    width: '100%',
    zIndex: 4,
    position: 'absolute',
  },
  topContainerInScroll: {
    borderWidth: 0,
    borderColor: 'red',
    width: '90%',
    alignSelf: 'center',
  },
  cancelText: {
    fontSize: 17,
    fontWeight: 'bold',
    // alignSelf: 'flex-end',
    // marginTop: '8%',
    // borderWidth:1
  },
  selectImageModalInside: {
    height: 220,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  selectImageModal: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%',
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    justifyContent: 'center',
  },
  activitybodytext: {marginLeft: '8%', fontWeight: 'bold', fontSize: 16},
  activityBody: {
    height: 70,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#666',
    justifyContent: 'center',
  },
  activityheadertext: {
    color: '#A01D5F',
    borderWidth: 1,
    padding: 5,
    borderColor: '#a01d5f',
  },
  activityheader: {
    flexDirection: 'row',
    paddingHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    height: 60,
    borderColor: '#666',
    backgroundColor: '#efefef',
  },
  activityreportcontainer: {
    width: '90%',
    alignSelf: 'center',
  },
  currentConditionText: {marginLeft: '5%', fontSize: 16},
  edittrackercomponentline: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  trackerImage: {width: '100%', resizeMode: 'contain', height: '100%'},
  trackerImageView: {borderWidth: 0, width: '12%', height: 40},
  trackerImageViewSmall: {borderWidth: 0, width: '8%', height: 25},
  edittrackertext: {fontSize: 11, color: '#A01D5F', padding: 5},
  edittrackerbtn: {
    borderWidth: 1,
    borderColor: '#A01D5F',
    paddingVertical: 3,
    width: '60%',
    alignItems: 'center',
  },
  furbabyTrackerContainer: {
    width: '90%',
    alignSelf: 'center',
    borderBottomWidth: 0,
  },
  notefromOwnerInput: {width: '100%', height: 130, borderWidth: 1},
  ownernameText: {marginLeft: '5%', fontSize: 16},
  ownerText: {fontWeight: 'bold', fontSize: 16},
  ownerInfoContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  ownerInfoLine: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  returntoInprogressbtn: {
    //   height: '100%',
    //   width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    height: 60,
    width: '90%',
    alignSelf: 'center',
  },
  VisitCompleteText: {
    color: '#A01D5F',
    borderColor: '#A01D5F',
    borderWidth: 1,
    // lineHeight:30
    padding: 5,
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
    height: 300,
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
  petNameText: {width: 130, textAlign: 'center', color: 'black', fontSize: 16},
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
