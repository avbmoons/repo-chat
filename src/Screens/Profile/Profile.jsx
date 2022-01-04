import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {FormSubmit} from '../../Components/FormSubmit/FormSubmit';
import './Profile.css';
import  {setName, toggleName} from '../../Store/Profile/actions';

import { selectShowName, selectUserName } from '../../Store/Profile/selectors';

export function Profile(){

    const showName=useSelector(selectShowName);
    const userName=useSelector(selectUserName);
    
    const dispatch=useDispatch();

    const handleChange=()=>{
        dispatch(toggleName); 
    };

    const handleSubmitName=(newName)=>{
        dispatch(setName(newName));
    };

    return (
        <>
    <h3 className="Profile-heading">PROFILE PAGE</h3>
    <div className='Profile-form-block'>
        <div className='User-name-block'>
            <div className='User-name-field-box'>
        {showName && <span className='User-name-field'>{userName}</span>}                
            </div>

        <div className='User-name-check-box'>
        <input type="checkbox" className='User-name-check' checked={showName} onChange={handleChange}  />
        </div>

        </div>
        
      <FormSubmit onSubmit={handleSubmitName} />

    </div>
            
        </>
        
    )


};

export default Profile;

