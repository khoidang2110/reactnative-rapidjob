import {Image, Text, View} from 'react-native';
import React from 'react';
import {style} from '../Style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {PropStackDetail} from '../../navigation/Type';


export type propsPrams = {

  url:string,
  jobtitle:string,
  location:string,
  country:string,

}

export const Toolbar = (props:propsPrams) => {
  const navigation = useNavigation<PropStackDetail>();

  const iconBack = require('../../../assets/icons/left.png');
  const iconShare = require('../../../assets/icons/share.png');
  const logoCompany = require('../../../assets/images/kemal.jpg');
  const iconLocation = require('../../../assets/icons/location.png');
  const onBack = () => {
    navigation.pop();
  };

  return (
    <SafeAreaView style={[style.ml16, style.mr16]}>
      <View style={[style.toolbarContainer, style.mt16, style.mb16]}>
        <TouchableOpacity style={style.btn} onPress={onBack}>
          <Image source={iconBack} style={style.icon}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={style.btn}>
          <Image source={iconShare} style={style.icon}></Image>
        </TouchableOpacity>
      </View>
      <View style={[style.containerHeader, style.mt16]}>
        <Image source={{uri:props.url == null ? logoCompany : props.url}} style={style.logoCompany}></Image>
        <Text style={[style.titleJob, style.secondaryColor, style.mt16]}>
          {props.jobtitle}
        </Text>
        <View style={[style.mt16, style.containerLocationCompany]}>
          <Text style={[style.secondaryColor, style.fontBold]}>{props.location}/</Text>
          <Image source={iconLocation} style={style.icon16}></Image>
          <Text style={[style.secondaryColor]}>{props.country}</Text>
        </View>
      </View> 
    </SafeAreaView>
  );
};
