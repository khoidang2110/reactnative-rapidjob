import {Text, View} from 'react-native';
import React from 'react';
import { ToolBar } from './component/ToolBar';
import { Search } from './component/Search';
import { PopularJob } from './component/PopularJob';
import { NearBy } from './component/NearBy';

export const Homepage = () => {
  return (
    <View>
     <ToolBar/>
     <Search/>
     <PopularJob/>
     <NearBy/>
    </View>
  );
};
