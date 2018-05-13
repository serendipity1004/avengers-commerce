import axios from 'axios';
import * as TYPES from './types';

export function toggleDrawer(toggle) {
    return dispatch => {
        dispatch({type: TYPES.TOGGLE_DRAWER, payload: {open:toggle}});
    }
}

export function getAllProducts(){
    return async dispatch => {
        try{
            let response = await axios.get('/api/products');

            let {success, data} = response.data;

            if (!success) {
                throw new Error('server');
            }

            dispatch({type: TYPES.GET_ALL_PRODUCTS, payload: {products: data.products}});

            return true;
        }catch(e){
            return false;
        }
    }
}

export function openSnackbar(message) {
    return dispatch => {
        dispatch({type: TYPES.SNACKBAR_OPEN, payload: {message}});
    };
}

export function closeSnackbar() {
    return dispatch => {
        dispatch({type: TYPES.SNACKBAR_CLOSE, payload: true});
    }
}

export function openModal() {
    return dispatch => {
        dispatch({type: TYPES.MODAL_OPEN, payload: true});
    }
}

export function closeModal() {
    return dispatch => {
        dispatch({type: TYPES.MODAL_CLOSE, payload: true});
    }
}