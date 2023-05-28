import React from 'react'

function TimeTable() {
   
    const timetable = [
        {
          day : "Monday",
          on:"CS8651/IP",
          two:"CS891/AI",
          three:"CS8603/DS",
          four:"CS8602/CD",
          five:"CS8602/CD",
          six:"CS8662- MAD LAB",
          seven:"/",
          eight:"CS8661- IP LAB",
        },
        {
          day : "Tuesday",
          on:"CS8603/DS",
          two:"CS8601/MC",
          three:"CS8651/IP",
          four:"CS8602/CD",
          five:"CS891/AI",
          six:"CS8603/DS",
          seven:"HS8581-PC",
          eight:"HS8581-PC",
        },
        {
          day : "Wednesday",
          on:"CS891/AI",
          two:"CS8603/DS",
          three:"CS8651/IP",
          four:"CS8601/MC",
          five:"HS8581-PC",
          six:"CS8662- MAD LAB",
          seven:"CS8661- IP LAB",
          eight:"uuu",
          },
          {
            day : "Thursday",
            on:"",
            two:"bb",
            three:"ss",
            four:"ee",
            five:"ss",
            six:"sss",
            seven:"ddd",
            eight:"uuu",
          },
          {
            day : "Friday",
            on:"cs",
            two:"bb",
            three:"ss",
            four:"ee",
            five:"ss",
            six:"sss",
            seven:"ddd",
            eight:"uuu",
          },
        
      ];
  return (
    <div className=' h-[430px] grid grid-flow-col justify-stretch pb-[10px]  ml-[10px] mt-[20px]  '>
      <div className=' bg-white rounded-lg shadow-lg shadow-indigo-500/50 ' >
      <div className=' text-center h-[40px] font-semibold text-xl pt-[4px] bg-neutral-700 text-white rounded-lg  w-full '>
            Time Table
        </div>
        <div className= ''>
        <table className='table-auto mt-[10px] w-full' >
      <thead >
        <tr className=' shadow-lg shadow-blue-500/2 pl-[10px] ml-[10px]  '>
          <th className='py-[10px] px-[20px]'>Day</th>
          <th className='px-[35px]'>Lectures</th>
          <th className='px-[35px]'>Percentage</th>
          <th className='px-[35px] '>Percentage</th>
          <th className='px-[35px] '>Percentage</th>
          <th className='px-[35px]'>Percentage</th>
          <th className='px-[35px]'>Percentage</th>
          <th className='px-[35px]'>Percentage</th>
          <th className='px-[35px]'>Percentage</th>
          
        </tr>
        </thead>
      
      <tbody>
        {timetable.map((item) => (
          <tr key={item.day} className='text-center'>
            <td className='font-bold '>{item.day} </td>
            <td className='py-[15px] '>{item.on}</td>
            <td className=''>{item.two}</td>
            <td className=''>{item.three}</td>
            <td className=''>{item.four}</td>
            <td className=''>{item.five}</td>
            <td className=''>{item.six}</td>
            <td className=''>{item.seven}</td>
            <td className=''>{item.eight}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
        </div>

      </div>
      <div className='h-[420px] bg-white ml-[20px] rounded-lg shadow-lg shadow-indigo-500/50 ' >
      <div className='text-center h-[40px] font-semibold text-xl pt-[4px] bg-neutral-700 text-white rounded-lg w-[560px] mb-[20px]  '>
          Circular
        </div>
      <div className='bg-white  '>
        Circular data
      </div>

      </div>
      
    </div>
  )
}

export default TimeTable