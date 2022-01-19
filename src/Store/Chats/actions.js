import { onValue, set } from 'firebase/database';
import { chatsRef, getChatRefById, getMsgsRefById } from '../../Service/Firebase';
import {ADD_CHAT} from './constants';
import { DELETE_CHAT } from './constants';
import { SET_CHATS } from './constants';
import {v4 as uuidv4} from 'uuid';

export const addChat=(newChat)=>({
    type: ADD_CHAT,
    payload: newChat,

});

export const deleteChat=(chatId)=>({
    type: DELETE_CHAT,
    payload: chatId,
});

const setChats=(chats)=>({
    type: SET_CHATS,
    payload: chats,

});

export const initChatsTracking=()=>(dispatch)=>{
    onValue(chatsRef, (snapshot)=>{
        const newChats=[];
        snapshot?.forEach((chat)=>{
            newChats.push(chat.val());
        });
        dispatch(setChats(newChats));

    });

};

export const addChatWithFb=(newChatName)=>(dispatch)=>{
    const newId=uuidv4();
    const newChat={
        id:newId,
        name: newChatName,
    };

    set(getChatRefById(newId), newChat);
    set(getMsgsRefById(newId), {empty: true});

};

export const deleteChatWithFb=(id)=>(dispatch)=>{
        set(getChatRefById(id), null);
        set(getMsgsRefById(id), null);
};

