import './Settings.css'
import Sidbar from '../../components/sidbar/Sidbar'
import { Context } from '../../context/Context'
import {useContext} from 'react';


export default function Settings() {
  const { user } = useContext(Context);
  return(
    <div className='settings'>
          <div className='settingsWrapper'>
          <div className='settingsTitle'>
            <span className='settingsTitleUpdate'>Update Your Account</span>
            <span className='settingsTitleDelete'>Delete Account</span>
          </div>
          <from className='settingsForm'>
            <label>Profile</label>
            <div className="settingsPP">
            <img
              src={user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fas fa-user-circle"></i>{" "}
               </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
            </div>
          </from>
          <div className='settingsPPInputButtom'>
          <label>Username</label>
          <input type="text" placeholder="Sara" name="name" />
          <label>Email</label>
          <input type="email" placeholder="sara@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
          </div>
          </div>
      <Sidbar/>

    </div>
  )
}
