import { GETIP_SUCCESS } from '../constants/actions'

let initialState = {};

export default function ipReducer(state = initialState, action) {

    if (action.type === GETIP_SUCCESS) {
        return {
            ...state,
            respResult: action.payload.ip,
            answerReceived: true
        };
    }

    return {
        ...state,
        answerReceived: false
    }
}