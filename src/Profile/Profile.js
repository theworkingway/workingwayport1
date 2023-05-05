import React from 'react'
import './ProfileApp.css'
import profile from './63e50e2c3ccf4fcd1433b598_person2-p-500.jpg'

export const Profile = () => {
  return (
    <div>
      <div class="right-sidebar">
        <img src={profile} className='profile-img'/>
        <span className='Background'></span>
      </div>
    </div>
  )
}
