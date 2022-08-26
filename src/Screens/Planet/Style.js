import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  flexRowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  arrowTextStyle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  arrowStyle: {
    width: '49.5%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  disableArrowStyle: {
    width: '49.5%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  planetNameStyle: {
    flex: 1,
    margin: 8,
    padding: 8,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'white',
  },
});

export default styles;
