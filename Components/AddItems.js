import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import EntypIcon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
export default function AddItems(props) {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        height: '100%',
        borderColor: 'red',
      }}>
      <View style={{borderColor: 'aqua', height: '91%'}}>
        <View style={styles.header}>
          <EntypIcon name={'arrow-long-left'} size={24} color="#8a8a8f" />
          <Text style={styles.headerText}>Wash & Fold</Text>
          <AntIcon name="search1" size={24} color="#8a8a8f" />
        </View>
        <View style={styles.firstScrollContainer}>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{
              alignItems: 'center',
              paddingHorizontal: 10,
            }}>
            <View style={styles.filterItemView}>
              <Text>Tops</Text>
            </View>

            <View style={styles.filterItemViewNormal}>
              <Text>Suits</Text>
            </View>
            <View style={styles.filterItemViewNormal}>
              <Text>Trousers</Text>
            </View>
            <View style={styles.filterItemViewNormal}>
              <Text>Dresses</Text>
            </View>
            <View style={styles.filterItemViewNormal}>
              <Text>Tops</Text>
            </View>
            <View style={styles.filterItemViewNormal}>
              <Text>Tops</Text>
            </View>
          </ScrollView>
        </View>
        <View style={{height: '78%', borderColor: 'green'}}>
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.userinputsContainer}>
                <View style={styles.usernameView}>
                  <Text style={{fontWeight: 'bold'}}>Shirt</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text>Unit Price</Text>
                    <Text style={{fontWeight: 'bold'}}> Rs 50</Text>
                  </View>
                  <View style={styles.addMinusContainer}>
                    <Icon
                      name="ios-remove-circle-outline"
                      size={26}
                      color="#666666"
                    />
                    <Text>1</Text>
                    <Icon name="ios-add-circle" size={26} color="#fe5497" />
                  </View>
                </View>
                <View style={styles.usernameView}>
                  <Text style={{fontWeight: 'bold'}}>Shirt</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text>Unit Price</Text>
                    <Text style={{fontWeight: 'bold'}}> Rs 50</Text>
                  </View>
                  <View style={styles.addMinusContainer}>
                    <Icon
                      name="ios-remove-circle-outline"
                      size={26}
                      color="#666666"
                    />
                    <Text>1</Text>
                    <Icon name="ios-add-circle" size={26} color="#fe5497" />
                  </View>
                </View>
                <View style={styles.usernameView}>
                  <Text style={{fontWeight: 'bold'}}>Shirt</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text>Unit Price</Text>
                    <Text style={{fontWeight: 'bold'}}> Rs 50</Text>
                  </View>
                  <View style={styles.addMinusContainer}>
                    <Icon
                      name="ios-remove-circle-outline"
                      size={26}
                      color="#666666"
                    />
                    <Text>1</Text>
                    <Icon name="ios-add-circle" size={26} color="#fe5497" />
                  </View>
                </View>
                <View style={styles.usernameView}>
                  <Text style={{fontWeight: 'bold'}}>Shirt</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text>Unit Price</Text>
                    <Text style={{fontWeight: 'bold'}}> Rs 50</Text>
                  </View>
                  <View style={styles.addMinusContainer}>
                    <Icon
                      name="ios-remove-circle-outline"
                      size={26}
                      color="#666666"
                    />
                    <Text>1</Text>
                    <Icon name="ios-add-circle" size={26} color="#fe5497" />
                  </View>
                </View>
                <View style={styles.usernameView}>
                  <Text style={{fontWeight: 'bold'}}>Shirt</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text>Unit Price</Text>
                    <Text style={{fontWeight: 'bold'}}> Rs 50</Text>
                  </View>
                  <View style={styles.addMinusContainer}>
                    <Icon
                      name="ios-remove-circle-outline"
                      size={26}
                      color="#666666"
                    />
                    <Text>1</Text>
                    <Icon name="ios-add-circle" size={26} color="#fe5497" />
                  </View>
                </View>
                <View style={styles.usernameView}>
                  <Text style={{fontWeight: 'bold'}}>Shirt</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text>Unit Price</Text>
                    <Text style={{fontWeight: 'bold'}}> Rs 50</Text>
                  </View>
                  <View style={styles.addMinusContainer}>
                    <Icon
                      name="ios-remove-circle-outline"
                      size={26}
                      color="#666666"
                    />
                    <Text>1</Text>
                    <Icon name="ios-add-circle" size={26} color="#fe5497" />
                  </View>
                </View>
                <View style={styles.usernameView}>
                  <Text style={{fontWeight: 'bold'}}>Shirt</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text>Unit Price</Text>
                    <Text style={{fontWeight: 'bold'}}> Rs 50</Text>
                  </View>
                  <View style={styles.addMinusContainer}>
                    <Icon
                      name="ios-remove-circle-outline"
                      size={26}
                      color="#666666"
                    />
                    <Text>1</Text>
                    <Icon name="ios-add-circle" size={26} color="#fe5497" />
                  </View>
                </View>
                <View style={styles.usernameView}>
                  <Text style={{fontWeight: 'bold'}}>Shirt</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text>Unit Price</Text>
                    <Text style={{fontWeight: 'bold'}}> Rs 50</Text>
                  </View>
                  <View style={styles.addMinusContainer}>
                    <Icon
                      name="ios-remove-circle-outline"
                      size={26}
                      color="#666666"
                    />
                    <Text>1</Text>
                    <Icon name="ios-add-circle" size={26} color="#fe5497" />
                  </View>
                </View>
              </View>
              {/* botmbtn was here */}
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.signButtonView}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#fe5497', '#7f2284']}
          style={styles.LinearGradient}>
          <Text style={styles.signinText}>
            17 <Text style={styles.itemsAddedText}> items added</Text>
          </Text>

          <Text style={styles.signinText}>Rs 5000 ></Text>
        </LinearGradient>
      </View>
    </View>
  );
}
var styles = StyleSheet.create({
  firstScrollContainer: {
    height: 60,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#efeff4',
  },
  filterItemView: {
    borderRadius: 14,
    backgroundColor: '#fe5398',
    height: 30,
    // width: 50,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  filterItemViewNormal: {
    borderRadius: 14,
    backgroundColor: '#efeff4',
    height: 30,
    // width: 50,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  addMinusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 70,
    alignItems: 'center',
  },
  checkcircle: {alignSelf: 'center', marginTop: '10%', color: '#fE5398'},
  circle: {alignSelf: 'center', marginTop: '10%', color: '#d8d8d8'},
  typesButton: {
    // width:"100%",
    width: 80,
    height: 50,
    backgroundColor: '#832484',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  header: {
    height: '10%',
    // borderWidth:9,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  donthaveanaccountView: {
    marginTop: '20%',
    width: '95%',
    alignSelf: 'center',
    // justifyContent: 'space-around',
    // borderWidth: 2,
  },
  iconView: {
    width: 30,
    // borderWidth: 1,
  },
  signinText: {
    color: 'white',
    fontWeight: 'bold',
  },
  itemsAddedText: {
    color: '#c8c7cc',
    fontWeight: 'bold',
  },
  signWithFBtext: {
    color: '#fe5398',
    fontWeight: 'bold',
  },
  LinearGradient: {
    height: '100%',
    width: '100%',
    // alignSelf:"center",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    // borderRadius: 8,
    // marginTop:"5%"
    // marginTop: 40,
  },
  singWithFbView: {
    justifyContent: 'center',
    alignItems: 'center',
    // alignContent:"center",
    height: 50,
    borderWidth: 2,
    borderColor: '#fe5398',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 8,
    // marginTop: '10%',
    marginTop: 30,
    flexDirection: 'row',
  },
  signButtonView: {
    height: 50,
    // borderWidth: 3,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // position:"absolute",
    // bottom:2,
    // alignSelf: 'flex-end',
    // top:"74.6%",
    zIndex: 3,
    borderColor: 'blue',
  },
  remebermeText: {
    color: '#666666',
  },
  forgotPassText: {
    color: '#8a8a8f',
  },
  remembermeView: {
    justifyContent: 'space-between',
    // paddingHorizontal: '3%',
    flexDirection: 'row',
    marginTop: '5%',
    width: '90%',
    alignSelf: 'center',
    // borderWidth:1,
    alignItems: 'center',
  },
  userinputsContainer: {
    marginTop: '4%',
    // borderWidth: 1,
  },
  usernameView: {
    height: 60,
    borderBottomWidth: 1,
    borderColor: '#efeff4',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  signIntoContinueText: {
    color: 'white',
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '900',
  },
  signInToContinueView: {
    marginTop: '5%',
    justifyContent: 'space-around',
    alignItems: 'center',
    // borderWidth:1,
    // height:100,
    height: '20%',
    borderBottomWidth: 1,
    borderColor: '#efeff4',
    flexDirection: 'row',
  },
  welcomeBackView: {
    borderBottomWidth: 1,
    borderColor: '#efeff4',
    height: 45,
    justifyContent: 'center',
    // marginTop: '20%',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeBackText: {
    // borderWidth:1,
    // marginTop: '8%',
    color: '#666666',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    // justifyContent: 'space-between',
    // height: 700,
    // height: '200%',
    // marginTop: '5%',
    // width: '90%',
    // alignSelf: 'center',
    backgroundColor: 'white',
    // borderWidth: 2,
  },
  textInputView: {
    // alignSelf: 'stretch',
    borderWidth: 2,
    bottom: 0,
    borderColor: 'red',
  },
  textFiled: {
    height: 40,
    width: '99%',
    borderWidth: 1,
    backgroundColor: 'aqua',
    alignSelf: 'center',
  },
});
