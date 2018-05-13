import * as TYPES from '../actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case TYPES.TOGGLE_DRAWER:
            return {
                ...state,
                drawerOpen: action.payload.open
            };

        case TYPES.GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload.products
            };

        case TYPES.SNACKBAR_OPEN:
            return {
                ...state,
                openSnackbar: true,
                snackbarMsg: action.payload.message
            };

        case TYPES.SNACKBAR_CLOSE:
            return {
                ...state,
                openSnackbar: false
            };

        case TYPES.MODAL_OPEN:
            return {
                ...state,
                openModal: true
            };

        case TYPES.MODAL_CLOSE:
            return {
                ...state,
                openModal: false
            };

        default:
            return state;
    }
}