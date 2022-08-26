import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import { ActionTypes } from '../Contants';
import styles from '../Styles/GlobalStyle';

const Card = ({ item, navigation }) => {
  const dispatch = useDispatch();

  const onPressViewMore = (dataObject, payload) => {
    const keyName = Object.keys(dataObject)?.find(
      (key) => dataObject[key] === payload,
    );

    dispatch({
      type: ActionTypes.FETCH_DATA,
      payload: payload,
      keyName,
      navigation,
    });
  };

  return (
    <View style={styles.flatListStyle}>
      <View style={styles.flexRowStyle}>
        <View>
          {Object.keys(item)?.map((key, keyIndex) => (
            <Text key={keyIndex} style={styles.keyTextStyle}>
              {key?.toUpperCase()?.replace('_', ' ')}
            </Text>
          ))}
        </View>

        <View>
          {Object.values(item)?.map((value, valueIndex) => (
            <Text key={valueIndex} style={styles.keyTextStyle}>
              {typeof value !== 'object' ? (
                value?.toString()?.length > 20 ? (
                  value?.toString()?.substr(0, 20)?.toUpperCase() + '...'
                ) : (
                  value?.toString()?.toUpperCase()
                )
              ) : (
                <Text
                  onPress={() => onPressViewMore(item, value)}
                  style={styles.valueTextStyle}>
                  VIEW MORE
                </Text>
              )}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Card;
