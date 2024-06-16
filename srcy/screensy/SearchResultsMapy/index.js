
// console.log([...Array(Placesbb.length)].map((_, i) => i * ITEM_WIDTH));

import React, { useState,useRef,useEffect,useMemo,useCallback } from 'react'
import { View,FlatList,useWindowDimensions } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Placesbb from '../../../assetsy/data/feed';
import CustomMarkerCompbb from '../../componentsy/CustomMarkerCompy/index(His UNoptimizebb Code)';
import PostCarouselItemCompbb from '../../componentsy/PostCarouselItemCompy';

import { debounce } from 'lodash';

import { listPostifybbs } from '../../../src/graphql/queries';
import { generateClient, post } from 'aws-amplify/api';

const client = generateClient();

const SearchResultsMapbb = () => {
  
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    const screenWidthbb = useWindowDimensions().width;
    
    const flatlistRefy = useRef();      //If you forget then    GO TO😝-->:CodestepbyStep codebb\61\App.js
    const mapRefy = useRef();

    const viewConfigbb = useRef({itemVisiblePercentThreshold: 70})
    const ITEM_WIDTH = screenWidthbb - 60;

    // const onViewChangedFuncbb = useRef((
    //   // {viewableItemsy}) => {     // you Cannot give any other name then `viewableItems`..... errorx:  TypeError: Cannot read property 'length' of undefined,
    //   {viewableItems}) => { 
    //     console.log('under View');
    //     // console.log('viewableItemsy--',viewableItems);
    //   if (viewableItems.length > 0) {    // that means we are seeing atleat 1 item in the screen
    //     const selectedPlacey = viewableItems[0].item;
    //     // console.log('selectedPlacey',selectedPlacey);
    //     console.log('selectedPlacey id',selectedPlacey.id);
    //     setSelectedPlaceId(selectedPlacey.id);
    //   }
    // })

       // Debounce the onViewChanged function
       const debouncedOnViewChanged = useRef(
         debounce(
          ({ viewableItems }) => {
            if (viewableItems.length > 0) {
              const selectedPlacey = viewableItems[0].item;
              if (selectedPlaceId !== selectedPlacey.id) {     // add a check to ensure that the selectedPlaceId is only updated if it is different from the current one. This can help to avoid redundant state updates and re-renders...if we are not on `scrollToIndex()` mejj

                setSelectedPlaceId(selectedPlacey.id);
                console.log('actual view changed',selectedPlacey.id,'--------------------------------------');
              }
            }
        }
        , 300)       // I did this because If you see his score, you might see that if you click one mark or it selecting. selecting another marker after that because when viewchanged(scrollToIndex) it changing `setSelectedPlaceId`. So that's why it for some time
    ).current;

    const onViewChangedFuncbb = useRef(
      (info) => {
      console.log('view changed')
        debouncedOnViewChanged(info);
    }
  
  );


    
    useEffect(() => {
      // if (!selectedPlaceId || !flatlistRefy) {
      if (!selectedPlaceId || !flatlistRefy.current || !mapRefy.current) {    // chatgpt:: Sometimes the map reference (mapRefy) might not be available immediately. Ensure it is properly set before attempting to animate.
        return;
      }
      console.log('selectedPlaceId',selectedPlaceId  );
      // const index = Placesbb.findIndex(place => place.id === selectedPlaceId)     // to Understand GO TO😝-->: Extra code\Javascript Extra Code\2bb.js
      const index = postsbb.findIndex(place => place.id === selectedPlaceId)     // to Understand GO TO😝-->: Extra code\Javascript Extra Code\2bb.js

      if (index !== -1) {    // own explore: that means no idy match
        console.log('Matched');
        flatlistRefy.current.scrollToIndex({index,animated: true})

        // const selectedPlacey = Placesbb[index];
        const selectedPlacey = postsbb[index];
        const region = {
          latitude: selectedPlacey.latitude,
          longitude: selectedPlacey.longitude,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }
        mapRefy.current.animateToRegion(region);
        // animateToRegionbb(region)
        console.log('under scrollbb'  );
    }
    }, [selectedPlaceId])     // when `selectedPlaceId` update this useeffect will trigger bb


    // const debouncedOnPressbb = useRef(debounce((id) => {
    //     setSelectedPlaceId(id);
    // }, 300)).current;
    const debouncedOnPressbb = useMemo(() => debounce((id) => {
      setSelectedPlaceId(id);
        console.log('debouncedOnPressbb');
    }, 300), []);

    // const animateToRegionbb = useCallback((region) => {
    //   if (mapRefy.current) {
    //     mapRefy.current.animateToRegion(region, 1000); // Smooth animation
    //   }
    // }, []);

 


  const [postsbb, setPostsbb] = useState([]);
  console.log('postbb',postsbb);
  useEffect(() => {
    const fetchPostsbb = async () => {
      try {             // it's recommended to use try catch block when you requesting on the internet

        // his code is not valid ... was fucking difficult to digest https://docs.amplify.aws/gen1/react-native/build-a-backend/graphqlapi/set-up-graphql-api/
        // const postsResult = await API.graphql(
        //   graphqlOperation(listPostifybbs)
        // )
        const postsResult = await client.graphql({query:listPostifybbs})

        setPostsbb(postsResult.data.listPostifybbs.items);
        console.log('api called successfull',postsbb);
      } catch (e) {
        console.log(e);
      }
    }

    fetchPostsbb();
  }, [])

  // Memoize the markers data to prevent re-renders
  // const markersMemoy = useMemo(() => Placesbb, [Placesbb]);
  const markersMemoy = useMemo(() => postsbb, [postsbb]);

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
      {/* {Placesbb.map(placey => ( */}
      { markersMemoy.length > 0 && markersMemoy.map(placey => (
      // {markersMemoy.map(placey => (
          <CustomMarkerCompbb
          key={placey.id}
          // coordinate={placey.coordinate}
          coordinate={{ latitude: placey.latitude, longitude: placey.longitude }}
          price={placey.newPrice}
          isSelected={placey.id === selectedPlaceId}

          onPressff={() => debouncedOnPressbb(placey.id)}

          // onPressff={() =>{ setSelectedPlaceId(placey.id);}}
          // onPress={() =>{ setSelectedPlaceId(placey.id); console.log('idy  ',selectedPlaceId,typeof(setSelectedPlaceId)); console.log('idy2 ',placey.id,typeof(placey.id));console.log(placey.id === selectedPlaceId);}}
                                              // Just for debugging baby.
          />)
      )}

      </MapView>

      <View  style={{position: 'absolute', bottom: 10}}>
        <FlatList
        ref={flatlistRefy}
        // data={Placesbb}    
        data={postsbb}    
        renderItem={({item})=>(
          <PostCarouselItemCompbb feedy={item} />
        )}
        keyExtractor={itz=>itz.id} 

        horizontal                      // horizontal={true}: This property instructs the <FlatList> to render the list items horizontally instead of the default vertical orientation. This creates a carousel-like effect.
        showsHorizontalScrollIndicator={false}                   //showsHorizontalScrollIndicator={false}: This property hides the default horizontal scroll indicator that appears at the bottom of the list when there's more content than can be displayed on the screen. Since you might have custom scroll behavior, hiding this indicator provides a cleaner visual experience.

        // GO TO😝-->:code stepbystep - [ANSWER-9::](#answer-9) 
        // snapToInterval={screenWidthbb - 60}
        snapToAlignment={"center"}           // it doesn't matter here
        decelerationRate={"fast"}

        viewabilityConfig={
          // itemVisiblePercentThreshold: 70        // Normally, who adds ceiling three items and they are considered as visual items, but you. want to those items They have occupied 70% the screenn.
          viewConfigbb.current}      // We could directly put them here, but we're not doing because if we change the value We need refresh the app..for production you can remove it 

        onViewableItemsChanged={onViewChangedFuncbb.current}      // if we scroll and see different carosoul items this function will trigger


        snapToInterval={ITEM_WIDTH}
        contentContainerStyle={{ paddingHorizontal: (screenWidthbb - ITEM_WIDTH) / 2
            // ,backgroundColor:'blue'         // just for testing bb
        }}       // 400-340=60 /2=30 ...left and right side will get 30 padding

        getItemLayout={(data, index) => (
            { length: ITEM_WIDTH, offset: ITEM_WIDTH * index, index }
        )}
                // GO TO😝-->:D:\Coding Playground\Extra code\not just dev Extra Code\Airbnb Clone Explanation code\2.getItemLayout.md
        />
     
      </View>

    
    </View>
  )
}

export default SearchResultsMapbb