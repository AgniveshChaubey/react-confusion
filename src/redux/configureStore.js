import {createStore} from 'redux';
import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Reducer, initialState } from './reducer'

import { createForms } from 'react-redux-form';


import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { InitialFeedback } from './forms';
 

combineReducers({
    dishes: Dishes,
    comments: Comments,
    promotions: Promotions,
    leaders: Leaders,
    ...createForms({
        feedback: InitialFeedback
    })
}),
applyMiddleware(thunk, logger)



export const ConfigureStore = () => {
    const store = createStore(
        Reducer, // reducer
        initialState, // our initialState
    );

    return store;
}