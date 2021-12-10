import './Message.css';

export function Message(props){
    //console.log(props);
    return (
        <p className="messageText">{props.text}</p>
    )

}