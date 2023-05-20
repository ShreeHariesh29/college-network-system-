import React from 'react'
import Navbar from '../components/HomeComponents/Navbar'
import Attendance from '../components/HomeComponents/Attendance'
import QuickAccess from '../components/HomeComponents/QuickAccess'
import Notice from '../components/HomeComponents/Notice'

function Home() {
  return (
    <div>
        <div><Navbar /></div>
        <div className='flex'>
        <div><Attendance /></div>
        <div><QuickAccess /></div>
        <div><Notice /></div>
        </div>
        
    </div>
    
  )
}

export default Home