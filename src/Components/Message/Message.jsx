//import TextField from '@mui/material/TextField';
import './Message.css';

export function Message({id, author, text,}){

    return <div className="Message-box" key={id}>
    <span className="Message-author">{author}</span>
    {/* <TextField id="standard-basic" label="" value={author} variant="standard" color="success" InputProps={{readOnly: true,}} /> */}
    <p className="Message-text">{text}</p>
    {/* <TextField id="standard-basic" label="" value={text} variant="standard" InputProps={{readOnly: true,}} /> */}
</div>
};

