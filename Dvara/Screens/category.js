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
        <View style={{height:130,width:150,marginTop:20,borderWidth:0.5,borderColor:"#dddddd",borderRadius:4}}>

            <View style={{flex:2,marginLeft:20}}>
                <Image source={imageUrl} style={styles.image}/>
            </View>

            <View style={{flex:1,marginLeft:20,paddingTop:10}}>
                <Text>{name}</Text>
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
        borderRadius:5
    }
})