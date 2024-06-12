import { View, Text, TextInput,FlatList,Pressable } from 'react-native';
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import stylesbb from './stylesy';


const SuggestionRowbb = (itmc) => {
    var itm=itmc.itma; 
    console.log('itm ',itm);
   return (
        // Copied from my initial version
        // <View style={stylesbb.row}>
        <View style={stylesbb.row}  
        // onPress={()=>navigation.navigate('GuestNm')}
        >
          <View style={stylesbb.iconContainer}>
            <Entypo name={"location-pin"} size={30} color='black' />
          </View>

          {/* <Text style={stylesbb.locationText}>{item.description}</Text>  */}
          <Text style={stylesbb.locationText}>{itm.description}</Text> 
        </View>
     
      
   
  )
}

export default SuggestionRowbb