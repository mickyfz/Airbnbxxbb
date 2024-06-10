import { View, Text,Pressable, Button, } from 'react-native'
import React,{useState} from 'react'
import stylesbb from './stylesy'
import {  useNavigation } from '@react-navigation/native'


// Airbnbxxbb\srcy\screensy\Guestsy\index.js --->OwnBaby
  // i don't know why intially it didn't worked. after restarting computer it worked
// NOTE:this is my version. i resued the component where he copy paste the information again. 
const GuestScrnbb = () => {
  const navigation = useNavigation()
  const [numAdlt, setNumAdlt] = useState(0)
  const [numChildrn, setNumChildrn] = useState(0)
  const [numInfrnts, setNumInfrnts] = useState(0)
  const Infobb=[
    {
      "titley":"Adultsdd",
      "descripy":'Ages 13 or above',
      "varbb":numAdlt,
      "setVarbb":setNumAdlt
    },
    {
      "titley":"Children",
      "descripy":'Ages 2—12',
      "varbb":numChildrn,
      "setVarbb":setNumChildrn
    },
    {
      "titley":"Infants",
      "descripy":'Under 2',
      "varbb":numInfrnts,
      "setVarbb":setNumInfrnts
    },

  ]
    return (
      <View style={{justifyContent:'space-between',height:'100%'}}>
            {/* we did it so that our button can show at the last. */}
      <View >
        {Infobb.map((item, index) => (
          <OwnBaby key={index} propsy={item} />
        ))}
      </View>

      <Pressable 
      style={{margin:30,backgroundColor:'#f15454',
          padding:10,
           //It don't work here ... Easy way to know will it work here or not? Is look that is vs code Giving you suggestion or not.
          // color:'white'     .
          // fontWeight:'bold'
          justifyContent:'center',
          alignItems:'center',
          borderRadius:15
      }} onPress={()=>navigation.navigate('HomeNm')}>
        {/* <Button title='Search' style={{marginHorizontal:20,backgroundColor:'red'}}/> */}
        <Text style={{color:'white',fontWeight:'bold',fontSize:30}} > Search </Text>
      </Pressable>
    </View>
   
  )
}

const OwnBaby = (propp) => {
  const {titley,descripy,varbb,setVarbb}=propp.propsy
  // console.log('h1',propp);
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between',
    margin:20,borderBottomWidth:1,borderColor:'lightgrey'}}>
      <View>
          <Text style={{fontWeight:'bold',fontSize:20}}>{titley}</Text>
          <Text style={{}}> {descripy}</Text>
      </View> 

      <View style={{flexDirection:'row',alignItems:'center'}}>
        <Pressable onPress={()=>{
          // console.warn('- clicked');
          setVarbb(Math.max(0,varbb-1))
        }} // when we need to give lots of style like here there we inline style for simplicity
          style={stylesbb.buttony}
          >
            <Text style={{fontWeight:'bold',fontSize:20}}>-</Text>
        </Pressable>

        <View>
            <Text style={{marginHorizontal:15,fontSize:20}}>{varbb} </Text>
        </View>
        
        <Pressable  onPress={()=>setVarbb(varbb+1)}
          style={stylesbb.buttony}>
            <Text style={{fontWeight:'bold',fontSize:20}}>+</Text>
        </Pressable>
      </View>
    </View>
  )
}
export default GuestScrnbb

