import { PHONE_VALIDATE_ACTION, PHONE_VALIDATE_START, PHONE_VALIDATE_SUCCESS, PHONE_VALIDATE_FAILRULE } from '../constants/actions';

export function phoneValidateAction() {

    return {
        type: PHONE_VALIDATE_ACTION,
        actions: [ PHONE_VALIDATE_START, PHONE_VALIDATE_SUCCESS, PHONE_VALIDATE_FAILRULE ]
    }
}