import { combineReducers } from 'redux';

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const stack = (state = 0, action) => {
    switch (action.type) {
        case 'ADD':
            return state + 1;
        case 'REMOVE':
            return state - 1;
        default:
            return state;
    }
}

const rootReducer = combineReducers({ counter,stack });

export default rootReducer