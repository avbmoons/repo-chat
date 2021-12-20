import {v4 as uuidv4} from "uuid";
import "./ChatList.css";
import { Chat } from "../Chat/Chat";

export function ChatList({chatList}){
    return <div className="Chat-list">{chatList.map(({id,name,chatMark})=>(
        <Chat key={uuidv4()} name={name} chatMark={chatMark} />

        // <button className="Chat-list-btn" key={id=uuidv4()}>
        //     <div className="Chat-list-item">
        //         <span className="Chat-name">{name}</span>
        //         <span className="Chat-mark-vis">{chatMark}</span>
        //     </div>
        // </button>
    ))}

    </div>

};