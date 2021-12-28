import { BrowserRouter, Routes, Route, NavLink, } from "react-router-dom";
import { ROUTES } from "../utils/constants";
import {Profile} from "../Screens/Profile/Profile.jsx";
//import Profile from "../Screens/Profile/Profile.jsx";
import Home from "../Screens/Home/Home.jsx";
import Chats from "../Screens/Chats/Chats";
import NotFound from "../Screens/NotFound/NotFound.jsx";
import './Router.css';
import NoChats from "../Screens/NoChats/NoChats";
import { ChatList } from "../Components/ChatList/ChatList";
import { useState } from "react";
import { initialChats, } from "../utils/constants";

const initialMessages=initialChats.reduce((acc, chat)=>{
    acc[chat.id]=[];
    return acc;
    },{});

export function Router(){

    const [profileName, setProfileName]=useState('default-name');

    const [chats, setChats]=useState(initialChats);
    const [messages, setMessages]=useState(initialMessages);

    const handleAddMessage=(newMessage, chatId)=>{
        setMessages((prevMessages)=>({
            ...prevMessages,
            [chatId]: [...prevMessages[chatId], newMessage],
        }));
    };

    const handleAddChat=(newChat,chatId)=>{
        setChats((prevChats)=>([...prevChats, newChat ]));
    };

    return <BrowserRouter>
    <ul className="Router-nav">
        <li className="Router-nav-item">
            <NavLink style={({isActive})=>({color: isActive ? "red" : "orange", textDecoration:"none"})} to={ROUTES.HOME}>HOME</NavLink>
        </li>
        <li className="Router-nav-item">
            <NavLink style={({isActive})=>({color: isActive ? "red" : "orange", textDecoration:"none"})} to={ROUTES.CHATS}>CHATS</NavLink>
        </li>
        <li className="Router-nav-item">
            <NavLink style={({isActive})=>({color: isActive ? "red" : "orange", textDecoration:"none"})} to={ROUTES.PROFILE}>PROFILE</NavLink>
        </li>

        {/* <li className="Router-nav-item">
            <Link to={ROUTES.NOT_FOUND} className="item">Not found</Link>   
        </li> */}

    </ul>

    <Routes>
        
        <Route path={ROUTES.HOME} element={<Home />}></Route>

        <Route path={ROUTES.CHATS} element={<ChatList chats={chats} onAddChat={handleAddChat} />}>
            <Route path={ROUTES.CHAT} element={<Chats messages={messages} onAddMessage={handleAddMessage} />}>
        </Route>
            
        </Route>        
        <Route path={ROUTES.PROFILE} element={<Profile />}></Route>

        <Route path={ROUTES.NO_CHAT} element={<NoChats/>}></Route>

        <Route path="*" element={<NotFound />}></Route>

    </Routes>
    </BrowserRouter>

};