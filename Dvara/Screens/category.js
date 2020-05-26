import * as React from 'react';
import { 
    Text, 
    View, 
    StyleSheet, 
    SafeAreaView, 
    TextInput,
    Platform,Image,
    StatusBar } from 'react-native';

export default function Category ({imageUrl,name}) {
    return (
        <View style={{height:250,width:250,marginTop:20,borderWidth:0.9,borderColor:"#dddddd",marginLeft:20,borderRadius:10}}>

            <View style={{flex:4,borderRadius:60}}>
                <Image source={imageUrl} style={styles.image}/>
            </View>

            <View style={{flex:1,paddingTop:10,backgroundColor:'lightcyan'}}>
                <Text style={{marginLeft:5,fontSize:16}}>{name}</Text>
                <Text style={{marginLeft:5,color:'grey',fontSize:12,marginTop:5}}>05 January 2020</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        flex:1,
        width:null,
        height:null,
        resizeMode:'cover',
        borderRadius:10
    }
})