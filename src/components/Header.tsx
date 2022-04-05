import { Icon } from '@rneui/base';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors, parameters } from '../global';
import { useTailwind } from 'tailwind-rn';

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  const tailwind = useTailwind();
  return (
    <View style={[tailwind('flex-row items-center bg-buttons'), {height: parameters.headerHeight}]}>
      <View style={tailwind('ml-4')}>
        <Icon
          name="arrow-left"
          size={28}
          color={colors.cardbackground}
          type="material-community"
          onPress={() => { }}
        />
      </View>
      <View style={tailwind('ml-6')}>
        <Text style={[tailwind('text-2xl font-bold text-white')]}>{title}</Text>
      </View>
    </View>
  )
}

export default Header