import { useContext } from 'react';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {FormSubmit} from '../../Components/FormSubmit/FormSubmit';
import { ProfileContext } from '../../utils/ProfileContext';
import './Profile.css';

import  {showName} from '../../Store/Profile/actions';
import { store } from '../../Store';

export function Profile(){

    const {profileName, setProfileName}=useContext(ProfileContext);
    
    const storeData=useSelector((state)=>state);
    console.log(storeData);

    const dispatch=useDispatch();

    const handleChange=()=>{
        dispatch(showName) 
    };

    return (
        <>
    <h3 className="Profile-heading">PROFILE PAGE</h3>
    <div className='Profile-form-block'>
        <div className='User-name-block'>
            <div className='User-name-field-box'>
        {storeData.showName && <span className='User-name-field'>{profileName}</span>}                
            </div>

        <div className='User-name-check-box'>
        <input type="checkbox" className='User-name-check' checked={storeData.showName} onChange={handleChange}  />            
        </div>

        </div>
        
      <FormSubmit onSubmit={setProfileName} />

    </div>
            
        </>
        
    )


};

export default Profile;

