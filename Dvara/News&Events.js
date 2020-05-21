import { Component } from 'react'
import { View, Text, Stylesheet, Dimension, Image, } from 'react-native'
import Icon from 'react-native-vector-icons';
import { Card } from 'react-native-card-view';

export default class Organisation extends components{
	render{
		return(
			const windowWidth = Dimensions.get('window').width;
			const windowHeight = Dimensions.get('window').height;
			<View style={styles.topbar}>
				<icon name='ios-arrowleft' style={{paddingleft='10'}} />
				<Text style={{paddingleft='15'}}> News & Events </Text>
			</View>
			<View style={styles.cardrow} >
				<Touchableobacity onPress={() => this.props.navigation.navigate('Birthdays')}  >
					<Card style={styles.card} >
					<Image source={require('./icon_name.png')} style={{justifycontent:'center',alignitems:'center'}} /> 
					</Card>
				</Touchableobacity>
				<Touchableobacity onPress={() => this.props.navigation.navigate('Celebrations')}  >
					<Card style={styles.card} >
					<Image source={require('./icon_name.png')} style={{justifycontent:'center',alignitems:'center'}} /> 
					</Card>
				</Touchableobacity>
			</View>
			<View style={styles.cardrow} >
				<Touchableobacity onPress={() => this.props.navigation.navigate('Events')}  >
					<Card style={styles.card} >
					<Image source={require('./icon_name.png')} style={{justifycontent:'center',alignitems:'center'}} /> 
					</Card>
				</Touchableobacity>
				<Touchableobacity onPress={() => this.props.navigation.navigate('News')}  >
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
		paddingleft: 8
	}
	card: {
		width: (windowWidth/2)-12,
		height: (windowWidth/2)-12,
	}
}
