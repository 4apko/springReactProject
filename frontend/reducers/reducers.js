import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import phoneValidateReducer from './phoneValidateReducer'
import ipReducer from './ipReducer'

const reducers = {
    phoneRed: phoneValidateReducer,
    ipRed: ipReducer,
    form: formReducer
};

export default combineReducers(reducers);