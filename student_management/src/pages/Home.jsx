import React from 'react'
import Navbar from '../components/Navbar'
import TopAttendance from '../components/TopAttendance'
import TopAssingment from '../components/TopAssingment'
import TopAnnouncement from '../components/TopAnnouncement'
import Attendance from '../components/Home components/Attendance'
import QuickAccess from '../components/Home components/QuickAccess'
import Notics from '../components/Home components/Notics'
import TimeTable from '../components/Home components/TimeTable'
import Tasks from '../components/Home components/Tasks'
function Home() {
  return (
    <div>
      <div> <Navbar /></div>
      <div className='flex justify-between'>
      <div><TopAttendance /></div>
      <div><TopAssingment /></div>
      <div><TopAnnouncement /></div>
      </div>
      <div className='flex '>
        <div><Attendance /></div>
        <div><QuickAccess /></div>
        <div><Notics /></div>
      </div>
      <div className='flex'>
        <div><TimeTable /></div>
        <div><Tasks /></div>
      </div>
    </div>
 
  )
}

export default Home