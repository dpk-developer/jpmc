import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { Provider } from 'react-redux';

import Store from './src/Redux/Store';
import MainStack from './src/Stacks/MainStack';

const App = () => {
  return (
    <Provider store={Store}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <MainStack />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default App;
