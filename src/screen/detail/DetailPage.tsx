import {Text, View} from 'react-native';
import React from 'react';
import { Toolbar } from './component/Toolbar';
import { Content } from './component/Content';
import { ApplyForJob } from './component/ApplyForJob';
import { useRoute } from '@react-navigation/native';
import { PropsRouteDetail } from '../navigation/Type';

export const DetailPage = () => {

const params = useRoute<PropsRouteDetail>().params

  return (
    <View style={{flex:1}}>
   <Toolbar url={params.employer_logo} country={params.job_country} jobtitle = {params.job_title} location={params.job_publisher} />
   <Content content={params.job_highlights}/>
   <ApplyForJob/>
    </View>
  );
};
