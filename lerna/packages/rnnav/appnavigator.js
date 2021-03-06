import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SidebarComponent from './sideBarComponent';

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

const DrawOneScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Draw One Screen</Text>
    </View>
  );
}

const DrawTwoScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Draw Two Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const StackAppNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Detail" component={DetailScreen}/>
      </Stack.Navigator>
    );
}

const DrawerAppNavigator = () => {
  return (
    <Drawer.Navigator drawerPosition='left' drawerContent={SidebarComponent}>
      <Drawer.Screen name="Stack" component={StackAppNavigator}/>
      <Drawer.Screen name="DrawOne" component={DrawOneScreen}/>
      <Drawer.Screen name="DrawTwo" component={DrawTwoScreen}/>
    </Drawer.Navigator>
  )
}

// export default StackAppNavigator;
export default DrawerAppNavigator;