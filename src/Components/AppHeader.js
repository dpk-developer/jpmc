import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AppHeader = ({ title }) => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.textStyle}>{title?.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  textStyle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AppHeader;
