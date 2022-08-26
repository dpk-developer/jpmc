import { getStorage, setStorage } from './Storage';

export const dataGetHelper = (key, title, screen, navigation) => {
  getStorage(key)
    .then((result) => {
      if (result) {
        navigation.navigate(screen, {
          dataList: JSON.parse(result),
          title: title,
        });
      }
    })
    .catch((error) => console.error(`Caught Error in ${key}`, error));
};

export const dataSetHelper = (key, title, data, screen, navigation) => {
  setStorage(key, JSON.stringify(data));
  navigation.navigate(screen, {
    dataList: data,
    title: title,
  });
};
