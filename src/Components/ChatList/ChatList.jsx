import List from '@mui/material/List';
import { NavLink, Outlet, } from 'react-router-dom';
import { Link, } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
//import { Outlet } from 'react-router-dom';
import { Chat } from '../Chat/Chat';
import {FormSubmit} from '../FormSubmit/FormSubmit';
import './ChatList.css';

export function ChatList({chats, onAddChat}){

    const handleSubmitChat=(name)=>{
        const newChat={id:uuidv4(), name};
        onAddChat(newChat);
      }

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
        <FormSubmit onSubmit={handleSubmitChat} />
        </div>

        </div>

        <div className="Right-block">    
        <Outlet />
        </div>

    </div>    
    </>    
    );



};