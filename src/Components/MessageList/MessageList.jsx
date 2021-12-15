import {v4 as uuidv4} from 'uuid';
import './MessageList.css';
import { Message } from '../Message/Message';


export function MessageList({messageList}){
    return <div className="Message-list-box">{messageList.map(({id, author, text,})=>(
        <Message key={id=uuidv4()} author={author} text={text} />
        ))}
    </div>


};

