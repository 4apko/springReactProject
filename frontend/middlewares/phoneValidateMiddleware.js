import { PHONE_VALIDATE_ACTION } from '../constants/actions'
import superagent from 'superagent'

const phoneValidateMiddleware = store => next => action => {

    if (action.type !== PHONE_VALIDATE_ACTION) {
        return next(action);
    }

    const [ startAction, successAction, failureAction] = action.actions;
    const fieldName = action.fieldName;

    let state = store.getState();

    let dataFetch = state.form.phoneValidateForm.values;

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
        .get('/validate')
        .set('Content-Type', 'text/html; charset=utf-8')
        .query(dataFetch)
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

export default phoneValidateMiddleware;