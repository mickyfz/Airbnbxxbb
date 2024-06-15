// import 'react-native-gesture-handler';   // No need to give. Despite that, it works. own explore:
// import android.os.Bundle;

import React,{useState} from 'react';
import {View, Text, StyleSheet,Button, TextInput,SafeAreaView} from 'react-native';


import HomeScreenbb from "./srcy/screensy/HomeScreeny";
import Postbb from "./srcy/componentsy/Posty";
import feedbb from "./assetsy/data/feed";
import SearchResultScrnbb from './srcy/screensy/SearchResultsy';
import DestinationSearchScrnbb from './srcy/screensy/DestinationSearchy';
import GuestScrnbb from './srcy/screensy/Guestsy';
import Routerbb from './srcy/natigationy/Routery';

import {
  withAuthenticator,
  useAuthenticator
} from '@aws-amplify/ui-react-native';

const App = () => {
// const App: () => React$Node = () => {

const feed=feedbb;
// console.log(feed);
return (
  
  <>
  {/* <SafeAreaView> */}
    {/* <HomeScreenbb/> */}
    {/* <Postbb feedy={feed}/> */}

    {/* <SearchResultScrnbb/> */}
    {/* <DestinationSearchScrnbb/> */}
    {/* <GuestScrnbb /> */}
    <Routerbb/>     
      {/* Don't wrap navigation with anything like here `SafeAreaView`. you won't see anything own explore: */}
  {/* </SafeAreaView> */}
  </>
  )
} 




export default  withAuthenticator(App);

