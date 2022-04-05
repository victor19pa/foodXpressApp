import React from 'react'
import { View, StatusBar, StyleSheet } from 'react-native'
import { Header } from './src/components'
import { colors } from './src/global'

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor={colors.statusbar}
      />
      <Header title='MY ACCOUNT' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App