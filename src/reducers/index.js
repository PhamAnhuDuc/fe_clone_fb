import { combineReducers } from 'redux';
import notify from './notify';
import user from './user';
import post from './post';
import chat from './chat';

const appReducers = combineReducers({
    notify,
    user,
    post,
    chat
});

export default appReducers;