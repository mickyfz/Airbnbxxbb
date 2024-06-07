import React from 'react'
// Created using `rnfe` shortcut .....I start crying when I found the solution. 
import { View, Text, ImageBackground, Pressable,TouchableOpacity } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

import stylesbb from './stylesy';

const HomeScreenbb = () => {
  return (
  
    <View >
    
       {/* SECTION:Search Button ..... If you put it here, you won't be able to see it, despite giving `position: 'absolute'` ..specially because of `ImageBackground`...put them at the last otherwise you will see */}
        {/* <Pressable style={stylesbb.searchBtn} onPress={()=>console.warn('Searchbuttony bb')}>
          <Fontisto name="search" size={25} color={'#f15454'} />
          <Text style={stylesbb.searchBtnTxt}>Where are you going baby?</Text>
        </Pressable> */}
     

      <ImageBackground source={require('../../../assetsy/images/wallpaper.jpg')} style={stylesbb.imgy} 
      // imageStyle={stylesbb.imagebbxx}
      >

        {/* SECTION:Title */}
        {/* <Text style={stylesbb.titly}>Go Near</Text> */}
                          {/* This is how he did, but I don't like it. because it did not show on two line in my device or it may not work on different mobile */}
        <View >
          <Text style={stylesbb.titly}>Go </Text>
          <Text style={stylesbb.titly}>Micky</Text>
        </View>

        {/* SECTION:Button */}
        <Pressable style={stylesbb.btn} onPress={()=>console.warn('explorey')}>
          <Text style={stylesbb.btnTxt}>Explore nearby stays</Text>
        </Pressable>

      </ImageBackground>



       {/* SECTION:Search Button */}
      <Pressable style={stylesbb.searchBtn} onPress={()=>console.warn('Searchbuttony bb')}>
          <Fontisto name="search" size={25} color={'#f15454'} />
          <Text style={stylesbb.searchBtnTxt}>Where are you going baby?</Text>
        </Pressable>
    </View>
   
  )
}


export default HomeScreenbb