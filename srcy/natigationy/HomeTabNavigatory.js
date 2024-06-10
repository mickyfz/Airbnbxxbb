import React,{useState} from 'react';
import {View, Text, StyleSheet,Button, TextInput} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreenbb from '../screensy/HomeScreeny';


import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SearchResultScrnbb from '../screensy/SearchResultsy';


const Taby = createBottomTabNavigator();

const HomeTabNavigatorbb = () => {

return (
//   <NavigationContainer>
    <Taby.Navigator 

    // this are being depreceated
    /* tabBarOptions={{
        activeTintColor: '#f15454',
      }} 
    */ 
      screenOptions={{
        // headerTintColor:'#f15454'
        // headerTintColor:'yellow'
        headerShown:false,  
        // he wanted to giving color in the bottom... i own found out the solution by seeing official documentation
        tabBarInactiveTintColor:'#f15454',

        tabBarActiveTintColor:'yellow',
        
      }}
    > 
      <Taby.Screen
        name={'Saved'}
        component={HomeScreenbb}
        options={{
        //   tabBarIcon: ({colorz}) => (    
                        // won't work name must be `color`    
          tabBarIcon: ({color}) => (
            <FontAwesome name="heart-o" size={25} color={color} />
          ),
        }}
      />
      <Taby.Screen
        name={'Airbnb'}
        component={HomeScreenbb}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="airbnb" size={25} color={color} />
          ),
        }}
      />
      <Taby.Screen
        name={'Messages'}
        component={HomeScreenbb}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="message-square" size={25} color={color} />
          ),
        }}
      />
    </Taby.Navigator>
//   </NavigationContainer>
  )
} 

export default  HomeTabNavigatorbb;
