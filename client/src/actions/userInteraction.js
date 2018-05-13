import axios from 'axios';
import * as TYPES from './types';

export function addToBasket(names) {
    return async dispatch => {
        try{
            let response = await axios.post('/api/user/basket', {names});

            let {success, data} = response.data;

            if (!success) {
                throw new Error('server');
            }

            dispatch({type: TYPES.UPDATE_BASKET, payload: {basket: data.basket}});

            return true;

        }catch(e){
            return false;
        }
    }
}

export function getBasket() {
    return async dispatch => {
        try{
            let response = await axios.get('/api/user/basket');

            let {success, data} = response.data;

            if (!success) {
                throw new Error('server');
            }

            dispatch({type: TYPES.GET_BASKET, payload: {basket: data.basket}});

            return true;
        }catch(e){
            return false;
        }
    }
}

export function removeFromBasket(names) {
    return async dispatch => {
        try{
            let response = await axios.delete('/api/user/basket', {params: {names}});

            let {success, data} = response.data;

            if (!success) {
                throw new Error('server');
            }

            dispatch({type: TYPES.UPDATE_BASKET, payload: {basket:data.basket}});

            return true;
        }catch(e){
            return false;
        }
    }
}