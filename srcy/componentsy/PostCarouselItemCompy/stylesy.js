// import { StyleSheet } from 'react—native';   //❌ `Em Dash (—) ` .....✅ `Hyphen (-)` .....That's where you are not getting vs code react native suggestions.
import { StyleSheet } from 'react-native';
const stylesbb = StyleSheet.create({
  
  containery:{  
    // If we give her we only going to see one element.
        // position:'absolute',
        // bottom:6,

    padding:5,
    height:120,
    
    // https://10015.io/tools/react-native-shadow-generator generated 'react native shadow generator'
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity:  0.21,
    shadowRadius: 8.19,
    elevation: 11
  },
  innerContainery:{
    flexDirection:'row',
    backgroundColor:'white',
    overflow:'hidden',
    borderRadius:15  
  },

  img:{ 
    height:'100%',
    aspectRatio:1,      // means width===height ...1/1 also can be writen there
    // borderRadius:20      // It actually cropped the image. and look weired baby own explore:
  },
  bedroms: {
    fontSize:16,
    marginVertical: 5,
                      // spacing from the top and bottom
    color: '#5b5b5b',

  },
  descrips: {
    fontSize:18,
  },

  prices:{
    fontSize:15,
    marginVertical: 8,

    // color:'black'
  },
  oldPrice:{
    textDecorationLine:'line-through',     // old Price number is cut style
    color: '#5b5b5b',

  },
  newPrice:{
    fontWeight:'bold'
  },
  totalPrice:{
    color: '#5b5b5b',
    textDecorationLine:'underline'
  },


})

export default stylesbb;
 
