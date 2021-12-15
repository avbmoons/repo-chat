import { useState } from "react";
import { AUTHORS } from "./constants";
import './MessageForm.css';

export function MessageForm({messageList, setMessageList}){

    const [messageAuthor, setMessageAuthor]=useState('');
    const [messageText, setMessageText]=useState('');

    const showAuthor=()=>setMessageAuthor(AUTHORS.name);

    const handleTextChange=(e)=>setMessageText(e.target.value);

    const handleAddText=(e)=>{
        const newMessage={
            id:'',
            author: AUTHORS.name='HUMAN',
            text: messageText,
        };

        setMessageAuthor('');
        setMessageText('');
        return setMessageList([...messageList, newMessage]);
    };

    return <div className="MessageForm">
        <span className="Message-auth" value={messageAuthor} onChange={showAuthor}></span>
        <input className="Message-input" value={messageText} onChange={handleTextChange} placeholder="your message here..." ></input>
        <button className="Message-btn" type="submit" onClick={handleAddText}>Send&nbsp;&#9658;</button>
    </div>;

};