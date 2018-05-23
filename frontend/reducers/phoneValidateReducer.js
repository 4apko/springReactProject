import { PHONE_VALIDATE_SUCCESS } from '../constants/actions'

let initialState = {};

export default function phoneValidateReducer(state = initialState, action) {

    if (action.type === PHONE_VALIDATE_SUCCESS) {
        return {
            ...state,
            respResult: action.payload.name,
            answerReceived: true
    };
    }

    return {
        ...state,
        answerReceived: false
    }
}