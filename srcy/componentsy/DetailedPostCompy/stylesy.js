// import { StyleSheet } from 'react—native';   //❌ `Em Dash (—) ` .....✅ `Hyphen (-)` .....That's where you are not getting vs code react native suggestions.
import { StyleSheet } from 'react-native';
const stylesbb = StyleSheet.create({
  containery:{
    margin:20,
  },
  img:{ 
    width:'100%',
    aspectRatio:3/2,
                      // Instead of giving height, we are giving expect ratio Because height will change based on the mobile screen As we width 100 %.
    borderRadius:20
  },
  bedroms: {
    fontSize:16,
    marginVertical: 10,
                      // spacing from the top and bottom
    color: '#5b5b5b',

  },
  descrips: {
    fontSize:25,
    lineHeight: 32,       // specify the height of each line of text. It determines the amount of vertical space between lines of text within a <Text> component

  },

  prices:{
    fontSize:25,
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
  longDescrips: {
    fontSize:20,
    lineHeight: 32,       
    marginVertical:20

  },


})

export default stylesbb;
 
