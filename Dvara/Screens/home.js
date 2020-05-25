import * as React from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    SafeAreaView, 
    TextInput,
    Platform,
    Image,
    Dimensions,
    StatusBar } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import Category from '../Screens/category.js';

const { height, width } = Dimensions.get('window')

export default function HomeScreen() {
    return (
      <SafeAreaView style={{flex:1}}>
          <View style={{flex:1}}>
              <View style={styles.home}>
                <View style={{
                    flexDirection:'row',
                    padding:10,
                    backgroundColor:'white',
                    marginHorizontal:20,
                    shadowOffset:{width:0,height:0},
                    shadowOpacity:0.2,
                    elevation:1,
                    marginTop:Platform.OS =='android' ? 30 : null 
                    }}>
                        {/* */}
                    <Ionicons name="ios-search" size={20} />
                    <TextInput 
                        underlineColorAndroid='transparent'
                        placeholder="Search"
                        placeholderTextColor='grey'
                        style={styles.searchTextBox}/>
                </View> 
              </View>
              <ScrollView scrollEventThrottle={16}>
                  <View style={{flex:1,backgroundColor:'white',paddingTop:20}}>
                      <Text style={styles.headingText}>Recent Events</Text>

                      <View style={{height:130,marginTop:20}}>
                          <ScrollView 
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                              <Category imageUrl={require('../assets/home6.jpg')} name='Dvara Event1' />
                              <Category imageUrl={require('../assets/home2.jpg')} name='Dvara Event2' />
                              <Category imageUrl={require('../assets/home3.jpg')} name='Dvara Event3' />
                              <Category imageUrl={require('../assets/home4.jpg')} name='Dvara Event4' />
                              <Category imageUrl={require('../assets/home5.jpg')} name='Dvara Event5' />
                             
                          </ScrollView>
                      </View>

                      <View style={{marginTop:40}}>
                          <Text style={styles.headingText}>
                              Recent News
                          </Text>
                          <View style={{width:width-40,height:200,marginTop:20,marginLeft:20}}>
                              <Image source={require("../assets/home3.jpg")} style={{flex:1,height:null,width:null,resizeMode:'cover',borderRadius:5,borderWidth:1,borderColor:'#dddddd'}}/>
                          </View>
                      </View>


                        {/* <View style={{height:150,marginTop:20,marginBottom:20}}>
                        <Text style={styles.headingText}>Customer Sories</Text>

                            <ScrollView 
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                <Category imageUrl={require('../assets/home6.jpg')} name='Dvara Event1' />
                                <Category imageUrl={require('../assets/home2.jpg')} name='Dvara Event2' />
                                <Category imageUrl={require('../assets/home3.jpg')} name='Dvara Event3' />
                                <Category imageUrl={require('../assets/home4.jpg')} name='Dvara Event4' />
                                <Category imageUrl={require('../assets/home5.jpg')} name='Dvara Event5' />
                            
                            </ScrollView>
                        </View> */}

                  </View>

                  
              </ScrollView>
          </View>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
    home:{
        height: 80,
        backgroundColor: 'white' ,
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
        marginBottom:20,
    },
    searchTextBox:{
        flex:1,
        fontWeight:'700',
        backgroundColor:'white'
    },
    headingText:{
        fontWeight:'600',
        fontSize:24,
        paddingHorizontal:20
    },
    image:{
        flex:1,
        width:null,
        height:null,
        resizeMode:'cover'
    }

})