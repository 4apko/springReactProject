import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import testReducer from './testreducer'

const reducers = {
    testRed: testReducer,
    form: formReducer
};

export default combineReducers(reducers);