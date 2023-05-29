import React from 'react'

function TopAttendance() {
  return (
    <div className='flex h-[60px] w-[300px] shadow-lg bg-white  rounded-lg mt-[30px] border-2'>
      <div><img className="h-[45px] w-[50px] mt-1.5 ml-1"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSImUpyxLzUrSTYixzY2DeM-xXUrd1PDFUEyw&usqp=CAU" alt="" /></div>
     <div> <h1 className='pt-1 pl-[15px] text-[30px] '><b>50%</b></h1></div>
      <div className='pt-4 pl-[30px]'><h1>ATTENDANCE</h1></div>
    </div>
  )
}

export default TopAttendance