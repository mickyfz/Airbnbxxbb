import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { View, FlatList, useWindowDimensions } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import CustomMarkerCompbb from '../../componentsy/CustomMarkerCompy/index(His UNoptimizebb Code)';
import PostCarouselItemCompbb from '../../componentsy/PostCarouselItemCompy';
import { debounce } from 'lodash';
// import { listPostifybbs } from '../../../graphql/queries'; // Adjust the path as necessary
import { listPostifybbs } from '../../../src/graphql/queries';

import { generateClient, post } from 'aws-amplify/api';

const client = generateClient();
const SearchResultsMapbb = () => {
    const [postsbb, setPostsbb] = useState([]);
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    const screenWidthbb = useWindowDimensions().width;

    const flatlistRefy = useRef();
    const mapRefy = useRef();

    const viewConfigbb = useRef({ itemVisiblePercentThreshold: 70 });
    const ITEM_WIDTH = screenWidthbb - 60;

    const debouncedOnViewChanged = useRef(
        debounce(
            ({ viewableItems }) => {
                if (viewableItems.length > 0) {
                    const selectedPlacey = viewableItems[0].item;
                    if (selectedPlaceId !== selectedPlacey.id) {
                        setSelectedPlaceId(selectedPlacey.id);
                        console.log('actual view changed', selectedPlacey.id, '--------------------------------------');
                    }
                }
            },
            300
        )
    ).current;

    const onViewChangedFuncbb = useRef((info) => {
        console.log('view changed');
        debouncedOnViewChanged(info);
    });

    // useEffect(() => {
    //     const fetchPostsbb = async () => {
    //         try {
    //             const postsResult = await client.graphql({ query: listPostifybbs });
    //             setPostsbb(postsResult.data.listPostifybbs.items);
    //             console.log('api called successful', postsResult.data.listPostifybbs.items);
    //         } catch (e) {
    //             console.log(e);
    //         }
    //     };

    //     fetchPostsbb();
    // }, []);
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

    useEffect(() => {
        if (!selectedPlaceId || !flatlistRefy.current || !mapRefy.current) {
            return;
        }
        console.log('selectedPlaceId', selectedPlaceId);
        const index = postsbb.findIndex(place => place.id === selectedPlaceId);

        if (index !== -1) {
            console.log('Matched');
            flatlistRefy.current.scrollToIndex({ index, animated: true });

            const selectedPlacey = postsbb[index];
            const region = {
                latitude: selectedPlacey.latitude,
                longitude: selectedPlacey.longitude,
                latitudeDelta: 0.8,
                longitudeDelta: 0.8,
            };
            mapRefy.current.animateToRegion(region);
            console.log('under scrollbb');
        }
    }, [selectedPlaceId, postsbb]);

    const debouncedOnPressbb = useMemo(() => debounce((id) => {
        setSelectedPlaceId(id);
        console.log('debouncedOnPressbb');
    }, 300), []);

    const markersMemoy = useMemo(() => postsbb, [postsbb]);

    return (
        <View>
            <MapView
                ref={mapRefy}
                style={{ width: '100%', height: '100%' }}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 28.3279822,
                    longitude: -16.5124847,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                }}
            >
                {  markersMemoy.length > 0 && markersMemoy.map(placey => (
                    <CustomMarkerCompbb
                        key={placey.id}
                        // coordinate={placey.coordinate}
                      coordinate={{ latitude: placey.latitude, longitude: placey.longitude }}

                        price={placey.newPrice}
                        isSelected={placey.id === selectedPlaceId}
                        onPressff={() => debouncedOnPressbb(placey.id)}
                    />
                ))}
            </MapView>

            <View style={{ position: 'absolute', bottom: 10 }}>
                <FlatList
                    ref={flatlistRefy}
                    data={postsbb}
                    renderItem={({ item }) => (
                        <PostCarouselItemCompbb feedy={item} />
                    )}
                    keyExtractor={itz => itz.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToAlignment={"center"}
                    decelerationRate={"fast"}
                    viewabilityConfig={viewConfigbb.current}
                    onViewableItemsChanged={onViewChangedFuncbb.current}
                    snapToInterval={ITEM_WIDTH}
                    contentContainerStyle={{
                        paddingHorizontal: (screenWidthbb - ITEM_WIDTH) / 2
                    }}
                    getItemLayout={(data, index) => (
                        { length: ITEM_WIDTH, offset: ITEM_WIDTH * index, index }
                    )}
                />
            </View>
        </View>
    );
};

export default SearchResultsMapbb;
