import { GETIP_ACTION } from '../constants/actions'
import superagent from 'superagent'

const ipMiddleware = store => next => action => {

    if (action.type !== GETIP_ACTION) {
        return next(action);
    }

    const [ startAction, successAction, failureAction] = action.actions;
    const fieldName = action.fieldName;


    if (!action.value) {
        store.dispatch({
            type: successAction,
            fieldName,
            payload:[]
        });
    }

    store.dispatch({
        type: startAction,
        fieldName
    });

    superagent
        .get('https://api.ipify.org?format=json')
        .set('Content-Type', 'application/json; charset=utf-8')
        .timeout(10000)
        .end((error, res) => {
            if (!error && res.ok) {
                store.dispatch({
                    type: successAction,
                    fieldName,
                    payload: JSON.parse(res.text)
                });
            } else {
                console.log("ERROR!!!");
            }
        });
    return 1;
};

export default ipMiddleware;