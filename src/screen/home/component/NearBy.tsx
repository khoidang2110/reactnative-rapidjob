import {Image, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {style} from '../Style';
import {FlatList} from 'react-native-gesture-handler';
import { Params, fetchPopularJob } from '../../../api/RapidApi';

export const NearBy = () => {


  const params: Params = {
    query: 'react',
    page: '1',
    num_pages: '2'
  }


  const [dataApi,setDataApi] =  useState()



useEffect(() => {
    

  fetchPopularJob(params).then(data => {
    // dataApi={...data}
    setDataApi(data)
  
     })
}, []);

 
        


console.log('kiemtra',dataApi)

  const arrayItems = [
    {
      image: require('../../../assets/images/kemal.jpg'),
      title: 'React Developer',
     type: 'Fulltime',
     
    },
    {
      image: require('../../../assets/images/kemal.jpg'),
      title: 'Java Developer',
     type: 'Part-time',
     
    },
    {
      image: require('../../../assets/images/kemal.jpg'),
      title: 'NodeJS Developer',
     type: 'Contractor',
     
    }
  ];

  const iconAvatar = require('../../../assets/images/kemal.jpg');

  const renderItem = (item: any) => (
    <View style={[style.ContainerItem,style.mt16]}>
    <View style={[style.btn,style.bgLightGray]}>
      <Image source={iconAvatar} style={style.icon} />
      </View>
      <View style={[style.ml8]}>
        <Text style={style.titleItemNearby}>{item.job_title}</Text>
        <Text style={style.mt8}>{item.location}</Text>
   
    </View>
  </View>
  );
  return (
    <View style={[style.mt16, style.ml8, style.mr8]}>
      <View style={[style.containerNearby, style.mt16]}>
        <Text style={style.titleNearby}>Nearby jobs</Text>
        <Text>show all</Text>
      </View>
<FlatList 
data={dataApi}
renderItem={({item})=>  renderItem(item)}
>

</FlatList>

    </View>
  );
};
