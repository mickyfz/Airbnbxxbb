import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Postbb from '../../componentsy/Posty';
import feedbb from "../../../assetsy/data/feed";

const SearchResultScrnbb = () => {
  return (
    <View>
      <FlatList
      data={feedbb}
      renderItem={({item})=> <Postbb feedy={item}/>}
      // keyExtractor={itz=>itz.id} 
          // own explore:But later, he also gave it. 1.47.45 ... But we don't need to give because our items already have `.id` property.
      />

    </View>
  )
}

export default SearchResultScrnbb