import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import SignInWelcome from '../screens/authScreens/SignInWelcome';
import SignIn from '../screens/authScreens/SignIn';

const Auth = createStackNavigator();

const AuthStack = () => {
  return (
    <Auth.Navigator
      initialRouteName='SignInWelcome'
    >
      <Auth.Screen
        name="SignInWelcome" 
        options={{headerShown: false, ...TransitionPresets.RevealFromBottomAndroid,}}  
        component={SignInWelcome} 
      />
      <Auth.Screen 
        name="SignIn" 
        options={{headerShown: false, ...TransitionPresets.RevealFromBottomAndroid}}  
        component={SignIn} 
      />
    </Auth.Navigator>
  );
}

export default AuthStack;