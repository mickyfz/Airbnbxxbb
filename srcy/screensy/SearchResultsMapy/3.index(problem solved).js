// NOTE:this is chatgpt version after lots of try and it's the perfect version

import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { View, FlatList, useWindowDimensions, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Placesbb from '../../../assetsy/data/feed';
import CustomMarkerCompbb from '../../componentsy/CustomMarkerCompy/index(His UNoptimizebb Code)';
import PostCarouselItemCompbb from '../../componentsy/PostCarouselItemCompy';
import { debounce } from 'lodash';

// GO TO😝-->:D:\Coding Playground\Extra code\not just dev Extra Code\Airbnb Clone Explanation code\3.(1,2 and scrollToIndex ) in the code.md
// NOTE: instead of `snapToOffsets` this works...in our previous code I also used `snapToInterval={ITEM_WIDTH}` but it didn't worked because `getItemLayout`, and contentContainerStyle={{ paddingHorizontal: (screenWidth - ITEM_WIDTH) / 2 }}. this is the game changer or main factor of this code

const SearchResultsMapbb = () => {
    
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    const { width: screenWidth } = useWindowDimensions();
    const flatlistRefy = useRef();
    const mapRefy = useRef();
    const isScrollingRef = useRef(false);

    const ITEM_WIDTH = screenWidth - 60;

    const viewConfigbb = useRef({ itemVisiblePercentThreshold: 70 });

    const debouncedOnViewChanged = useRef(
        debounce(({ viewableItems }) => {
            if (viewableItems.length > 0 && !isScrollingRef.current) {
                const selectedPlacey = viewableItems[0].item;
                if (selectedPlaceId !== selectedPlacey.id) {
                    setSelectedPlaceId(selectedPlacey.id);
                    console.log('actual view changed');
                }
            }
        }, 300)
    ).current;

    const onViewChangedFuncbb = useRef((info) => {
        debouncedOnViewChanged(info);
    });

    useEffect(() => {
        if (!selectedPlaceId || !flatlistRefy.current || !mapRefy.current) {
            return;
        }

        console.log('selectedPlaceId', selectedPlaceId);
        const index = Placesbb.findIndex(place => place.id === selectedPlaceId);

        if (index !== -1) {
            console.log('Matched');
            isScrollingRef.current = true;

            flatlistRefy.current.scrollToIndex({ index, animated: true });
            const selectedPlacey = Placesbb[index];
            const region = {
                latitude: selectedPlacey.coordinate.latitude,
                longitude: selectedPlacey.coordinate.longitude,
                latitudeDelta: 0.8,
                longitudeDelta: 0.8,
            };

            animateToRegionbb(region);

            setTimeout(() => {
                isScrollingRef.current = false;
            }, 1000); // adjust the timeout to match the scroll animation duration
        }
    }, [selectedPlaceId]);

    const debouncedOnPressbb = useMemo(() => debounce((id) => {
        setSelectedPlaceId(id);
    }, 300), []);

    const animateToRegionbb = useCallback((region) => {
        if (mapRefy.current) {
            mapRefy.current.animateToRegion(region, 1000);
        }
    }, []);

    const markersMemoy = useMemo(() => Placesbb, []);

    console.log([...Array(Placesbb.length)].map((_, i) => i * ITEM_WIDTH));

    return (
        <View style={{ flex: 1 }}>
            <MapView
                ref={mapRefy}
                style={{ flex: 1 }}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 28.3279822,
                    longitude: -16.5124847,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                }}
            >
                {markersMemoy.map(placey => (
                    <CustomMarkerCompbb
                        key={placey.id}
                        coordinate={placey.coordinate}
                        price={placey.newPrice}
                        isSelected={placey.id === selectedPlaceId}
                        onPressff={() => debouncedOnPressbb(placey.id)}
                    />
                ))}
            </MapView>

            <View style={styles.carouselContainer}>
                <FlatList
                    ref={flatlistRefy}
                    data={Placesbb}
                    renderItem={({ item }) => (
                        <PostCarouselItemCompbb feedy={item} />
                    )}
                    keyExtractor={itz => itz.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    viewabilityConfig={viewConfigbb.current}
                    onViewableItemsChanged={onViewChangedFuncbb.current}
                    decelerationRate={"fast"}




                    contentContainerStyle={{ paddingHorizontal: (screenWidth - ITEM_WIDTH) / 2 }}       // 400-340=60 /2=30 ...left and right side will get 30 padding
                                    // GO TO😝-->:D:\Coding Playground\Extra code\not just dev Extra Code\Airbnb Clone Explanation code\1.snapToOffsets.md because both work together
                    // snapToOffsets={[...Array(Placesbb.length)].map((_, i) => i * ITEM_WIDTH)}
                                    // GO TO😝-->:D:\Coding Playground\Extra code\not just dev Extra Code\Airbnb Clone Explanation code\1.snapToOffsets.md

                    snapToInterval={ITEM_WIDTH}
                            // own explore: works baby
                    getItemLayout={(data, index) => (
                        { length: ITEM_WIDTH, offset: ITEM_WIDTH * index, index }
                    )}
                            // GO TO😝-->:D:\Coding Playground\Extra code\not just dev Extra Code\Airbnb Clone Explanation code\2.getItemLayout.md
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    carouselContainer: {
        position: 'absolute',
        bottom: 10,
    },
});

export default SearchResultsMapbb;
