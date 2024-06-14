import React from 'react'
import { View, Text } from 'react-native'
import { Marker } from "react-native-maps";
    

const CustomMarkerCompbb = (propy) => {
    const { coordinate, price, onPressff, isSelected } = propy;
    console.log('kk',isSelected);
    return (
        <Marker coordinate={coordinate} onPress={ onPressff}
        // <Marker coordinate={coordinate} onPress={()=>{ onPress();console.log('d ',isSelected);}}
                                                // Just for debugging baby.
        // />           // we Want to give our custom components with styles
        >
          <View style={{
            backgroundColor: isSelected ? "black" : "white",
            padding: 5,
            borderRadius: 20,
            borderColor: "grey",
            borderWidth: 1,
          }}>
            <Text style={{ color: isSelected ? "white" : "black", fontWeight: "bold" }}>${price}</Text>
          </View>
        </Marker>
      );
}

export default CustomMarkerCompbb