import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Welcome, SignIn } from '../screens/authScreens/index'
import { Home } from '../screens';

const Auth = createStackNavigator();

const AuthStack = () => {
  return (
    <Auth.Navigator
      initialRouteName='SignInWelcome'
    >
      <Auth.Screen
        name="SignInWelcome"
        options={{ headerShown: false, ...TransitionPresets.RevealFromBottomAndroid, }}
        component={Welcome}
      />
      <Auth.Screen
        name="SignIn"
        options={{ headerShown: false, ...TransitionPresets.RevealFromBottomAndroid }}
        component={SignIn}
      />
      <Auth.Screen
        name="HomeScreen"
        options={{ headerShown: false, ...TransitionPresets.RevealFromBottomAndroid }}
        component={Home}
      />
    </Auth.Navigator>
  );
}

export default AuthStack;