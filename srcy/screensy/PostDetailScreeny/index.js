import React from "react";
import { View, Text } from "react-native";
import {useRoute} from '@react-navigation/native';

import placesbb from '../../../assetsy/data/feed';
import DetailPostCompbb from "../../componentsy/DetailedPostCompy";


const PostDetailScreenbb = (props) => {
  const route = useRoute();

  const postkk = placesbb.find(place => place.idy === route.params.postIdpp);
//   const postkk = placesbb.find(place => place.idy === '0');

  return (
    <View style={{backgroundColor: 'white'}}>
      <DetailPostCompbb postpp={postkk} />
    </View>
  );
};

export default PostDetailScreenbb;
