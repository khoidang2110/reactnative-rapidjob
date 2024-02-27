import {Image, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { style } from '../Style';

export const ApplyForJob = () => {
  const iconHeart = require('../../../assets/icons/heart-ol.png')

  return (
    <View style={[style.containerApplyForJob,style.p16]}>
      <TouchableOpacity style={style.btnHeart}>
        <Image source={iconHeart} style={style.icon16}/>
      </TouchableOpacity>

      <TouchableOpacity style={[style.btnApplyForJob,style.ml16]}>
        <Text style={style.textSelected}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
};
