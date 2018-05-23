import React from 'react'
import { render } from 'react-dom'
import { renderToString } from 'react-dom/server'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import phoneValidateMiddleware from './middlewares/phoneValidateMiddleware'
import ipMiddleware from './middlewares/ipMiddleware'
import promise from 'redux-promise'

import reduxReset from 'redux-reset'
import reducers from './reducers/reducers'

import App from './components/app/app'

const MIDDLEWARES = [
    thunk,
    promise,
    phoneValidateMiddleware,
    ipMiddleware
];

if (typeof window !== 'undefined' && typeof document !== 'undefined' && typeof document.createElement === 'function') {

    window.renderClient = (state) => {

        let store = applyMiddleware(...MIDDLEWARES)(createStore)(reducers, state, reduxReset());

        store.subscribe(() => console.log(store.getState()));

        render (
            <Provider store={ store }>
                <App />
            </Provider>,
            document.getElementById ('root')
        );
    }
} else {
    global.renderServer = (state) => {

        let store = applyMiddleware(...MIDDLEWARES)(createStore)(reducers, state, reduxReset());

        store.subscribe(() => console.log(store.getState()));

        return renderToString (
            <Provider store={ store }>
                <App />
            </Provider>
        )
    }
}