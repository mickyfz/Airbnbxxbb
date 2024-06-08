import React,{useState} from 'react';
import {View, Text, StyleSheet,Button, TextInput,SafeAreaView} from 'react-native';


import HomeScreenbb from "./srcy/screensy/HomeScreeny";
import Postbb from "./srcy/componentsy/Posty";
import feedbb from "./assetsy/data/feed";
const App = () => {
// const App: () => React$Node = () => {

const feed=feedbb;
// console.log(feed);
return (
  <>
  <SafeAreaView>
    {/* <HomeScreenbb/> */}
    <Postbb feedy={feed}/>
    {/* <Postbb/>
    <Postbb/>
    <Postbb/> */}
  </SafeAreaView>
  </>
  )
} 




export default  App;

