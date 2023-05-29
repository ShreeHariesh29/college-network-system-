import React from 'react'
import Navbar from '../components/HomeComponents/Navbar'
import Attendance from '../components/HomeComponents/Attendance'
import QuickAccess from '../components/HomeComponents/QuickAccess'
import Notice from '../components/HomeComponents/Notice.jsx'
import TopAnnouncement from '../components/HomeComponents/TopAnnouncement'
import TopAssingment from '../components/HomeComponents/TopAssingment'
import TopAttendance from '../components/HomeComponents/TopAttendance'
import TimeTable from '../components/HomeComponents/TimeTable'

function Home() {
  return (
    <div className=''>

      <div className=' md:flex mx-auto justify-between ml-[30px] mr-[30px]   '>
          <TopAnnouncement />
          <TopAssingment />
          <TopAttendance />
        </div>

        
        <div className='md:flex justify-between mr-[30px] full'>
        <div><Attendance /></div>
        <div><QuickAccess /></div>
        <div><Notice /></div>
        </div>
        <div className=''><TimeTable /></div>
        
    </div>
    
  )
}

export default Home