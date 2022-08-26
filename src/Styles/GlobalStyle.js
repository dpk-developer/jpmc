import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  flatListStyle: {
    backgroundColor: 'white',
    margin: 10,
  },
  keyTextStyle: {
    height: 20,
    margin: 10,
    color: 'black',
    fontWeight: '500',
  },
  valueTextStyle: {
    color: 'orange',
    fontWeight: 'bold',
  },
  flexRowStyle: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  viewMoreBtnStyle: {
    justifyContent: 'center',
  },
});

export default styles;
