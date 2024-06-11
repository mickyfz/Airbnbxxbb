import { View, Text } from 'react-native'
import React from 'react'
import {  createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResultScrnbb from '../screensy/SearchResultsy';

const Taby = createMaterialTopTabNavigator();

const SearchResultsTabNavigatorbb = () => {
  return (
    <Taby.Navigator 
    //deprecated baby
    /* tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        }
    }} */
//    own explore:baby
   screenOptions={{
        tabBarActiveTintColor:"#f15454",
        "tabBarIndicatorStyle": {
          "backgroundColor": "#f15454"
        }
      
   }}
      > 
    <Taby.Screen name='list' component={SearchResultScrnbb} />
    <Taby.Screen name='Map' component={SearchResultScrnbb} />
 
  </Taby.Navigator>
  )
}

export default SearchResultsTabNavigatorbb