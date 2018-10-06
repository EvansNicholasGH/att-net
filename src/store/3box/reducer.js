import _ from 'lodash';
import * as types from './actionTypes';
import Immutable from 'seamless-immutable';



let initialState = Immutable({

});

export default function reduce(state = initialState, action = {}) {
    switch (action.type) {
        case types.LOADED_3BOX:
            return state.merge({

            });
        default:
            return state;
    }
}

