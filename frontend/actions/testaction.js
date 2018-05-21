import { TEST_ACTION, TEST_START, TEST_SUCCESS, TEST_FAILRULE } from '../constants/actions';

export function makeTestAction() {

    return {
        type: TEST_ACTION,
        actions: [ TEST_START, TEST_SUCCESS, TEST_FAILRULE ]
    }
}