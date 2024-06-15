import React from "react";
import { View, Pressable, Text } from "react-native";
// import { Auth } from 'aws-amplify';

// how we can do ... It is already given on their official page https://docs.amplify.aws/gen1/react-native/start/getting-started/auth/#add-the-amplify-ui-authenticator-component 
import {useAuthenticator  } from '@aws-amplify/ui-react-native';

const ProfileScreenbb = (props) => {

    //his code won't work baby
  /* const logoutbb = () => {
    Auth.signOut();
  }
 */

  // retrieves only the current value of 'user' from 'useAuthenticator'
const userSelectorbb = (context) => [context.user];
// const { user, logoutbb } = useAuthenticator(userSelectorbb);
            // NOTE: It won't work. You must need to give name 'signOut' own explore:
const { user, signOut } = useAuthenticator(userSelectorbb);
 
  return (
    <View style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello, <Text style={{fontWeight:'bold',fontSize:20}}> {user.username}! </Text>  Click the below button to sign out!</Text>
            {/* own explore: he didn't put it.... Will actual credit goes to the documentation?  */}
      <Pressable
        // onPress={logoutbb}
        onPress={signOut}
        style={{
        width: '100%',
        height: 40,
        backgroundColor: '#c3c3c3',
        justifyContent: 'center', alignItems: 'center'
      }}>
        <Text>Log out</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreenbb;
