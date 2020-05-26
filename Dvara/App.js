// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './Screens/home.js';
import MessageScreen from './Screens/message.js';
import HRScreen from './Screens/hr.js';
import ITScreen from './Screens/it.js';
import ProfileScreen from './Screens/profile.js';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name ==='Message') {
              iconName = focused ? 'ios-notifications':'ios-notifications'
            } else if (route.name ==='IT') {
              iconName = focused ? 'ios-information-circle': 'ios-information-circle'
            } else if (route.name ==='Profile') {
              iconName = focused ? 'ios-contact': 'ios-contact'
            }else if (route.name ==='HR') {
              iconName = focused ? 'ios-globe': 'ios-globe'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}

        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
        
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Message" component={MessageScreen} />
        <Tab.Screen name="HR" component={HRScreen} />
        <Tab.Screen name="IT" component={ITScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
