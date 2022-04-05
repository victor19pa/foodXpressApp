import React, { useRef, useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { useTailwind } from 'tailwind-rn';
import Header from '../../components/Header';
import * as Animatable from 'react-native-animatable';
import { Icon, Button, SocialIcon } from '@rneui/base';
import { colors } from '../../global';

const SignIn = () => {
  const tailwind = useTailwind();
  const [textInput2Focus, setTextInput2Focus] = useState(false);

  const txtInput1 = useRef(1);
  const txtInput2 = useRef(1);

  return (
    <View style={tailwind('h-full')}>
      <Header title='MY ACCOUNT' type='chevron-left' />
      <View style={[tailwind('ml-4 mt-3'),]}>
        <Text style={tailwind('text-buttons text-2xl font-bold')}>Sign-in</Text>
      </View>

      <View style={tailwind('items-center mt-6')}>
        <Text style={tailwind('text-grey3 text-xl')}>Please enter the email and password</Text>
        <Text style={tailwind('text-grey3 text-xl')}>registeres with your account</Text>
      </View>

      <View style={tailwind('mt-6 ')}>
        <View style={tailwind('')}>
          <TextInput
            style={[tailwind('mx-4 mb-4 border-CardComment rounded-xl pl-4'), { borderWidth: 1, }]}
            placeholder='Email'
            ref = {txtInput1}
          />
        </View>
        
        <View style={[tailwind('flex-row mx-4 pl-4 justify-between items-center content-center border-CardComment rounded-xl'), { borderWidth: 1 }]}>
          <Animatable.View animation={textInput2Focus ? '':'fadeInLeft'} duration={400}>
            <Icon
              name='lock'
              iconStyle={{ color: colors.grey3 }}
              type='material'
            />
          </Animatable.View>

          <TextInput
            style={{ width: '80%'}}
            placeholder='Password'
            ref={txtInput2}
            onFocus= { () => {
              setTextInput2Focus(false)
            }}
            onBlur={ () => {
              setTextInput2Focus(true)
            }}
          />
          <Animatable.View animation={textInput2Focus ? '':'fadeInLeft'} duration={400}>
            <Icon
              name='visibility-off'
              iconStyle={{ color: colors.grey3 }}
              type='material'
              style={tailwind('mr-4')}
            />
          </Animatable.View>
        </View>

      </View>

      <View style={tailwind('mx-4 my-6')}>
        <Button 
          title='SIGN IN'
          buttonStyle={[tailwind('bg-buttons content-center justify-center rounded-xl h-12 mx-4 '),  { }]}
          titleStyle={tailwind('text-white text-2xl font-bold items-center justify-center')}
        />
      </View>

      <View style={tailwind('items-center mt-4')}>
        <Text style={tailwind('text-grey3 text-xl underline')}>Forgot Password ?</Text>
      </View>

      <View style={tailwind('items-center mt-4 mb-8')}>
        <Text style={tailwind('text-black text-2xl')}>OR</Text>
      </View>

      <View style={tailwind('items-center mx-4 mt-4')}>
        <SocialIcon 
          title='Sign In With Facebook'
          button
          type='facebook'
          style={[tailwind('rounded-xl h-16 w-96'),]}
          onPress={ () => {}}
        />
      </View>
      <View style={tailwind('items-center mx-4 mt-4')}>
        <SocialIcon 
          title='Sign In With Google'
          button
          type='google'
          style={[tailwind('rounded-xl h-16 w-96'), {}]}
          onPress={ () => {}}
        />
      </View>

      <View style={tailwind('mx-4 mt-4')}>
        <Text style={tailwind('text-grey3 text-xl')}>New on XpressFood ?</Text>
      </View>

      <View style={tailwind('items-end mx-6')}>
        <Button 
          title='Create an account'
          buttonStyle={[tailwind('bg-white content-center justify-center rounded-xl h-12 px-4'), {borderColor: '#ff8c52', borderWidth: 1}]}
          titleStyle={tailwind('text-buttons text-xl font-bold items-center justify-center')}
        />
      </View>
    </View>
  )
}

export default SignIn