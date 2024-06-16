import { View,  FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Postbb from '../../componentsy/Posty';

const SearchResultScrnbb = (propy) => {

  const { postsbb } = propy;
  // console.log('postsbb scr',postsbb);



  return (
    <View>
      <FlatList
      data={postsbb}
      // data={feedbb}
      renderItem={({item})=> <Postbb feedy={item}/>}
      // keyExtractor={itz=>itz.id} 
          // own explore:But later, he also gave it. 1.47.45 ... But we don't need to give because our items already have `.id` property.
      />

    </View>
  )
}

export default SearchResultScrnbb