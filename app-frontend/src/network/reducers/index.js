import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import users from './users.reducer';
import alert from './alert.reducer';

const rootReducer = combineReducers({
    users,
    alert,
    routing
});

export default rootReducer;