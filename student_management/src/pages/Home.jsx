import React from 'react'
import Navbar from '../components/Navbar'
import TopAttendance from '../components/TopAttendance'
import TopAssingment from '../components/TopAssingment'
import TopAnnouncement from '../components/TopAnnouncement'
function Home() {
  return (
    <div>
      <div> <Navbar /></div>
      <div className='flex justify-between'>
      <div><TopAttendance /></div>
      <div><TopAssingment /></div>
      <div><TopAnnouncement /></div>
      </div>
    </div>
 
  )
}

export default Home