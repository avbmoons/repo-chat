import { ADD_CHAT, DELETE_CHAT } from "../Chats/constants";
import { ADD_MESSAGE, SET_MESSAGES } from "./constants";
import { DELETE_MESSAGES } from "./constants";

const initialState={};

export const messagesReducer=(state=initialState, action)=>{
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                [action.payload.chatId]: [...state[action.payload.chatId], action.payload.message],
            };
        case ADD_CHAT:
            return {
                ...state,
                [action.payload.id]: [],
            };

        case DELETE_MESSAGES:
            return {

            };
        case DELETE_CHAT:{
            const newMessages={...state};
            delete newMessages[action.payload];
            return newMessages;
        }
        case SET_MESSAGES:{
            return action.payload;
        }

        default:
            return state;
    }
};
