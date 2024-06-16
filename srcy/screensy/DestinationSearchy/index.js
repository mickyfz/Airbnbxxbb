import React, {useState} from 'react'


import searchy from '../../../assetsy/data/search';
import {  useNavigation } from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import stylesbb from './stylesy';
import SuggestionRowbb from './SuggestionRowy';
import { View } from 'react-native';

const DestinationSearchScrnbb = () => {
  const navigation = useNavigation()
  // const [desty, setDesty] = useState("")
  console.log(searchy);
  return(
    <View style={stylesbb.containery}>

    <GooglePlacesAutocomplete
      placeholder='Where are you goingbb?'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
        navigation.navigate('GuestNm', { viewportgg: details.geometry.viewport })
      }}
      styles={{
        textInput: stylesbb.inputTexty,     // Giving our customer styleto the input box.
      }}
      query={{
        key: 'AIzaSyAx0e4SZcqRqvlOJsh6f7n6bTgdsDGNI7I',
        language: 'en',
        types: '(cities)',        //  we will only get suggestion about cities name

      }}

      // This is my own explorer to autofocus the input box baby.
      // autoFocus={true}      // it don't work 
      // it works
      enablePoweredByContainer={false}      // `hide powered by google` baby
      textInputProps={{
        autoFocus:true
      }}

      fetchDetails      // get more place details about the selected option from the Place Details API .... see the terminal `console.log(data, details);`

      suppressDefaultStyles  // 	removes all default styling from the library ... Because by default we are getting background. color bit different. Not exactly white.

      renderRow={(itmb)=><SuggestionRowbb itma={itmb} />}        // Using our custom style   
    />
    </View>

  )

  // initial version without google autocomplete api bb
  // return (
  
  //   <View style={stylesbb.containery}>

  //     {/* SECTION: TextInput container */}
  //       <TextInput placeholder='Where are you goingbb?' value={desty} onChangeText={setDesty} style={stylesbb.inputTexty} />

  //     {/* SECTION: List of all destinations. */}
  //     <FlatList
  //     data={searchy}   
  //     // renderItem={({item})=>{ 
  //                       //  ❌ {}... ✅ () as we are returning
  //     renderItem={({item})=>(
  //       // <View style={stylesbb.row}>
  //       <Pressable style={stylesbb.row}  onPress={()=>navigation.navigate('GuestNm')}>
  //         <View style={stylesbb.iconContainer}>
  //           <Entypo name={"location-pin"} size={30} color='black' />
  //         </View>

  //         {/* <Text style={stylesbb.locationText}>{item.description}</Text>  */}
  //         <Text style={stylesbb.locationText}>{item.description}</Text> 
  //       </Pressable>
  //     )}/>
      

  //   </View>
      
   
  // )

  
}


export default DestinationSearchScrnbb