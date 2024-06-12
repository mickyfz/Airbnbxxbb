import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreenbb from '../screensy/HomeScreeny';
import HomeTabNavigatorbb from './HomeTabNavigatory';
import GuestScrnbb from '../screensy/Guestsy';
import DestinationSearchScrnbb from '../screensy/DestinationSearchy';
import Postbb from '../componentsy/Posty';
import SearchResultsMapbb from '../screensy/SearchResultsMapy';

const Stackbb = createNativeStackNavigator();

const Routerbb = () => {
  return (
    <NavigationContainer>
    <Stackbb.Navigator>
      {/* <Stackbb.Screen name='HomeTabNm' component={HomeTabNavigatorbb} */}
      <Stackbb.Screen name='HomeTabNm' component={SearchResultsMapbb}       // development easy giving here
      options={{
        headerShown: false,
      }}
      />
                        {/* By default, it shows the screen automatically that on the top, like here, login kk is on the top and it will display automatically by default */}
      <Stackbb.Screen name='GuestNm' component={GuestScrnbb} options={{title:'Number of Guest'}}/>    
                                                             {/* all titles are given by  me  baby*/}
      <Stackbb.Screen name='DstSrchNm' component={DestinationSearchScrnbb} options={{title:''}} />
      <Stackbb.Screen name='PostNm' component={Postbb} />

    </Stackbb.Navigator>
  </NavigationContainer>
  )
}

export default Routerbb