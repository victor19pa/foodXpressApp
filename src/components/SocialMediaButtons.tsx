import { SocialIcon } from '@rneui/base';
import { SocialMediaType } from '@rneui/themed';
import React from 'react'
import { View } from 'react-native'

interface Props {
  title: string;
  type: SocialMediaType | undefined;
  viewStyle: any;
  style: any;
}


const SocialMediaButtons = ({ title, type, viewStyle, style }: Props) => {
  
  return (
    <View style={viewStyle}>
      <SocialIcon
        title={title}
        button
        type={type}
        style={style}
        onPress={() => { }}
      />
    </View>
  )
}

export default SocialMediaButtons