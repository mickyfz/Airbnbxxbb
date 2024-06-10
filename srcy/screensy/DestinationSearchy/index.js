import React, {useState} from 'react'
import { View, Text, TextInput,FlatList,Pressable } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import searchy from '../../../assetsy/data/search';
import {  useNavigation } from '@react-navigation/native'

import stylesbb from './stylesy';

const DestinationSearchScrnbb = () => {
  const navigation = useNavigation()
  const [desty, setDesty] = useState("")
  console.log(searchy);
  return (
  
    <View style={stylesbb.containery}>

      {/* SECTION: TextInput container */}
        <TextInput placeholder='Where are you goingbb?' value={desty} onChangeText={setDesty} style={stylesbb.inputTexty} />

      {/* SECTION: List of all destinations. */}
      <FlatList
      data={searchy}   
      // renderItem={({item})=>{ 
                        //  ❌ {}... ✅ () as we are returning
      renderItem={({item})=>(
        // <View style={stylesbb.row}>
        <Pressable style={stylesbb.row}  onPress={()=>navigation.navigate('GuestNm')}>
          <View style={stylesbb.iconContainer}>
            <Entypo name={"location-pin"} size={30} color='black' />
          </View>

          {/* <Text style={stylesbb.locationText}>{item.description}</Text>  */}
          <Text style={stylesbb.locationText}>{item.description}</Text> 
        </Pressable>
      )}/>
      

    </View>
      
   
  )
  // return (
  //   <View style={stylesbb.containery}>
  //     {/* SECTION: TextInput container (uncomment if needed) */}
  //     {/* <TextInput placeholder='Where are you goingbb?' value={desty} onChangeText={setDesty} style={stylesbb.inputTexty} /> */}
  
  //     {/* SECTION: List of all destinations. */}
  //     <FlatList
  //       data={searchy}
  //       renderItem={({ item }) => (
  //         <View style={stylesbb.row}>
  //           {/* Uncomment and adjust styles if needed
  //           <View style={stylesbb.iconContainer}>
  //             <Entypo name={"location-pin"} size={30} />
  //           </View> */}
  
  //           {/* Display item.description if available in the data, otherwise use a placeholder */}
  //           <Text style={stylesbb.locationText}>{item.description || 'No description available'}</Text>
  //         </View>
  //       )}
  //     />
  //   </View>
  // );
  
}


export default DestinationSearchScrnbb