import { Icon } from '@rneui/base';
import React, { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useTailwind } from 'tailwind-rn';
import { HomeHeader } from '../components';
import { colors } from '../global';

const Home = () => {
  const tailwind = useTailwind();
  const [delivery, setDelivery] = useState(true);

  return (
    <View style={tailwind('flex-1')}>
      <HomeHeader />
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={true}>
        <>
          <View style={[tailwind('mt-6 flex-row justify-evenly')]}>
            <TouchableOpacity
              onPress={() => {
                setDelivery(true);
              }}
            >
              <View style={[tailwind('px-6 py-1 rounded-xl'), delivery ? tailwind('bg-buttons') : tailwind('bg-grey5')]}>
                <Text style={[tailwind('text-xl'), delivery ? tailwind('text-white') : tailwind('text-black')]}>Delivery</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setDelivery(false);
              }}
            >
              <View style={[tailwind('px-6 py-1 rounded-xl'), delivery ? tailwind('bg-grey4') : tailwind('bg-buttons')]}>
                <Text style={[tailwind('text-xl'), delivery ? tailwind('text-black') : tailwind('text-white')]}>Pick Up</Text>
              </View>
            </TouchableOpacity>
          </View>
        </>

        <View style={[tailwind('flex-row items-center justify-evenly mx-6 my-4')]}>
          <View style={[tailwind('flex-row bg-grey5 rounded-2xl py-2 justify-between px-4')]}>
            <View style={[tailwind('flex-row items-center pl-4')]}>
              <Icon
                type='material-community'
                name='map-marker'
                color={colors.grey1}
                size={26}
              />
              <Text style={[tailwind('ml-1 text-black')]}>22 Tegucigalpa 2av</Text>
            </View>
            <View style={[tailwind('flex-row items-center px-2 mr-6 ml-2 bg-cardbackground rounded-xl')]}>
              <Icon
                type='material-community'
                name='clock-time-three'
                color={colors.grey1}
                size={26}
              />
              <Text style={[tailwind('ml-1 text-black')]}>Now</Text>
            </View>
          </View>
          <View style={[tailwind('')]}>
            <Icon
              type='material-community'
              name='tune'
              color={colors.grey1}
              size={26}
            />
          </View>


        </View>
        <View style={[tailwind('bg-grey5 px-1')]}>
          <Text style={[tailwind('text-grey1 text-3xl font-bold pl-4')]}>Categories</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home