import {Image, Text, View} from 'react-native';
import React from 'react';
import {style} from '../Style';

export const ToolBar = () => {
  const iconMenu = require('../../../assets/icons/menu.png');
  const iconAvatar = require('../../../assets/images/kemal.jpg');
  return (
    <View style={style.containerToolBar}>
      <View style={style.toolbar}>
        <Image source={iconMenu} style={style.icon} />

        <Image source={iconAvatar} style={[style.icon, style.avatar]} />
      </View>
      <View>
        <Text style={style.subTitle}>Hello Adriand</Text>
        <Text style={style.title}>Find your perfect job</Text>
      </View>
    </View>
  );
};
