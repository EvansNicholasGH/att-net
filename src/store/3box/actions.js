import * as types from './actionTypes';
import ThreeBox from '3box';
import * as web3Selectors from '../web3/reducer';
import * as profile3BoxSelectors from '../3box/reducer';
import * as globalAppActions from '../global-app/actions';

let box = undefined;

export function load3box(address) {
  return async (dispatch, getState) => {
    try {

      dispatch(globalAppActions.setLoading());
      box = await ThreeBox.openBox(address, web3Selectors.getWeb3Provider());
      let name = await box.public.get('name');
      let email = await box.private.get('email');
      let avatar = await box.public.get('avatar');

      name = name ? name : '';
      email = email ? email : '';
      avatar = avatar ? avatar : '';
      dispatch({ type: types.LOADED_3BOX, name, email, avatar, address });
      dispatch(globalAppActions.unsetLoading());
    } catch (error) {
      throw error;
    }
  };
}

export function update3BoxProfile(name, email, avatar) {
  return async (dispatch, getState) => {
    try {

      if (box === undefined) {
        throw new Error("No 3Box available");
      }
      dispatch(globalAppActions.setLoading());
      const address = profile3BoxSelectors.get3BoxProfile(getState()).address;
      await box.public.set('name', name);
      await box.public.set('avatar', avatar);
      await box.private.set('email', email);
      dispatch({ type: types.LOADED_3BOX, name, email, avatar, address });

      // // box = await ThreeBox.openBox(address, web3Selectors.getWeb3Provider());
      // let name = await box.public.get('name');
      // let email = await box.private.get('email');
      // let avatar = await box.private.get('avatar');

      // name = name ? name : '';
      // email = email ? email : '';
      // avatar = avatar ? avatar : '';
      // dispatch({ type: types.LOADED_3BOX, name, email, avatar, address });
      dispatch(globalAppActions.unsetLoading());
    } catch (error) {
      throw error;
    }
  };
}
