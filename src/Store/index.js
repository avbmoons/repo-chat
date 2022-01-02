import {createStore, combineReducers} from 'redux';
import { profileReducer } from './Profile/reducer';
import { chatsReducer } from './Chats/reducer';
import { messagesReducer } from './Messages/reducer';

const rootReducer=combineReducers({
    messages: messagesReducer,
    chats: chatsReducer,
    profile: profileReducer,        

});

export const store=createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

