import { View, Text, Image,useWindowDimensions } from 'react-native'
import React from 'react'
import stylesbb from './stylesy'

// copied from ---> Posty
const PostCarouselItemCompbb = (propsy) => {
  const widthbb = useWindowDimensions().width;
                    // You’re getting the current width of the mobile screen, which is dynamically updated on orientation change (when the device is rotated). This allows you to create responsive designs that adapt to different screen sizes and orientations. The width value is the screen’s width in pixels.
  // const propbb=propsy['feedy'][2];
  const propbb=propsy.feedy;
  // console.log('propy',propbb);

  return (
    <View style={[stylesbb.containery,{width:widthbb-60}]}>
      <View style={stylesbb.innerContainery}>

          {/* SECTION:  Image  */}
        <View>
          <Image source={{uri:propbb.image}} style={stylesbb.img}/>
        </View>


        <View style={{
          flex:1,   // Because of it, we are able to see the full text, otherwise it was being overflowed hidden.
          
          marginHorizontal:10}}>

          {/* SECTION:   Bed & Bedroom  */}
          <Text style={stylesbb.bedroms}>
            <Text>{propbb.bed} bed {propbb.bedroom} bedroom</Text> 
          </Text>

          {/* SECTION:   Type & Description */}
          <Text style={stylesbb.descrips} 
          numberOfLines={2}   // 2 lines will be shown.
          >{propbb.type} • {propbb.title}</Text>
        

          {/* SECTION:    Old price & new price */}
          <Text style={stylesbb.prices}>   
            <Text style={stylesbb.newPrice}> ${propbb.newPrice} </Text>
            / night
          </Text>

        </View>

      </View>
    </View>
  )
}

export default PostCarouselItemCompbb