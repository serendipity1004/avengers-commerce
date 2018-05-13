import * as TYPES from '../actions/types';

export default function (state = {}, action) {
    switch (action.type) {

        case TYPES.UPDATE_BASKET:
            return {
                ...state,
                basket: action.payload.basket
            };

        default:
            return state;
    }
}