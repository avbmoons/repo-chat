import './Message.css';

export function Message({id, author, text,}){

    return <div className="Message-box" key={id}>
    <span className="Message-author">{author}</span>
    <p className="Message-text">{text}</p>
</div>
};

