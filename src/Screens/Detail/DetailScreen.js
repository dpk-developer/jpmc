import React from 'react';
import { View, Text } from 'react-native';

import { useDispatch } from 'react-redux';

import { AppHeader } from '../../Components';
import { ActionTypes } from '../../Contants';
import styles from '../../Styles/GlobalStyle';

const DetailScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const { dataObject, title } = route?.params;

  const onPressViewMore = (payload) => {
    const keyName = Object.keys(dataObject)?.find(
      (key) => dataObject[key] === payload,
    );

    dispatch({
      type: ActionTypes.FETCH_DATA,
      payload: payload,
      keyName,
      navigation,
      title,
    });
  };

  return (
    <View style={styles.container}>
      <AppHeader title={title} />
      <View style={styles.flatListStyle}>
        <View style={styles.flexRowStyle}>
          <View>
            {[dataObject]?.map((planet, index) => {
              return Object.keys(planet)?.map((key, keyIndex) => (
                <Text key={keyIndex} style={styles.keyTextStyle}>
                  {key?.toUpperCase()?.replace('_', ' ')}
                </Text>
              ));
            })}
          </View>

          <View>
            {[dataObject]?.map((planet, index) => {
              return Object.values(planet)?.map((value, valueIndex) => (
                <Text key={valueIndex} style={styles.keyTextStyle}>
                  {typeof value !== 'object' ? (
                    value?.toUpperCase()
                  ) : (
                    <Text
                      onPress={() => onPressViewMore(value)}
                      style={styles.valueTextStyle}>
                      VIEW MORE
                    </Text>
                  )}
                </Text>
              ));
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailScreen;
