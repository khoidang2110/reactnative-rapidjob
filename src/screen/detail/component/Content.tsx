import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {style} from '../Style';

export type propsConent = {
  content: {
    Qualifications?: [];
    Responsibilities?: [];
    Benefits?: [];
  };
};
enum tabSelected {
  DESC = 'Qualifications',
  COMPANY = 'Responsibilities',
  REVIEW = 'Benefits',
}

export const Content = (props: propsConent) => {
  const [btnSelected, setBtnSelected] = useState(tabSelected.DESC);

  const jobHightLight = props.content;
  console.log("job",jobHightLight)
  const [dataContent, setDataContent] = useState([]);

  const onPress = (value: tabSelected) => {
    setBtnSelected(value);
    switch (value) {
      case tabSelected.DESC:
        setDataContent(jobHightLight.Qualifications ?? []);
        break;
      case tabSelected.COMPANY:
        setDataContent(jobHightLight.Responsibilities ?? []);
        break;
      case tabSelected.REVIEW:
        setDataContent(jobHightLight.Benefits ?? []);
        break;
    }
  };

  return (
    <ScrollView style={style.mt16}>
      <View style={style.containerContent}>
        <TouchableOpacity
          style={[
            style.btn,
            style.p16,
            btnSelected === 'Qualifications' ? style.btnSelected : null,
          ]}
          onPress={() => onPress(tabSelected.DESC)}>
          <Text
            style={btnSelected == 'Qualifications' ? style.textSelected : null}>
            Description
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            style.btn,
            style.p16,
            btnSelected === 'Responsibilities' ? style.btnSelected : null,
          ]}
          onPress={() => onPress(tabSelected.COMPANY)}>
          <Text style={btnSelected == 'Responsibilities' ? style.textSelected : null}>
            Company
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            style.btn,
            style.p16,
            btnSelected === 'Benefits' ? style.btnSelected : null,
          ]}
          onPress={() => onPress(tabSelected.REVIEW)}>
          <Text style={btnSelected == 'Benefits' ? style.textSelected : null}>
            Reviews
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[style.containerItemConent, style.mt16, style.ml16, style.mr16]}>
        <Text style={[style.itemTitle, style.mb16]}>{btnSelected}</Text>

        {dataContent.map((value,index) => (
          <Text key={index}>{value}</Text>
        ))}
      </View>
    </ScrollView>
  );
};
