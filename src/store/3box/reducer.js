import _ from 'lodash';
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';



let initialState = Immutable({
  isLoaded: false,
  address: '',
  name: '',
  email: '',
  avatar: '',
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.LOADED_3BOX:

      return state.merge({
        name: action.name,
        email: action.email,
        avatar: action.avatar,
        address: action.address,
        isLoaded: true
      });
    default:
      return state;
  }
}


export function is3BoxLoaded(state) {
  return state.profile3Box.isLoaded;
}

export function get3BoxProfile(state) {
  const { name, email, avatar, address } = state.profile3Box;
  return {
    name,
    email,
    avatar,
    address
  }
};