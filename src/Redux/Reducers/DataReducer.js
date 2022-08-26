import { ActionTypes } from '../../Contants';

const initialState = {
  dataList: [],
};

const DataReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_DATA_SUCCESS: {
      return { ...state, dataList: payload };
    }

    default:
      return state;
  }
};

export default DataReducer;
