import * as types from './actionTypes';
import * as globalAppSelectors from './reducer';


export function setLoading() {
  return async (dispatch, getState) => {
    dispatch({ type: types.SET_LOADING });
  };
}
export function unsetLoading() {
  return async (dispatch, getState) => {
    dispatch({ type: types.UNSET_LOADING });
  };
}