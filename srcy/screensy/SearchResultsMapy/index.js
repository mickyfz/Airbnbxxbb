
import React, { useState } from 'react'
import { View } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Placesbb from '../../../assetsy/data/feed';
import CustomMarkerCompbb from '../../componentsy/CustomMarkerCompy';
import PostCarouselItemCompbb from '../../componentsy/PostCarouselItemCompy';
const SearchResultsMapbb = () => {
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  return (

    <View>
      <MapView
          style={{width: '100%', height: '100%'}}             // don't forget to give it otherwise you won't see anything 
          provider={PROVIDER_GOOGLE}                                      // for ios... because by default it shows apple maps
          initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
      }}
  //   />         // We are not closing here because we want to use markers bb.  
    >

      {/* We are not putting code here so that it looks clean. */}
      {Placesbb.map(placey => (
          <CustomMarkerCompbb
          key={placey.idy}
          coordinate={placey.coordinate}
          price={placey.newPrice}
          isSelected={placey.idy === selectedPlaceId}
          onPressff={() =>{ setSelectedPlaceId(placey.idy);}}
          // onPress={() =>{ setSelectedPlaceId(placey.idy); console.log('idy  ',selectedPlaceId,typeof(setSelectedPlaceId)); console.log('idy2 ',placey.idy,typeof(placey.idy));console.log(placey.idy === selectedPlaceId);}}
                                              // Just for debugging baby.
          />)
      )}

      </MapView>
      <PostCarouselItemCompbb feedy={Placesbb[0]} />
    </View>
  )
}

export default SearchResultsMapbb