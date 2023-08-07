import React from 'react'
import './Header.css' 
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationIcon from '@mui/icons-material/Notifications'
import HeaderOption from './HeaderOption';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() { 

    const dispatch = useDispatch()
    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }
  return (
      <div className='header'>
          <div className="header-left">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
              <div className="header-search">
                  <SearchIcon /><input type="text" placeholder='Search' />
              </div>
          </div>
          <div className="header-right">
              <HeaderOption Icon={HomeIcon } title='Home' />
              <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
              <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
              <HeaderOption Icon={ChatIcon} title='Messaging' />
              <HeaderOption Icon={NotificationIcon} title='Notifications' />
              <HeaderOption image={true} title='me' onClick={logoutOfApp}/>
          </div>
    </div>
  )
}

export default Header