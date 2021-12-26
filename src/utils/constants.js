import {v4 as uuidv4} from "uuid";

export const AUTHORS={
    HUMAN:'human',
    BOT: 'bot',
};

export const initialChats=[
    {
        id:"chat1",
        name: "Chat 1",
       
    },
    {
        id:"chat2",
        name: "Chat 2",
    },
        
    {
        id:"chat3",
        name: "Chat 3",
        
    },
    {
        id:"chat4",
        name: "Chat 4",

    },
];

export const initialMessage=
{
    id:uuidv4(),
    author:AUTHORS.BOT,
    text:"Hi, lets talk!",
};

export const ROUTES={
    HOME: "/",
    PROFILE: "/profile",
    CHATS: "/chats",
    /*CHAT: "/chats/:chatId?",*/
    CHAT: ":chatId",
    MESSAGES: "",
    CHATS22:"/chats22",
    CHAT22: ":chatId",
    CHATNEW22:"/chats22",
    /*CHAT22: "/chats22/:chatIdd?",*/
    //NO_CHAT: "/chats/:chatId",
    NO_CHAT: "/chats/no-chat",
    NOT_FOUND: "/not-found",

    
};