import React from 'react'
import Table from './Table'
function Attendance() {
  return (
    <div className='ml-[10px] h-[300px] border-black w-[630px] shadow-lg shadow-indigo-500/40 mt-[150px] bg-white rounded-lg'>
        <div className='text-center h-[40px] font-semibold text-xl pt-[4px]'>
            Attendence
        </div>
        <hr />
        <div>
          <Table />
        </div>

    </div>
  )
}

export default Attendance