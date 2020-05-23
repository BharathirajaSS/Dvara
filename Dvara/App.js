import React, { Component } from 'react'
import { View, Text, Image, Stylesheet, Touchableobcity, ScrollView } from 'react-native'
//import { Cardview } from './Card.js'
//import { Organisation } from './Organisation.js'
import { Teams_of_Dvara_Trust } from './Teams_of_Dvara_Trust.js'

export default class App extends Component{
     render(){
          return(
			<Scrollview>
				<Teams_of_Dvara_Trust />
			</Scrollview>
		)
     }
}

