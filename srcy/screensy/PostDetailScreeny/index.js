import React, { useState,useEffect } from "react";
import { View, Text } from "react-native";
import {useRoute} from '@react-navigation/native';

import placesbb from '../../../assetsy/data/feed';
import DetailPostCompbb from "../../componentsy/DetailedPostCompy";

import { generateClient, post } from 'aws-amplify/api';
const client = generateClient();
import { getPostifybb } from '../../../src/graphql/queries';

const PostDetailScreenbb = (props) => {
  const route = useRoute();
  // const postdt = [{"data": {"getPostifybb": {"__typename": "Postifybb", "bed": 1, "bedroom": 1, "createdAt": "2024-06-16T04:35:32.830Z", "description": "The OG Garage where Steve Jobs started Apple", "id": "e3e4ee63-c67c-4d4b-afbf-cd544843a14e", "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg", "latitude": 37.440093744608355, "longitude": -122.14084361959273, "maxGuests": 2, "newPrice": 7000, "oldPrice": 7500, "title": "Steve Jobs Garage", "type": "Garage", "updatedAt": "2024-06-16T04:35:32.830Z"}}}];


  const [postsdt, setPostDt] = useState({});
  console.log('route.params.postIdpp ',route.params.postIdpp);
  console.log('API called Details-------->',postsdt);

  useEffect(() => {
   const fetchPostsbb = async () => {
    try {   
      const postsResult =await client.graphql({query:getPostifybb, variables: { id: route.params.postIdpp }})
      setPostDt(postsResult)
    console.log('API called Details-------->',postsdt);
    }
   catch (e) {
    console.log('errorx:-->',e);
  }
}
fetchPostsbb();
}, [])

  console.log('postsdt.length>0',postsdt.length,postsdt);
  // const postkk = placesbb.find(place => place.id === route.params.postIdpp);
//   const postkk = placesbb.find(place => place.id === '0');

  return (
    <View style={{backgroundColor: 'white'}}>
     

     {
  // postsdt.length > 0 && <DetailPostCompbb postpp={postsdt} />
          // own explore: this is wrong because it's not an array....it's an object
  Object.keys(postsdt).length > 0 && <DetailPostCompbb postpp={postsdt} />
}

    </View>
  );
};

export default PostDetailScreenbb;
