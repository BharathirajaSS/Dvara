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

export default function HomeScreen({navigation}) {
    return (
      <SafeAreaView style={{flex:1}}>

        <View style={{flex:1,backgroundColor:'white'}}>

            {/* <View style={styles.home}>
                <View style={{flexDirection:'row'}}>

                    <View >
                        <Text style={{marginTop:80,fontSize:28,marginLeft:30,fontWeight:'bold'}}>Good Morning,</Text>
                        <Text style={{marginTop:3,fontSize:28,marginLeft:30,fontWeight:'bold'}}>Krishna!</Text>
                        <Text style={{fontSize:14,marginLeft:30,color:'white',marginTop:3}}>Welcome to Dvara Family</Text>
                    </View>

                    <View style={{marginTop:80,marginLeft:45}}>
                        <Image 
                            source={require('../assets/user.jpg')}
                            style={{width: 90, height: 90, borderRadius: 90/ 2}} 
                        /> 
                    </View>

                </View>

                <View style={{
                    flexDirection:'row',
                    padding:10,
                    backgroundColor:'white',
                    marginHorizontal:20,
                    shadowOffset:{width:0,height:0},
                    shadowOpacity:0.2,
                    elevation:1,
                    borderRadius:20,
                    marginTop:Platform.OS =='android' ? 50 : null 
                    }}> */}
                    {/* <Ionicons name="ios-search" size={20} style={{marginRight:20}}/>
                    <TextInput 
                        underlineColorAndroid='transparent'
                        placeholder="Search"
                        placeholderTextColor='grey'
                        style={styles.searchTextBox}
                    />
                </View>
            </View> */}
            
            <ScrollView scrollEventThrottle={16}>
                <View style={styles.home}>
                <View style={{flexDirection:'row'}}>

                    <View >
                        <Text style={{marginTop:80,fontSize:28,marginLeft:30,fontWeight:'bold'}}>Good Morning,</Text>
                        <Text style={{marginTop:3,fontSize:28,marginLeft:30,fontWeight:'bold'}}>Krishna!</Text>
                        <Text style={{fontSize:14,marginLeft:30,color:'white',marginTop:3}}>Welcome to Dvara Family</Text>
                    </View>

                    <View style={{marginTop:80,marginLeft:45}}>
                        <Image 
                            source={require('../assets/user.jpg')}
                            style={{width: 90, height: 90, borderRadius: 90/ 2}} 
                        /> 
                    </View>

                </View>

                <View style={{
                    flexDirection:'row',
                    padding:10,
                    backgroundColor:'white',
                    marginHorizontal:20,
                    shadowOffset:{width:0,height:0},
                    shadowOpacity:0.2,
                    elevation:1,
                    borderRadius:20,
                    marginTop:Platform.OS =='android' ? 50 : null 
                    }}>
                    <Ionicons name="ios-search" size={20} style={{marginRight:20}}/>
                    <TextInput 
                        underlineColorAndroid='transparent'
                        placeholder="Search"
                        placeholderTextColor='grey'
                        style={styles.searchTextBox}
                    />
                </View>
            </View>
            

                <View style={{flex:1,backgroundColor:'white',paddingTop:20}}>
                    <View style={{flex:1,flexDirection:'row'}}>
                           
                        <View style={styles.inputWrap}>
                            <Text style={styles.headingText}>Recent Events</Text>
                        </View>

                        <View style={styles.inputWrap}>
                            <Text style={{color:'grey',marginLeft:90,marginTop:10}} onPress={() => navigation.navigate("All Events")}>View All</Text>
                        </View>
                    </View>
                     


                    <ScrollView 
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        <Category imageUrl={require('../assets/home6.jpg')} name='Dvara Event1' />
                        <Category imageUrl={require('../assets/home2.jpg')} name='Dvara Event2' />
                        <Category imageUrl={require('../assets/home3.jpg')} name='Dvara Event3' />
                        <Category imageUrl={require('../assets/home4.jpg')} name='Dvara Event4' />
                        <Category imageUrl={require('../assets/home5.jpg')} name='Dvara Event5' />
                        
                    </ScrollView>

                    <View style={{marginTop:40}}>
                          
                        <View style={{flex:1,flexDirection:'row'}}>

                            <View style={styles.inputWrap}>
                                <Text style={styles.headingText}>Recent News</Text>
                            </View>

                            <View style={styles.inputWrap}>
                                <Text style={{color:'grey',marginLeft:90,marginTop:10}} onPress={() => navigation.navigate("All Events")}>View All</Text>
                            </View>

                        </View>
                     
                        <View style={{width:width-40,height:200,marginTop:20,marginLeft:20}}>
                            <Image source={require("../assets/home3.jpg")} style={{flex:1,height:null,width:null,resizeMode:'cover',borderRadius:5,borderWidth:1,borderColor:'#dddddd'}}/>
                        </View>

                    </View>

                    <View style={{marginTop:40}}>

                        <Text style={styles.headingText}>
                            Our Mission
                        </Text>

                        <View style={{width:width-40,height:150,marginTop:20,marginLeft:20,backgroundColor:'limegreen',borderRadius:20}}>
                            <Text style={{marginLeft:10,fontSize:18,color:'white',textAlign: 'justify',lineHeight: 30,marginRight:20}} numberOfLines={5} >Our Mission is to ensure that
                                every individual and every enterprise has complete access to finacial services
                            </Text>
                        </View>

                    </View>


                    <View style={{marginTop:40,marginBottom:20}}>
                        
                        <View style={{flex:1,flexDirection:'row'}}>
                        
                            <View style={styles.inputWrap}>
                                <Text style={styles.headingText}>Customer Stories</Text>
                            </View>

                            <View style={styles.inputWrap}>
                                <Text style={{color:'grey',marginLeft:60,marginTop:10}} onPress={() => navigation.navigate('All Customer Stories')}>View All</Text>
                            </View>
                        </View>

                        <ScrollView 
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            <Category imageUrl={require('../assets/home6.jpg')} name='customer Story1' />
                            <Category imageUrl={require('../assets/home2.jpg')} name='customer Story2' />
                            <Category imageUrl={require('../assets/home3.jpg')} name='customer Story3' />
                            <Category imageUrl={require('../assets/home4.jpg')} name='customer Story4' />
                            <Category imageUrl={require('../assets/home5.jpg')} name='customer Story5' />
                        
                        </ScrollView>

                    </View>

                </View>

                  
            </ScrollView>
        </View>
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
    inputWrap: {
        marginBottom: 10
      },
    home:{
        height: 290,
        backgroundColor: 'limegreen' ,
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
        marginBottom:20,
        borderBottomRightRadius:25,
        borderBottomLeftRadius:25
    },
    searchTextBox:{
        flex:1,
        fontWeight:'700',
        backgroundColor:'white',
        borderRadius:6,
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