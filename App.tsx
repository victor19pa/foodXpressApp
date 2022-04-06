import React from 'react'
import { View, StatusBar, StyleSheet, ScrollView, SafeAreaView, Text } from 'react-native'
import { colors } from './src/global'
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import { useTailwind } from 'tailwind-rn';
import Header from './src/components/Header';
import SignIn from './src/screens/authScreens/SignIn';
import SignInWelcome from './src/screens/authScreens/SignInWelcome';

const App = () => {
  const tailwind = useTailwind();

  return (
    // <SafeAreaView style={tailwind('flex-1')}>
      <TailwindProvider utilities={utilities}>

        <StatusBar
          barStyle='light-content'
          backgroundColor={colors.statusbar}
        />
        {/* <SignIn /> */}
        <SignInWelcome/>

      </TailwindProvider>
    // </SafeAreaView>

  )
}

export default App