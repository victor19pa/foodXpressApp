import { Icon } from '@rneui/base';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors, parameters } from '../global';

interface Props {
  title: string;
}

const Header = ({ title }: Props) => {
  return (
    <View style={styles.header}>
      <View style={{ marginLeft: 20 }}>
        <Icon
          name="arrow-left"
          size={28}
          color={colors.cardbackground}
          type="material-community"
          onPress={() => { }}
        />
      </View>
      <View style={{ marginLeft: 30 }}>
        <Text style={styles.headerTxt}>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    backgroundColor: colors.buttons,
    height: parameters.headerHeight,
    alignItems: 'center',
  },
  headerTxt: {
    color: colors.headerTxt,
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Header