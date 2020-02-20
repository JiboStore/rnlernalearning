import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => props.navigation.navigate('Detail')} title='Go Detail'/>
    </View>
  );
}

const DetailScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Detail" component={DetailScreen}/>
      </Stack.Navigator>
    );
}

export default AppNavigator;