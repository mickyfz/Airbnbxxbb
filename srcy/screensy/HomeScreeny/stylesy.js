 import { StyleSheet, Dimensions } from 'react-native' ;

const stylesbb = StyleSheet.create({
  imgy: { 
    // opacity:0.3,
    width:'100%',
    height:500,
    justifyContent:'center',        //Moving the text on the horizontal position.
    // resizeMode:'cover',     
                              // 'cover' is default property in react native.... idk why he given 🤡
    // zIndex:10
  },
  // imagebbxx:{
  //   opacity:0.3
  // },
  titly: {
    fontSize:80,
    fontWeight:'bold',
    color:'white',
    // width:'70%',                        // Now, two words in two line.... This is how he did, but I don't like it. because it did not work on Android or it may not work on different mobile
    marginLeft:25,
   
    //   borderWidth:5,
    // borderColor:'black'
  },
  btn:{
    backgroundColor:'white',
    width:220,
    height:40,          // Please give height so that vertically it looks big.
    marginLeft:25,
    marginTop:25,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
  },
  
  btnTxt:{
    fontWeight:'bold',
    fontSize:20,
  
    // own explore:  NOTE: justifyContent and alignItems won't work on himself it will be applied on it's  child. 
    // justifyContent:'center',
    // alignItems:'center',

  },
  
 
  searchBtn:{

    backgroundColor: '#fff',
    height: 60,
    width: Dimensions.get('screen').width - 20,
    borderRadius: 30,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    // position: 'relative',
    top: 20,
    zIndex: 100,
  


     /*    flexDirection:'row', 
    position:'absolute',        // After giving position absolute, he won't say anything 
    zIndex:100,
    top:50,
    backgroundColor:'white',
    height:60 */
  },
 
  searchBtnTxt:{
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft:9

  }


});

export default stylesbb;



/* 
import { StyleSheet } from 'react—native' ;

const stylesbb = StyleSheet.create({
  imgbb:{
    width:'100%',
    height:400,
    ma
  },
  titlebb:{
    font
  },
//   imgbb:{},

})
export default stylesbb;


 */