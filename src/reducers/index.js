import { combineReducers } from 'redux';
import notify from './notify';
import user from './user';
import post from './post';

const appReducers = combineReducers({
    notify,
    user,
    post
});

export default appReducers;