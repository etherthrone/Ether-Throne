import { userConstants } from '../constants';
import Immutable from 'immutable';

const initialState = new Immutable.Map({
    accountData: {},
    error: null
});

export default function users(state = initialState, action) {
    switch (action.type) {
        case userConstants.GET_DETAIL_REQUEST:
            return Object.assign({}, state, {
                accountData: {},
                error: null
            });
        case userConstants.GET_DETAIL_SUCCESS:
            return Object.assign({}, state, {
                accountData: action.response,
                error: null
            });
        case userConstants.GET_DETAIL_FAILURE:
            return Object.assign({}, state, {
                accountData: {},
                error: action.error
            });
        default:
            return state
    }
}