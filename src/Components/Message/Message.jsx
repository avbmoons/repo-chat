import { useContext } from 'react';
import {AUTHORS} from '../../utils/constants';
import { ProfileContext } from '../../utils/ProfileContext';
import { withProfileContext } from '../../utils/ProfileContext';
import './Message.css';

export function Message({id, author, text}){

    const {profileName}=useContext(ProfileContext);

    //console.log(profileName);

    return (
    <div className="Message-box" key={id}>
    <span className="Message-author">{author===AUTHORS.HUMAN ? profileName : author}</span>

    <p className="Message-text">{text}</p>

    </div>
    );
};

//export default withProfileContext(Message);