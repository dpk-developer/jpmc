import { takeLatest, put } from 'redux-saga/effects';

import NetInfo from '@react-native-community/netinfo';

import {
  ActionTypes,
  ApiEndPoints,
  AsyncStrings,
  NavigationStrings,
} from '../../Contants';
import Store from '../Store';
import { getStorage, setStorage } from '../../Helpers/Storage';
import { dataGetHelper, dataSetHelper } from '../../Helpers/Helper';

function* fetchApi({ type, payload, keyName, navigation, title }) {
  try {
    if (typeof payload === 'string') {
      NetInfo.addEventListener(async (state) => {
        if (!state.isConnected && !state.isInternetReachable) {
          getStorage(`${title}-${AsyncStrings.PLANET}`)
            .then((result) => {
              if (result) {
                Store.dispatch({
                  type: ActionTypes.FETCH_DATA_SUCCESS,
                  payload: JSON.parse(result),
                });
              }
            })
            .catch((error) =>
              console.error(`Caught Error in ${AsyncStrings.PLANET}`, error),
            );
        } else if (state.isConnected && state.isInternetReachable) {
          const response = await fetch(ApiEndPoints.BASE_URL + payload);
          const result = await response.json();
          setStorage(`${title}-${AsyncStrings.PLANET}`, JSON.stringify(result));

          Store.dispatch({
            type: ActionTypes.FETCH_DATA_SUCCESS,
            payload: result,
          });
        }
      });
    } else {
      NetInfo.addEventListener(async (state) => {
        if (!state.isConnected && !state.isInternetReachable) {
          if (keyName === 'films') {
            dataGetHelper(
              `${title}-${AsyncStrings.FILM}`,
              keyName,
              NavigationStrings.FILM_SCREEN,
              navigation,
            );
          } else if (keyName === 'pilots') {
            dataGetHelper(
              `${title}-${AsyncStrings.PILOT}`,
              keyName,
              NavigationStrings.PILOT_SCREEN,
              navigation,
            );
          } else if (keyName === 'details') {
            dataGetHelper(
              `${title}-${AsyncStrings.DETAIL}`,
              keyName,
              NavigationStrings.DETAIL_SCREEN,
              navigation,
            );
          } else if (keyName === 'species') {
            dataGetHelper(
              `${title}-${AsyncStrings.SPECIE}`,
              keyName,
              NavigationStrings.SPECIE_SCREEN,
              navigation,
            );
          } else if (keyName === 'vehicles') {
            dataGetHelper(
              `${title}-${AsyncStrings.VEHICLE}`,
              keyName,
              NavigationStrings.VEHICLE_SCREEN,
              navigation,
            );
          } else if (keyName === 'starship') {
            dataGetHelper(
              `${title}-${AsyncStrings.STARSHIP}`,
              keyName,
              NavigationStrings.STARSHIP_SCREEN,
              navigation,
            );
          } else if (keyName === 'residents') {
            dataGetHelper(
              `${title}-${AsyncStrings.RESIDENT}`,
              keyName,
              NavigationStrings.RESIDENT_SCREEN,
              navigation,
            );
          } else if (keyName === 'characters') {
            dataGetHelper(
              `${title}-${AsyncStrings.CHARACTER}`,
              keyName,
              NavigationStrings.CHARACTER_SCREEN,
              navigation,
            );
          }
        } else if (state.isConnected && state.isInternetReachable) {
          const fetchUrls = await Promise.all(
            payload?.map((url) => fetch(url)),
          );
          const dataPromises = fetchUrls?.map((fetchUrl) => fetchUrl?.json());
          const finalData = await Promise.all(dataPromises);

          if (keyName === 'films') {
            dataSetHelper(
              `${title}-${AsyncStrings.FILM}`,
              keyName,
              finalData,
              NavigationStrings.FILM_SCREEN,
              navigation,
            );
          } else if (keyName === 'pilots') {
            dataSetHelper(
              `${title}-${AsyncStrings.PILOT}`,
              keyName,
              finalData,
              NavigationStrings.PILOT_SCREEN,
              navigation,
            );
          } else if (keyName === 'details') {
            dataSetHelper(
              `${title}-${AsyncStrings.DETAIL}`,
              keyName,
              finalData,
              NavigationStrings.DETAIL_SCREEN,
              navigation,
            );
          } else if (keyName === 'species') {
            dataSetHelper(
              `${title}-${AsyncStrings.SPECIE}`,
              keyName,
              finalData,
              NavigationStrings.SPECIE_SCREEN,
              navigation,
            );
          } else if (keyName === 'vehicles') {
            dataSetHelper(
              `${title}-${AsyncStrings.VEHICLE}`,
              keyName,
              finalData,
              NavigationStrings.VEHICLE_SCREEN,
              navigation,
            );
          } else if (keyName === 'starship') {
            dataSetHelper(
              `${title}-${AsyncStrings.STARSHIP}`,
              keyName,
              finalData,
              NavigationStrings.STARSHIP_SCREEN,
              navigation,
            );
          } else if (keyName === 'residents') {
            dataSetHelper(
              `${title}-${AsyncStrings.RESIDENT}`,
              keyName,
              finalData,
              NavigationStrings.RESIDENT_SCREEN,
              navigation,
            );
          } else if (keyName === 'characters') {
            dataSetHelper(
              `${title}-${AsyncStrings.CHARACTER}`,
              keyName,
              finalData,
              NavigationStrings.CHARACTER_SCREEN,
              navigation,
            );
          }
        }
      });
    }
  } catch (error) {
    console.error(`Caught Error in DataSaga with ActionType ${type}`, error);
  }
}

const DataSaga = function* () {
  yield takeLatest(ActionTypes.FETCH_DATA, fetchApi);
};

export default DataSaga;
