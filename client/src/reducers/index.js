import {combineReducers} from 'redux';
import {reducer as reduxForm} from 'redux-form';
import frontInteractionReducer from './frontInteractionReducer';
import userInteractionReducer from './userInteractionReducer';

export default combineReducers({
    front:frontInteractionReducer,
    user:userInteractionReducer
})