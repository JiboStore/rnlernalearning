import React from 'react'
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator()

const SideStackOneScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SideStackOneScreen</Text>
        </View>
    );
}

const SideStackTwoScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SideStackTwoScreen</Text>
        </View>
    );
}

const SideStackThreeScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SideStackThreeScreen</Text>
        </View>
    );
}

const SideStackFourScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SideStackFourScreen</Text>
        </View>
    );
}

const SideStackFiveScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>SideStackFiveScreen</Text>
        </View>
    );
}

const SideMenu = (props) => {

    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator headerMode={'float'} screenOptions={{
                headerStyle: {backgroundColor: 'black'},
                headerTitleStyle: {color: 'white'},
                headerTintColor: 'aqua',
            }} initialRouteName="SideStackOne">
                <Stack.Screen name="SideStackOne" component={SideStackOneScreen} options={{title: "SideStackOneTitle"}}/>
                <Stack.Screen name="SideStackTwo" component={SideStackTwoScreen} options={{title: "SideStackTwoTitle"}}/>
                <Stack.Screen name="SideStackThree" component={SideStackThreeScreen} options={{title: "SideStackThreeTitle"}}/>
                <Stack.Screen name="SideStackFour" component={SideStackFourScreen} options={{title: "SideStackFourTitle"}}/>
                <Stack.Screen name="SideStackFive" component={SideStackFiveScreen} options={{title: "SideStackFiveTitle"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default (props) => {
    return(<SideMenu {...props}/>)
}