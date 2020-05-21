import { Component } from 'react'
import { View, Text, Stylesheet, Dimension, Image, } from 'react-native'
import Icon from 'react-native-vector-icons';
import { Card } from 'react-native-card-view';

export default class Teams_of_Dvara_Trust extends components{
	render{
		return(
			const windowWidth = Dimensions.get('window').width;
			const windowHeight = Dimensions.get('window').height;
			<View style={styles.topbar}>
				<icon name='ios-arrowleft' style={{paddingleft='10'}} />
				<Text style={{paddingleft='15'}}>Teams_of_Dvara_Trust</Text>
			</View>
			<View style={styles.cardrow} >
				<Touchableobacity onPress={() => this.props.navigation.navigate('Board_Members')}  >
					<Card style={styles.card} >
					<Image source={require('./icon_name.png')} style={{justifycontent:'center',alignitems:'center'}} /> 
					</Card>
				</Touchableobacity>
				<Touchableobacity onPress={() => this.props.navigation.navigate('IT_Teams')}  >
					<Card style={styles.card} >
					<Image source={require('./icon_name.png')} style={{justifycontent:'center',alignitems:'center'}} /> 
					</Card>
				</Touchableobacity>
			</View>
			<View style={styles.cardrow} >
				<Touchableobacity onPress={() => this.props.navigation.navigate('Finace_Team')}  >
					<Card style={styles.card} >
					<Image source={require('./icon_name.png')} style={{justifycontent:'center',alignitems:'center'}} /> 
					</Card>
				</Touchableobacity>
				<Touchableobacity onPress={() => this.props.navigation.navigate('Facility_Team')}  >
					<Card style={styles.card} >
					<Image source={require('./icon_name.png')} style={{justifycontent:'center',alignitems:'center'}} /> 
					</Card>
				</Touchableobacity>
			</View>
			<View style={styles.cardrow} >
				<Touchableobacity onPress={() => this.props.navigation.navigate('HR_Team')}  >
					<Card style={styles.card} >
					<Image source={require('./icon_name.png')} style={{justifycontent:'center',alignitems:'center'}} /> 
					</Card>
				</Touchableobacity>
				<Touchableobacity onPress={() => this.props.navigation.navigate('Admin')}  >
					<Card style={styles.card} >
					<Image source={require('./icon_name.png')} style={{justifycontent:'center',alignitems:'center'}} /> 
					</Card>
				</Touchableobacity>
			</View>
			<View style={styles.cardrow} >
				<Touchableobacity onPress={() => this.props.navigation.navigate('Communication_Team')}  >
					<Card style={styles.card} >
					<Image source={require('./icon_name.png')} style={{justifycontent:'center',alignitems:'center'}} /> 
					</Card>
				</Touchableobacity>
				<Touchableobacity onPress={() => this.props.navigation.navigate('Branding_Team')}  >
					<Card style={styles.card} >
					<Image source={require('./icon_name.png')} style={{justifycontent:'center',alignitems:'center'}} /> 
					</Card>
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
