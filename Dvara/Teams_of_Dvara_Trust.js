import React, { Component } from 'react'
import { View, Text, Stylesheet, Dimension, Image, } from 'react-native'
import Icon from 'react-native-vector-icons';
import CardView from 'react-native-cardview';

export default class Teams_of_Dvara_Trust extends Component{
	render{
		return(
			const windowWidth = Dimensions.get('window').width;
			const windowHeight = Dimensions.get('window').height;
			<View style={styles.topbar}>
				<Icon name='ios-arrowleft' style={{paddingleft='10',color:'white'}} />
				<Text style={{paddingleft='15',color:'white'}}>Teams_of_Dvara_Trust</Text>
			</View>
			<View style={styles.cardrow} >
				<Touchableobacity>	// onPress={() => this.props.navigation.navigate('Board_Members')}
					<CardView style={styles.card} >
					<Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} 
					style={{justifycontent:'center',alignitems:'center'}} /> 
					</CardView>
				</Touchableobacity>
				<Touchableobacity>	// onPress={() => this.props.navigation.navigate('IT_Teams')}
					<CardView style={styles.card} >
					<Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} 
					style={{justifycontent:'center',alignitems:'center'}} /> 
					</CardView>
				</Touchableobacity>
			</View>
			<View style={styles.cardrow} >
				<Touchableobacity>	// onPress={() => this.props.navigation.navigate('Finace_Team')}
					<CardView style={styles.card} >
					<Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} 
					style={{justifycontent:'center',alignitems:'center'}} /> 
					</CardView>
				</Touchableobacity>
				<Touchableobacity>	// onPress={() => this.props.navigation.navigate('Facility_Team')}
					<CardView style={styles.card} >
					<Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} 
					style={{justifycontent:'center',alignitems:'center'}} /> 
					</CardView>
				</Touchableobacity>
			</View>
			<View style={styles.cardrow} >
				<Touchableobacity>	// onPress={() => this.props.navigation.navigate('HR_Team')}
					<CardView style={styles.card} >
					<Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} 
					style={{justifycontent:'center',alignitems:'center'}} /> 
					</CardView>
				</Touchableobacity>
				<Touchableobacity>	// onPress={() => this.props.navigation.navigate('Admin')}
					<CardView style={styles.card} >
					<Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} 
					style={{justifycontent:'center',alignitems:'center'}} /> 
					</CardView>
				</Touchableobacity>
			</View>
			<View style={styles.cardrow} >
				<Touchableobacity>	// onPress={() => this.props.navigation.navigate('Communication_Team')}
					<CardView style={styles.card} >
					<Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} 
					style={{justifycontent:'center',alignitems:'center'}} /> 
					</CardView>
				</Touchableobacity>
				<Touchableobacity>	// onPress={() => this.props.navigation.navigate('Branding_Team')}
					<CardView style={styles.card} >
					<Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} 
					style={{justifycontent:'center',alignitems:'center'}} /> 
					</CardView>
				</Touchableobacity>
			</View>
		)
	}
}

const styles=stylesheet.create({
	topbar: {
		flex: 1,
		flexdirection: row,
		backgroundcolor: lightgreen,
		height: 125,
		borderBottomLeftRadius: 6,
		borderBottomRightRadius: 6
	},
	cardrow: {
		flex: 1,
		flexdirection: row,
		paddingleft: 6
	}
	card: {
		width: (windowWidth/2)-9,
		height: (windowWidth/2)-9,
	}
}
