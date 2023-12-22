// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const RootStackScreen = () => {
//   return (
//     <View>
//       <Text>RootStackScreen</Text>
//     </View>
//   )
// }

// export default RootStackScreen

// const styles = StyleSheet.create({})



import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';







const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator  screenOptions={{
                                            headerShown: false,
                                        }}>
        <RootStack.Screen name="SplashScreen" /* options={{ headerShown: false }} */ component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>     
    </RootStack.Navigator>
);

export default RootStackScreen;