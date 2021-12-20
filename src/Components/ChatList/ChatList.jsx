import List from '@mui/material/List';
import {v4 as uuidv4} from "uuid";
import { Chat } from '../Chat/Chat';

export function ChatList({chatList}){
    return <List className="Chat-list">{chatList.map(({id,name,chatMark})=>(
        <Chat key={uuidv4()} name={name} chatMark={chatMark} />

    ))}
        </List>



};