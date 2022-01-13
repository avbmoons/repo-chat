import { BrowserRouter, Routes, Route, NavLink, } from "react-router-dom";
import { ROUTES } from "../utils/constants";
import {Profile} from "../Screens/Profile/Profile.jsx";
import Home from "../Screens/Home/Home.jsx";
import Chats from "../Screens/Chats/Chats";
import NotFound from "../Screens/NotFound/NotFound.jsx";
import './Router.css';
import NoChats from "../Screens/NoChats/NoChats";
import { ChatList } from "../Components/ChatList/ChatList";

import { Articles } from "../Screens/Articles/Articles";

export function Router(){

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
        <li className="Router-nav-item">
            <NavLink style={({isActive})=>({color: isActive ? "red" : "orange", textDecoration:"none"})} to={ROUTES.ARTICLES}>STUFF NEWS</NavLink>
        </li>

    </ul>

    <Routes>
        
        <Route path={ROUTES.HOME} element={<Home />}></Route>

        <Route path={ROUTES.CHATS} element={<ChatList />}>
            <Route path={ROUTES.CHAT} element={<Chats />}>
        </Route>
            
        </Route>        
        <Route path={ROUTES.PROFILE} element={<Profile />}></Route>

        <Route path={ROUTES.ARTICLES} element={<Articles />}></Route>

        <Route path={ROUTES.NO_CHAT} element={<NoChats/>}></Route>

        <Route path="*" element={<NotFound />}></Route>

    </Routes>
    </BrowserRouter>

};