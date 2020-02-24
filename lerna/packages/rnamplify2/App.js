import React from 'react';
import Amplify from 'aws-amplify';
import { Auth } from 'aws-amplify';
import { Button, Text } from 'react-native'
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

export default Scene = (props) => {
  return (
    <Button title="SIGN UP" onPress={() => {
      console.log('btn pressed');
      Auth.signUp({username: 'username2@email.com', password: 'password'}).then(data => {
        console.log('signUp then');
        console.log(data);
      }).catch(err => {
        console.log('signUp catch');
        console.log(err);
      });
    }}/>
  );
}