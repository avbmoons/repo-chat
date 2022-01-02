import {ADD_MESSAGE} from './constants';
import { DELETE_MESSAGES } from './constants';

export const addMessage=(newMessage, chatId)=>({
    type:ADD_MESSAGE,
    payload: {
        message:newMessage,
        chatId,
    },

});

export const deleteMessage=(messageId, chatId)=>({
    type: DELETE_MESSAGES,
    payload: {
        messageId:messageId,
        chatId,
    },
});
