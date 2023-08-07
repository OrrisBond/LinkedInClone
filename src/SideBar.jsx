import { Avatar } from '@mui/material'
import React from 'react'
import './SideBar.css'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function SideBar() {
    const user= useSelector(selectUser)

    const recentItem = (topic) => (
        <div className="sidebar-recentItem">
            <span className='sidebar-hash'>#</span>
            <p>{topic}</p>
        </div>
    )
  return (
      <div className='sidebar'>
          <div className='sidebar-top'>
              <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80 " alt="" />
              <Avatar className='sidebar-avatar' src={user.photoURL}>{user.email[0]}</Avatar>
              <h2>{user.displayName }</h2>
              <h4>{user.email }</h4>
          </div>
          <div className="sidebar-stats">
              <div className="sidebar-stat">
                  <p>Who viewed you</p>
                  <p className="sidebar-statNumber">2,543</p>
              </div>
              <div className="sidebar-stat">
              <p>Views on post</p>
                  <p className="sidebar-statNumber">2,448</p>
              </div>
          </div>
          <div className="sidebar-bottom">
              <p>Recent</p>
              {recentItem('reactjs')}
              {recentItem('programming')}
              {recentItem('softwareengineering')}
              {recentItem('design')}
              {recentItem('developer')}
          </div>
    </div>
  )
}

export default SideBar