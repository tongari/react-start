import { createStore } from 'redux';
import rootReducer from '../reducers/index';

const reducer = createStore( rootReducer );

export default function configStore(){
    return reducer;
}