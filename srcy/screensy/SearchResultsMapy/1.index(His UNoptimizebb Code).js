
import React, { useState,useRef,useEffect, } from 'react'
import { View,FlatList,useWindowDimensions } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Placesbb from '../../../assetsy/data/feed';
import CustomMarkerCompbb from '../../componentsy/CustomMarkerCompy/index(His UNoptimizebb Code)';
import PostCarouselItemCompbb from '../../componentsy/PostCarouselItemCompy';

import { debounce } from 'lodash';

const SearchResultsMapbb = () => {
  
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    const widthbb = useWindowDimensions().width;
    const flatlistRefy = useRef();      //If you forget then    GO TO😝-->:CodestepbyStep codebb\61\App.js
    const mapRefy = useRef();

    const viewConfigbb = useRef({itemVisiblePercentThreshold: 70})

    const onViewChangedFuncbb = useRef((
      // {viewableItemsy}) => {     // you Cannot give any other name then `viewableItems`..... errorx:  TypeError: Cannot read property 'length' of undefined,
      {viewableItems}) => { 
        console.log('under View');
        // console.log('viewableItemsy--',viewableItems);
      if (viewableItems.length > 0) {    // that means we are seeing atleat 1 item in the screen
        const selectedPlacey = viewableItems[0].item;
        // console.log('selectedPlacey',selectedPlacey);
        console.log('selectedPlacey id',selectedPlacey.id);
        setSelectedPlaceId(selectedPlacey.id);
      }
    })


    
    useEffect(() => {
      // if (!selectedPlaceId || !flatlistRefy) {
      if (!selectedPlaceId || !flatlistRefy.current || !mapRefy.current) {    // chatgpt:: Sometimes the map reference (mapRefy) might not be available immediately. Ensure it is properly set before attempting to animate.
        return;
      }
      console.log('selectedPlaceId',selectedPlaceId ,'--------------' );
      const index = Placesbb.findIndex(place => place.id === selectedPlaceId)     // to Understand GO TO😝-->: Extra code\Javascript Extra Code\2bb.js

      if (index !== -1) {    // own explore: that means no idy match
        console.log('Matched');
        flatlistRefy.current.scrollToIndex({index})

        const selectedPlacey = Placesbb[index];
        const region = {
          latitude: selectedPlacey.coordinate.latitude,
          longitude: selectedPlacey.coordinate.longitude,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }
        mapRefy.current.animateToRegion(region);
      
        console.log('under scroll','--------------------------------------');

    }
    }, [selectedPlaceId])     // when `selectedPlaceId` update this useeffect will trigger bb




  return (

    <View>
      <MapView
          ref={mapRefy}
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
          key={placey.id}
          coordinate={placey.coordinate}
          price={placey.newPrice}
          isSelected={placey.id === selectedPlaceId}

          onPressff={() => setSelectedPlaceId(placey.id)}

          // onPressff={() =>{ setSelectedPlaceId(placey.id);}}
          // onPress={() =>{ setSelectedPlaceId(placey.id); console.log('idy  ',selectedPlaceId,typeof(setSelectedPlaceId)); console.log('idy2 ',placey.id,typeof(placey.id));console.log(placey.id === selectedPlaceId);}}
                                              // Just for debugging baby.
          />)
      )}

      </MapView>

      <View  style={{position: 'absolute', bottom: 10}}>
        <FlatList
        ref={flatlistRefy}
        data={Placesbb}    
        renderItem={({item})=>(
          <PostCarouselItemCompbb feedy={item} />
        )}
        keyExtractor={itz=>itz.id} 

        horizontal                      // horizontal={true}: This property instructs the <FlatList> to render the list items horizontally instead of the default vertical orientation. This creates a carousel-like effect.
        showsHorizontalScrollIndicator={false}                   //showsHorizontalScrollIndicator={false}: This property hides the default horizontal scroll indicator that appears at the bottom of the list when there's more content than can be displayed on the screen. Since you might have custom scroll behavior, hiding this indicator provides a cleaner visual experience.

        // GO TO😝-->:code stepbystep - [ANSWER-9::](#answer-9) 
        snapToInterval={widthbb - 60}
        snapToAlignment={"center"}
        decelerationRate={"fast"}

        viewabilityConfig={
          // itemVisiblePercentThreshold: 70        // Normally, who adds ceiling three items and they are considered as visual items, but you. want to those items They have occupied 70% the screenn.
          viewConfigbb.current}      // We could directly put them here, but we're not doing because if we change the value We need refresh the app..for production you can remove it 

        onViewableItemsChanged={onViewChangedFuncbb.current}      // if we scroll and see different carosoul items this function will trigger


        />
      </View>

    
    </View>
  )
}

export default SearchResultsMapbb