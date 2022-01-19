import List from '@mui/material/List';
import { NavLink, Outlet, } from 'react-router-dom';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import { Chat } from '../Chat/Chat';
import {FormSubmit} from '../FormSubmit/FormSubmit';
import './ChatList.css';
import {addChatWithFb, initChatsTracking} from '../../Store/Chats/actions';
import { initMsgsTracking } from '../../Store/Messages/actions';
import {selectChats} from '../../Store/Chats/selectors';
import {useEffect,} from 'react';

export function ChatList(){

    const chats=useSelector(selectChats);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(initChatsTracking());
        dispatch(initMsgsTracking());

    }, []);
    
    const onAddChat=(newChatName)=>{
        addChatWithFb(newChatName);

    };

    return (
    <>
    <div className="Main-block">
        <div className="Left-block">
        <List className="Chat-list">{chats.map((chat)=>(      
        <NavLink key={chat.id} className='Chat-link' to={`/chats/${chat.id}`} style={({isActive})=>({color: isActive ? "red" : "#0f1226", textDecoration:"none", width:'100%',})}><Chat id={chat.id}  name={chat.name} />
        </NavLink>

    ))}

        </List>

        <div className="Left-form">
        <FormSubmit onSubmit={onAddChat} />
        </div>

        </div>

        <div className="Right-block">    
        <Outlet />
        </div>

    </div>    
    </>    
    );

};