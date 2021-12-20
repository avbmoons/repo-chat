import {v4 as uuidv4} from "uuid";
import './Chat.css';

export function Chat({id, name, chatMark}){
    return <button className="Chat-list-btn" key={id=uuidv4()}>
    <div className="Chat-list-item">
        <span className="Chat-name">{name}</span>
        <span className="Chat-mark-vis">{chatMark}</span>
    </div>
</button>

};