import React from 'react';
import { View, FlatList } from 'react-native';

import styles from '../../Styles/GlobalStyle';
import { AppHeader, Card } from '../../Components';

const VehicleScreen = ({ navigation, route }) => {
  const { dataList, title } = route?.params;

  const renderItem = ({ item }) => {
    delete item?.url;
    delete item?.edited;
    delete item?.created;

    return <Card item={item} navigation={navigation} />;
  };

  return (
    <View style={styles.container}>
      <AppHeader title={title} />
      <FlatList
        data={dataList}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index?.toString()}
      />
    </View>
  );
};

export default VehicleScreen;
