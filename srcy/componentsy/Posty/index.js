import { View, Text, Image } from 'react-native'
import React from 'react'
import stylesbb from './stylesy'

const Postbb = () => {
  return (
    <View style={stylesbb.containery}>
      {/* SECTION:  Image  */}
      <Image source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'}} style={stylesbb.img}/>

      {/* SECTION:   Bed & Bedroom  */}
      <Text style={stylesbb.bedroms}>
        <Text>1 bed </Text> 
        <Text>1 bedroom</Text> 
      </Text>

      {/* SECTION:   Type & Description */}

      <Text style={stylesbb.descrips} 
      numberOfLines={2}   // 2 lines will be shown.
      
      >Entire flat • Here we have lots of text, which you won't ever read them. I'm just saying, just bluffing, whatever I'm doing, you won't read it. Just saying, bro,</Text>
     
      {/* SECTION:    Old price & new price */}
       {/*  We wrapping Texts by a Text not a View. Because it put all the text in on one line. */}
      <Text style={stylesbb.prices}>   
        <Text style={stylesbb.oldPrice}>$43</Text>
        <Text style={stylesbb.newPrice}> $36 </Text>
        / night
      </Text>

      {/*  SECTION:   Total price */}
      <Text style={stylesbb.totalPrice}> $247 total </Text>
    </View>
  )
}

export default Postbb