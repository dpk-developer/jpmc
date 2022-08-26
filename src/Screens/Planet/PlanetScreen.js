import React, { useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import styles from './Style';
import { AppHeader } from '../../Components';
import { ActionTypes, ApiEndPoints, NavigationStrings } from '../../Contants';

const PlanetScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const { dataList } = useSelector(
    (state) => ({
      dataList: state?.dataReducer?.dataList,
    }),
    shallowEqual,
  );

  useEffect(() => {
    dispatch({ type: ActionTypes.FETCH_DATA, payload: 'planets' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onPressName = (dataObject) => {
    delete dataObject?.url;
    delete dataObject?.edited;
    delete dataObject?.created;
    navigation.navigate(NavigationStrings.DETAIL_SCREEN, {
      dataObject,
      title: dataObject?.name,
    });
  };

  const onPressBack = () => {
    if (dataList?.previous) {
      const urlEndPoint = dataList?.previous?.replace(
        ApiEndPoints.BASE_URL,
        '',
      );
      dispatch({
        type: ActionTypes.FETCH_DATA,
        payload: urlEndPoint,
        title: urlEndPoint,
      });
    }
  };

  const onPressNext = () => {
    if (dataList?.next) {
      const urlEndPoint = dataList?.next?.replace(ApiEndPoints.BASE_URL, '');
      dispatch({
        type: ActionTypes.FETCH_DATA,
        payload: urlEndPoint,
        title: urlEndPoint,
      });
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.planetNameStyle}
      onPress={() => onPressName(item)}>
      <Text style={styles.planetNameStyle}>{item?.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <AppHeader title={'Planets'} />
      <FlatList
        data={dataList?.results}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index?.toString()}
      />

      <View style={styles.flexRowStyle}>
        <TouchableOpacity
          disabled={dataList?.previous ? false : true}
          style={
            dataList?.previous ? styles.arrowStyle : styles.disableArrowStyle
          }
          onPress={onPressBack}>
          <Text style={styles.arrowTextStyle}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={dataList?.next ? false : true}
          style={dataList?.next ? styles.arrowStyle : styles.disableArrowStyle}
          onPress={onPressNext}>
          <Text style={styles.arrowTextStyle}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlanetScreen;
