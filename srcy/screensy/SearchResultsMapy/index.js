
import React, { useState } from 'react'
import { View,FlatList,useWindowDimensions } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Placesbb from '../../../assetsy/data/feed';
import CustomMarkerCompbb from '../../componentsy/CustomMarkerCompy';
import PostCarouselItemCompbb from '../../componentsy/PostCarouselItemCompy';
const SearchResultsMapbb = () => {
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    const widthbb = useWindowDimensions().width;

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

      <View  style={{position: 'absolute', bottom: 10}}>
        <FlatList
        data={Placesbb}    
        renderItem={({item})=>(
          <PostCarouselItemCompbb feedy={item} />
        )}
        keyExtractor={itz=>itz.idy} 

        horizontal                      // horizontal={true}: This property instructs the <FlatList> to render the list items horizontally instead of the default vertical orientation. This creates a carousel-like effect.
        showsHorizontalScrollIndicator={false}                   //showsHorizontalScrollIndicator={false}: This property hides the default horizontal scroll indicator that appears at the bottom of the list when there's more content than can be displayed on the screen. Since you might have custom scroll behavior, hiding this indicator provides a cleaner visual experience.

        // GO TO😝-->:code stepbystep - [ANSWER-9::](#answer-9) 
        snapToInterval={widthbb - 60}
        snapToAlignment={"center"}
        decelerationRate={"fast"}

        />
      </View>

    
    </View>
  )
}

export default SearchResultsMapbb