import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function HeaderOption({ Icon, title, image, onClick }) {
  
  const user = useSelector(selectUser)

  return (
      <div className='headerOption' onClick={onClick}>
      {Icon && <Icon className='headerOption-icon' />}
      {image && <Avatar className='headerOption-icon'></Avatar>}
          <h3 className='headerOption-title'>{title }</h3>
    </div>
  )
}

export default HeaderOption