import React from 'react';
import { Icon, IconType, withBadge } from '@rneui/base';
import { View, Text } from 'react-native'
import { useTailwind } from 'tailwind-rn';
import { colors, parameters } from '../global';

const HomeHeader = () => {
  const tailwind = useTailwind();
  const BadgeIcon: any = withBadge(1)(Icon);
  return (
    <View style={[tailwind('flex-row bg-buttons justify-between'), {height: parameters.headerHeight}]}>
      <View style={[tailwind('items-center justify-center ml-6')]}>
        <Icon 
          type='material-community'
          name='menu'
          color={colors.cardbackground}
          size={32}
        />
      </View>

      <View style={tailwind('items-center justify-center')}>
        <Text style={tailwind('text-cardbackground text-3xl font-bold')}>Xpress Food</Text>
      </View>
      
      <View style={[tailwind('items-center justify-center mr-6')]}>
        <BadgeIcon 
          type="material-community"
          name='cart'
          size={35}
          color={colors.cardbackground}
        />
      </View>
    </View>
  )
}

export default HomeHeader