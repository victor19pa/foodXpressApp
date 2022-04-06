import { Button } from '@rneui/base';
import React from 'react'
import { Image, Text, View } from 'react-native';
import Swiper from 'react-native-swiper';
import { useTailwind } from 'tailwind-rn';

const SignInWelcome = ({navigation}: any) => {
  const tailwind = useTailwind();  
  
  return (
    <View style={tailwind('flex-1')}>
      <View style={[tailwind('items-center pt-4 flex-1 mt-12'),]}>
        <Text style={[tailwind('text-3xl text-buttons font-bold')]}> DISCOVER RESTAURANTS</Text>
        <Text style={[tailwind('text-3xl text-buttons font-bold')]}> IN YOUR AREA</Text>
      </View>

      <View style={[tailwind('justify-center items-center pt-32'), { flex: 2, }]}>
        <Swiper autoplay={true}>
          <View style={[tailwind('flex-1 mt-4 items-center justify-center'),]}>
            <Image
              source={{ uri: 'https://cdn.pixabay.com/photo/2016/07/31/18/00/chicken-1559579_960_720.jpg' }}
              style={[tailwind('h-full w-full'),]}
            />
          </View>

          <View style={[tailwind('flex-1 mt-4 items-center justify-center'),]}>
            <Image
              source={{ uri: 'https://cdn.pixabay.com/photo/2017/02/15/15/17/meal-2069021_960_720.jpg' }}
              style={[tailwind('h-full w-full'),]}
            />
          </View>
          <View style={[tailwind('flex-1 mt-4 items-center justify-center'),]}>
            <Image
              source={{ uri: 'https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_960_720.jpg' }}
              style={[tailwind('h-full w-full'),]}
            />
          </View>
        </Swiper>
      </View>
      <View style={[tailwind('justify-end mb-6'), { flex: 3 }]}>
        <View style={tailwind('mx-4 my-6')}>
          <Button
            title='SIGN IN'
            buttonStyle={[tailwind('bg-buttons content-center justify-center rounded-xl h-12'), {}]}
            titleStyle={tailwind('text-white text-2xl font-bold items-center justify-center')}
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
        <View style={tailwind('mx-4')}>
          <Button
            title='CREATE AN ACCOUNT'
            buttonStyle={[tailwind('bg-white content-center justify-center rounded-xl h-12 px-4'), { borderColor: '#ff8c52', borderWidth: 1 }]}
            titleStyle={tailwind('text-buttons text-xl font-bold items-center justify-center')}
          />
        </View>
      </View>
    </View>
  )
}

export default SignInWelcome