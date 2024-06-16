import { View,  FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Postbb from '../../componentsy/Posty';
// import feedbb from "../../../assetsy/data/feed";
import { listPostifybbs } from '../../../src/graphql/queries';

import { generateClient } from 'aws-amplify/api';

const client = generateClient();
const SearchResultScrnbb = () => {

  const [postsbb, setPostsbb] = useState([]);

  useEffect(() => {
    const fetchPostsbb = async () => {
      try {             // it's recommended to use try catch block when you requesting on the internet

        // his code is not valid ... was fucking difficult to digest https://docs.amplify.aws/gen1/react-native/build-a-backend/graphqlapi/set-up-graphql-api/
        // const postsResult = await API.graphql(
        //   graphqlOperation(listPostifybbs)
        // )
        const postsResult = await client.graphql({query:listPostifybbs})

        // console.log('API -------->',API);
        // console.log(postsResult,API);
        setPostsbb(postsResult.data.listPostifybbs.items);
      } catch (e) {
        console.log(API,e);
      }
    }

    fetchPostsbb();
  }, [])




  return (
    <View>
      <FlatList
      data={postsbb}
      // data={feedbb}
      renderItem={({item})=> <Postbb feedy={item}/>}
      // keyExtractor={itz=>itz.id} 
          // own explore:But later, he also gave it. 1.47.45 ... But we don't need to give because our items already have `.id` property.
      />

    </View>
  )
}

export default SearchResultScrnbb