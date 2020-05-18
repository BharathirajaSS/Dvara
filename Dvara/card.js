const users = [
 {
    name_and_district: 'a Madurai District',
    avatar: 'a1.jpg'
 },
 {
    name_and_district: 'b Theni District',
    avatar: 'b1.jpg'
 },
 {
    name_and_district: 'c Thirunelveli District',
    avatar: 'c1.jpg'
 },
 {
    name_and_district: 'd Madurai District',
    avatar: 'd1.jpg'
 },
 {
    name_and_district: 'e Thanjavur District',
    avatar: 'e1.jpg'
 },
]

import { Component } from 'react'
import { View, Text, Image, Stylesheet, Touchableobcity, ScrollView } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

class Cardview extend component{
     render(){
          return(
	       <ScrollView  horizontal={true} style={styles.container}>  
	       <Touchableobcity>
	               <View style={styles.customerstories}>
		               <Card style={styles.card}>
		                    {
		                         users.map((u, i) => {
		                              return (
		                                   <View key={i}>
		                                   	<Image
		                                   	resizeMode="cover"
		                                   	source={{ uri: u.avatar }}
		                                   	/>
		                                   </View>
		                              );
		                         })
		                    }
		               </Card>
		               <Text style={styles.name}>{u.name}</Text>
		               <Text style={{fontweight:'100',fontcolor:'grey',alignitems:'left'}}>Show Owner</Text>
		       </View>
	       </Touchableobcity>
	       </ScrollView>
          )
     }
}

const styles = StyleSheet.create({
  container:{  
    flex: 1,  
  },
  card: {
    hover: '5',
    height: '150',
    weight: '100',
    alignitems: 'strech',
  }
  name_and_district: {
    fontweight: 'bold',
    alignitem: 'left',
  }
});

export default Cardview;
