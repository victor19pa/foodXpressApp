import React from 'react'
import { Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn';
import { HomeHeader } from '../components';

const Home = () => {
  const tailwind = useTailwind();

  return (
    <View style={tailwind('flex-1')}>
      <HomeHeader/>
    </View>
  )
}

export default Home