import React from 'react';
import {View, Text, StyleSheet, Image, AsyncStorage} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function Screen3(props) {
  _storeData();
  async function _storeData() {
    try {
      await AsyncStorage.setItem(
        '@MySuperStore:currentScreen',
        JSON.stringify(props.route.name),
      );
      // alert('inside storefunction');
      console.log('data is stored on screen 3', props.route.name);
    } catch (error) {
      console.log('error storing data', error);
    }
  }
  return (
    <LinearGradient
      colors={['#4048ef', '#5a7bef']}
      style={styles.linearGradient}>
      <View style={styles.headerView}>
        <Text style={styles.buttonText}>GRATITUDE - SELFCARE</Text>
      </View>
      <View style={styles.imageView}>
        <Image
          style={styles.yogaImage}
          source={require('../assets/emotions.png')}
        />
      </View>
      <View style={styles.practiceTextView}>
        <Text style={styles.practiceText}>
          Experience more positive emotions, feel more alive, sleep better,
          express more compassion and kindness.
        </Text>
      </View>
      <View style={styles.ovalContainer}>
        <View style={styles.oval} />
        <View style={styles.oval} />
        <View style={styles.ovalDifferent} />
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Screen2');
          }}>
          <Text style={styles.skipText}>SKIP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Screen2');
          }}>
          <Text style={styles.nextStyle}>Finish</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>

    // <View>
    //   <Text>Gratitude</Text>
    // </View>
  );
}
var styles = StyleSheet.create({
  imageView: {
    // borderWidth: 2,
    height: '43%',
    width: '100%',
  },
  yogaImage: {
    // borderWidth: 10,
    resizeMode: 'contain',
    borderColor: 'red',
    alignSelf: 'center',
    width: '100%',
    height: '100%',
  },
  nextStyle: {
    color: 'white',
  },
  skipText: {
    opacity: 0.5,
    color: 'white',
  },
  buttonsContainer: {
    // height: 40,
    height: '8%',
    // marginTop: '12.5%',
    marginTop: '7%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    // borderWidth:1,
    borderColor: 'pink',
  },
  nextButon: {
    // borderWidth: 1,
    // height: 20,
    // width: 60,
    // backgroundColor: 'red',
  },
  ovalDifferent: {
    width: 14,
    height: 14,
    // borderWidth: 1,
    borderRadius: 10,
    // backgroundColor:"red"
    backgroundColor: '#202885',
  },
  oval: {
    width: 14,
    height: 14,
    borderWidth: 0.2,
    borderRadius: 10,
    backgroundColor: '#707bf8',
  },
  ovalContainer: {
    // marginTop: '12.5%',
    marginTop: '7%',
    // borderWidth: 1,
    width: '20%',
    alignSelf: 'center',
    flexDirection: 'row',
    // alignItems:"center",
    justifyContent: 'space-around',
  },
  practiceTextView: {
    // borderWidth: 1,
    // justifyContent:"center",
    alignItems: 'center',
    marginTop: '5%',
    height: '15%',
    width: '70%',
    alignSelf: 'center',
  },
  practiceText: {
    color: 'white',
    fontSize: 17,
    // fontWeight:"100"
    opacity: 0.8,
    textAlign: 'center',
  },
  headerView: {
    // borderWidth: 1,
    marginTop: '10%',
    marginBottom: '10%',
  },
  linearGradient: {
    flex: 1,
    // paddingLeft: 15,
    // paddingRight: 15,
    // borderWidth: 2,
    borderColor: 'red',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
