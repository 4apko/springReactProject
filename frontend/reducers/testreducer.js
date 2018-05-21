import { TEST_SUCCESS } from '../constants/actions'

let initialState = {};

export default function testReducer(state = initialState, action) {

    if (action.type === TEST_SUCCESS) {
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