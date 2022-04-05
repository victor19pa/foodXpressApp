import React from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import { Header } from './src/components'
import { colors } from './src/global'
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import {useTailwind} from 'tailwind-rn';

const App = () => {
  const tailwind = useTailwind();

  return (
    <TailwindProvider utilities={utilities}>
      <View style={tailwind('flex-1')}>
        <StatusBar
          barStyle='light-content'
          backgroundColor={colors.statusbar}
        />
        <Header title='MY ACCOUNT' />
      </View>
    </TailwindProvider>
  )
}

export default App