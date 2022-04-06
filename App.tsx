import 'react-native-gesture-handler';
import React from 'react'
import { LogBox, StatusBar } from 'react-native'
import { colors } from './src/global'
import { TailwindProvider } from 'tailwind-rn';
import utilities from './tailwind.json';
import { useTailwind } from 'tailwind-rn';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
    'Non-serializable values were found in the navigation state',
    "Warning: Can't perform a React state update on an unmounted component",
  ]);
  return (
      <TailwindProvider utilities={utilities}>
        <StatusBar
          barStyle='light-content'
          backgroundColor={colors.statusbar}
        />
        <RootNavigator />
      </TailwindProvider>
  )
}

export default App