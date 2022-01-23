import List from '@mui/material/List';
import { NavLink, Outlet, } from 'react-router-dom';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {v4 as uuidv4} from 'uuid';
import { Chat } from '../Chat/Chat';
import {FormSubmit} from '../FormSubmit/FormSubmit';
import './ChatList.css';
import { addChat } from '../../Store/Chats/actions';
//import { thunkAction } from '../../Store/Chats/actions';
import { selectChats } from '../../Store/Chats/selectors';

export function ChatList(){

    const chats=useSelector(selectChats);
    const dispatch=useDispatch();
    
    const onAddChat=(newChatName)=>{
        const newId=uuidv4();
        const newChat={
            id:newId,
            name: newChatName,
        };
        dispatch(addChat(newChat));

    };

    // const tryThunk=()=>{
    //     dispatch(thunkAction('hello thunk!'));
    // };

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
        {/* <button onClick={tryThunk}>Try Thunk</button> */}
        </div>

        </div>

        <div className="Right-block">    
        <Outlet />
        </div>

    </div>    
    </>    
    );



};