import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {style} from '../Style';
import {FlatList} from 'react-native-gesture-handler';
import { Params, fetchPopularJob } from '../../../api/RapidApi';
import { useNavigation } from '@react-navigation/native';
import { PropStackDetail } from '../../navigation/Type';
import { NAME_NAVIGATION } from '../../common/Const';

export const PopularJob = () => {

const navigation = useNavigation<PropStackDetail>();

const params: Params = {
  query: 'java',
  page: '1',
  num_pages: '1'
}
 
//let dataApi = {}
const [dataApi,setDataApi] =  useState()



useEffect(() => {
    
// const exampleData = [
//  {employer_name:"Dice",
//  employer_logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlgydP7sElaJC9qPrtNHwBhyTMHYgii1RPWsy&s=0",
//  employer_website:null,
//  employer_company_type:"Information",
//  job_publisher:"LinkedIn",
//  job_id:"8yv3oA_2-UYAAAAAAAAAAA==",
//  job_employment_type:"CONTRACTOR",
//  job_title:"Web Developer - 6-month Contract - Houston Hybrid",
//  job_apply_link:"https://www.linkedin.com/jobs/view/web-developer-6-month-contract-houston-hybrid-at-dice-3624857671",
//  job_apply_is_direct:false,
//  job_apply_quality_score:0.5805,
//  job_description:"An established energy client of mine is looking for an experienced Web Developer to join their team on an initial 6-month contract. Starting 6/5, you will be working in an agile team to help develop a new set of web applications for their own system and sub vendors. This role is hybrid and you will be required to go in to the office 3 days p/w. Full-Stack Web Developer 6-month contract (likely extension) Houston - Hybrid working W2 - $70 - $75 p/h C2C - $80 - $90 p/h Starting 06/05 Technical requirements; JavaScript, (React OR Angular OR Vue), Node, HTML, CSSS, API (NO EMPLOYERS OR RECRUTIERS) Oscar Associates Limited (US) is acting as an Employment Business in relation to this vacancy. Web Developer - 6-month Contract - Houston Hybrid",
//  job_is_remote:true,
//  job_posted_at_timestamp:1685653019,
//  job_posted_at_datetime_utc:"2023-06-01T20:56:59.000Z",
//  job_city:"Houston",
//  job_state:"TX",
//  job_country:"US",
//  job_latitude:29.760427,
//  job_longitude:-95.369804,
//  job_benefits:null,
//  job_google_link:"https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=8yv3oA_2-UYAAAAAAAAAAA%3D%3D",
//  job_offer_expiration_datetime_utc:"2023-07-01T20:56:59.000Z",
//  job_offer_expiration_timestamp:1688245019,
//  job_required_experience:null,
//  job_required_skills:null,
//  job_required_education:null,
//  job_experience_in_place_of_education:false,
//  job_min_salary:null,
//  job_max_salary:null,
//  job_salary_currency:null,
//  job_salary_period:null,
//  job_highlights:null,
//  job_job_title:null,
//  job_posting_language:"en",
//  job_onet_soc:"15113400",
//  job_onet_job_zone:"3",
//  job_naics_code:"519130",
//  job_naics_name:"Internet Publishing and Broadcasting and Web Search Portals"}
// ]
//  setDataApi(exampleData)

  fetchPopularJob(params).then(data => {
    // dataApi={...data}
    setDataApi(data)
  
    })

}, []);

 
        


console.log('kiemtra',dataApi)


 

  const iconAvatar = require('../../../assets/images/kemal.jpg');


 const onPressItem = (item:any) =>{
navigation.push(NAME_NAVIGATION.DETAIL,item)

  }
  const renderItem = (item: any) => (
    <TouchableOpacity onPress={()=>onPressItem(item)} style={[style.mt16,style.ml24,style.ml8,style.mr8,style.containerItemPopular]}>
      <View style={[style.btn, style.bgLightGray]}>
        {/* <Image source={iconAvatar} style={style.icon}></Image> */}
        <Image source={{uri:item.employer_logo}} style={style.icon}></Image>
      </View>
      <Text style={[style.titleItemPopular, style.mt8]}>
       {item.employer_name}
      </Text>
      <Text numberOfLines={1} style={[style.mainJobTitle, style.mt16]}>{item.job_title}</Text>
      <Text style={style.colorGray}>{item.job_country}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={[style.mt16,style.ml8,style.mr8]}>
      <View style={style.containerPopular}>
        <Text>Popular jobs</Text>
        <Text>show all</Text>
      </View>
 
      <FlatList
      horizontal
        data={dataApi}
        renderItem={({item}) => renderItem(item)}></FlatList>
    </View>
  );
};
