import React, { useState,useEffect } from 'react'
import {  createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResultScrnbb from '../screensy/SearchResultsy';
import SearchResultsMapbb from '../screensy/SearchResultsMapy/';
import { useRoute } from '@react-navigation/native';

import { listPostifybbs } from '../../src/graphql/queries';

import feedy from "../../assetsy/data/feed"

import { generateClient } from 'aws-amplify/api';
const client = generateClient();


const Taby = createMaterialTopTabNavigator();

const SearchResultsTabNavigatorbb = () => {
  
  // const [posts, setPosts] = useState([]);
  const [postsxx, setPostsxx] = useState([]);

  const route = useRoute();
  const { guestgt, viewportgt }  = route.params;
  console.log(guestgt,viewportgt);


  useEffect(() => {
    const fetchPostsbb = async () => {
      try {             // it's recommended to use try catch block when you requesting on the internet

        // his code is not valid ... was fucking difficult to digest https://docs.amplify.aws/gen1/react-native/build-a-backend/graphqlapi/set-up-graphql-api/
        // const postsResult = await API.graphql(
        //   graphqlOperation(listPostifybbs)
        // )
        const filterbb={
          filter: {
            and: {
              maxGuests: {
                ge: guestgt
              }, 
              latitude: {
                between: [viewportgt.southwest.lat,
                  viewportgt.northeast.lat]
              },      // it's normal to give comma as vscode is giving error and it's working... own explore:with comma in appsync 'query' also worked...
              longitude: {
                between: [viewportgt.southwest.lng,
                  viewportgt.northeast.lng]
              }
            }
          }
        };
        const postsResult = await client.graphql({query:listPostifybbs,variables:filterbb})

        // console.log(postsResult,API);
        setPostsxx(postsResult.data.listPostifybbs.items);
        console.log('API called successfull-------->',postsxx);
      } catch (e) {
        console.log('errorx:-->',e);
      }
    }

    fetchPostsbb();
  }, [])


  return (
    <Taby.Navigator 
    //deprecated baby
    /* tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        }
    }} */
//    own explore:baby
   screenOptions={{
        tabBarActiveTintColor:"#f15454",
        "tabBarIndicatorStyle": {
          "backgroundColor": "#f15454"
        }
      
   }}
      > 
    <Taby.Screen name='list'>
      {()=>(

        <SearchResultScrnbb postsbb={postsxx}/> 
      )      }
      </Taby.Screen> 
    <Taby.Screen name='map'>
      {()=>(
        <SearchResultsMapbb postsbb={postsxx}/> 
      )
      }
      </Taby.Screen> 
    {/* <Taby.Screen name='Map' component={SearchResultsMapbb} /> */}
 
  </Taby.Navigator>
  )
}

export default SearchResultsTabNavigatorbb