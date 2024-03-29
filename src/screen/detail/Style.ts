import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  toolbarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ml16: {
    marginLeft: 16,
  },
  mr16: {
    marginRight: 16,
  },
  mt16: {
    marginTop: 16,
  },
  mb16: {
    marginBottom: 16,
  },
  btn: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#ebebf2',
  },
  logoCompany: {
    width: 100,
    height: 100,
  },
  titleJob: {
    fontSize: 24,
    fontWeight: '600',
  },
  secondaryColor: {
    color: '#2a204a',
  },
  fontBold: {
    fontWeight: '600',
  },
  containerHeader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLocationCompany: {
    flexDirection: 'row',
  },
  icon16: {
    width: 20,
    height: 20,
  },
  containerContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  p16: {
    padding: 16,
  },
  btnSelected: {
    backgroundColor: '#2f2650',
  },
  textSelected: {
    color: 'white',
  },
  containerItemConent: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
  },
  itemTitle: {
    color: '#2f2650',
    fontSize: 20,
    fontWeight: '500',
  },
  containerApplyForJob: {
    position:'absolute',
    bottom:0,
    flexDirection: 'row',
    backgroundColor:'white',
     width:'100%'
  },
  btnHeart: {
    borderRadius: 16,
    padding: 16,
    borderColor: '#ff7656',
    borderWidth:1
  },
  btnApplyForJob:{
    width:300,
    backgroundColor:'#ff7656',
    textAlign:'center',
    padding:16,
    borderRadius:16,
   flexGrow:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
