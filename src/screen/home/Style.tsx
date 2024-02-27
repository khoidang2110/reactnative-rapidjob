import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  
    ml8:{
marginLeft:8
    },
    mr8:{
marginRight:8
    },
    mt16:{
marginTop:16
    }
    ,
    mt8:{
marginTop:8
    },
    ml24:{
marginLeft:24
    },
  containerToolBar: {
    padding: 16,
  },
  toolbar: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    height: 24,
    width: 24,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: 'red',
  },
  subTitle: {
    marginTop: 16,
    fontSize: 22,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  //Search
  containerSearch: {
    flexDirection: 'row',
  },
  inputSearch: {
    flexGrow: 1,
    flexShrink:1,
    borderRadius:8,
    backgroundColor:"#f0eff6",
    padding:8
  },

  btn: {
    flexGrow:0,
    width: 42,
    height: 42,
    padding: 8,
    borderRadius: 12,
    backgroundColor: '#f07869',
  },
  //Filter
  containerFilter:{
    flexDirection:"row"
  },
  btnFilter:{
    borderWidth:1,
    borderColor:"black",
    borderRadius:16,
    paddingHorizontal:8,
    paddingVertical:4,
    marginLeft:8,
    marginTop:8
  },
  visible:{
    borderColor:"#ccc",
    

  },
  textVisible:{
    color:"#ccc"
  },
  //Popular job
  containerPopular:{
    flexDirection:'row',
    justifyContent:"space-between",
  },
  containerItemPopular:{
    width:250
  },
  titlePopular:{
    fontSize:20
  },
  titleItemPopular:{
    fontSize:16,
    color:"#ccc"
  },
  mainJobTitle:{
    fontSize:20,
    
  },
  colorGray:{
    color:"#ccc"
  },
 bgLightGray:{
    backgroundColor:"#f0eff6"
  },
  //Nearby
  containerNearby:{
    flexDirection:'row',
    justifyContent:"space-between",
  },
  titleNearby:{
    fontSize:20
  },
  ContainerItem:{
flexDirection:"row",
alignItems:'center'
  },
titleItemNearby:{
  fontSize:16,
  fontWeight:'500'
}
});
