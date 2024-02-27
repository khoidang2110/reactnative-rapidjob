import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import {style} from '../Style';
import {TextInput} from 'react-native-gesture-handler';

export const Search = () => {
  const iconSearch = require('../../../assets/icons/search.png');
  var contentSearch = [
    
      {
        title: 'Full-time',
        isCheck: true,
      },
      {
        title: 'Part-time',
        isCheck: false,
      },
      {
        title: 'Contractor',
        isCheck: false,
      },
    
  ]
  const [filterContent,setFilterContent]=useState(contentSearch);
 
const onPressSearchItem = (indexSelected:number)=>{
const newContentSearch = contentSearch.map((item,index)=>{
  if(index==indexSelected){
    item.isCheck=true
  }else{
    item.isCheck=false
  }
  return item
})
setFilterContent(newContentSearch)
}
  const renderFilter = () =>
    filterContent.map((item, index) => (
      <TouchableOpacity
        style={[style.btnFilter, item.isCheck ? null : style.visible]}
        key={index}
        onPress={()=>onPressSearchItem(index)}>
        <Text style={item.isCheck ? null : style.textVisible}>
          {item.title}
        </Text>
      </TouchableOpacity>
    ));

  return (
    <View>
      {/* Search */}
      <View style={style.containerSearch}>
        <TextInput
          style={[style.inputSearch, style.ml8, style.mr8]}
          placeholder="where are you looking for"
        />
        <TouchableOpacity style={style.btn}>
          <Image source={iconSearch} style={style.icon}></Image>
        </TouchableOpacity>
      </View>
      {/* //Filter */}
      <View style={style.containerFilter}>
        {renderFilter()}
        {/* <TouchableOpacity style={style.btnFilter}>
          <Text>Full-time</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[style.btnFilter, style.visible]}>
          <Text style={style.textVisible}>Part-time</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[style.btnFilter, style.visible]}>
          <Text style={style.textVisible}> Contactor</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};
