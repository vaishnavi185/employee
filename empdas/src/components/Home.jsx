import React from 'react'
import NavBar from './NavBar'
import Search from './Search'
import Mail from './Mail'
import Notification from './Notification'
import ProfilePage from './ProfilePage'

export default function Home() {
  return (
    <div className='flex flex-row bg-[#dee2e3]'>
      

      <NavBar></NavBar>
      <div>
     <Search></Search>
      </div>

      <Mail></Mail>
      
      <Notification></Notification>
      
      <ProfilePage></ProfilePage>
    </div>
  )
}
