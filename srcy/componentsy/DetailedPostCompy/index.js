import { View, Text, Image,ScrollView } from 'react-native'
import React from 'react'
import stylesbb from './stylesy'

// copied from Posty GO TO😝-->:D:\Coding Playground\not.just.dev code bb\Airbnbxxbb\srcy\componentsy\Posty\index.js baby

const days = 7;

const DetailPostCompbb = (propsy) => {
  // const propbb=propsy.postpp;
  const propbb=propsy.postpp.data.getPostifybb;
  console.log('propy',propbb);
  return (
    <ScrollView style={stylesbb.containery}>
      {/* SECTION:  Image  */}
      <Image source={{uri:propbb.image}} style={stylesbb.img}/>

      {/* SECTION:   Bed & Bedroom  */}
      <Text style={stylesbb.bedroms}>
        <Text>{propbb.bed} bed {propbb.bedroom} bedroom</Text> 
      </Text>

      {/* SECTION:   Type & Description */}

      <Text style={stylesbb.descrips} 
      numberOfLines={2}   // 2 lines will be shown.
      
      >{propbb.type} • {propbb.title}</Text>
     
      {/* SECTION:    Old price & new price */}
       {/*  We wrapping Texts by a Text not a View. Because it put all the text in on one line. */}
      <Text style={stylesbb.prices}>   
        <Text style={stylesbb.oldPrice}>${propbb.oldPrice}</Text>
        <Text style={stylesbb.newPrice}> ${propbb.newPrice} </Text>
        / night
      </Text>

      {/*  SECTION:   Total price */}
      <Text style={stylesbb.totalPrice}> ${propbb.newPrice * days} total </Text>

      {/* NOTE:extra added */}
      <Text style={stylesbb.longDescrips}>{propbb.description}</Text>
    </ScrollView>
  )
    
// return(
//         <Text>hello</Text>
//     )
}


export default DetailPostCompbb