import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreenbb from '../screensy/HomeScreeny';
import SearchResultScrnbb from '../screensy/SearchResultsy';
import SearchResultsTabNavigatorbb from './SearchResultsTabNavigatory';


const Stackbb = createNativeStackNavigator();
const ExploreNavigatorbb = () => {
  return (
    // <NavigationContainer>
        // own explore: ERROR  Error: Looks like you have nested a 'NavigationContainer' inside another. Normally you need only one container at the root of the app, so this was probably an error. If this was intentional, pass 'independent={true}' explicitly. Note that this will make the child navigators disconnected from the parent and you won't be able to navigate between them.
        <Stackbb.Navigator>
            <Stackbb.Screen name='HomeNm' component={HomeScreenbb}      // by default this page will show
            options={{
                headerShown: false,
            }}/>

            <Stackbb.Screen name='SrchRsltTabNm' component={SearchResultsTabNavigatorbb} options={{title:'Destinations'}}       
                                                    // all titles are given by  me
                                    // after going `SearchResultScrnbb` if we press back it will go to 
            />         

        </Stackbb.Navigator>
    //   </NavigationContainer>
  )
}

export default ExploreNavigatorbb