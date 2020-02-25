import React from 'react';
import Amplify from 'aws-amplify';
import { Auth } from 'aws-amplify';
import { Button, Text, View } from 'react-native'
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

export default Scene = (props) => {
  const onPressSignIn = async () => {
    const user = await Auth.signIn('username4@email.com', 'password');
    console.log(user);
  }
  return (
    <View>
    <Button title="SIGN UP" onPress={() => {
      console.log('btn pressed');
      Auth.signUp({username: 'username4@email.com', password: 'password'}).then(data => {
        console.log('signUp then');
        console.log(data);
      }).catch(err => {
        console.log('signUp catch');
        console.log(err);
      });
    }}/>
    <Button title="SIGN IN" onPress={onPressSignIn}/>
    </View>
  );
}