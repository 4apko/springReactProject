import { GETIP_ACTION, GETIP_START, GETIP_SUCCESS, GETIP_FAILRULE } from '../constants/actions';

export function getIp() {

    return {
        type: GETIP_ACTION,
        actions: [ GETIP_START, GETIP_SUCCESS, GETIP_FAILRULE ]
    }
}