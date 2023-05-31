import React from 'react'

function MidTwoTable() {
    const timetable = [
        {
          day: "CSE",
          on:"CS8651/IP",
          two:"CS891/AI",
          three:"CS8603/DS",
          four:"CS8602/CD",
          five:"CS8602/DS",
        },
        {
          day : "IT",
          on:"CS8603/DS",
          two:"CS8601/MC",
          three:"CS8651/IP",
          four:"CS8602/CD",
          five:"CS891/AI",
        },
        {
          day : "ECE",
          on:"CS891/AI",
          two:"CS8603/DS",
          three:"CS8651/IP",
          four:"CS8601/MC",
          five:"HS8581-PC",
          },
          {
            day : "MECH",
            on:"CS891/AI",
            two:"CS8603/DS",
            three:"CS8651/IP",
            four:"CS8601/MC",
            five:"HS8581-PC",
          },
    
      ];
          
      return (
        <div className='h-[300px] pb-[10px]  mt-[20px] md:flex justify-center'>
          <div className='bg-white rounded-lg  shadow-lg shadow-indigo-500/50 ' >
          <div className='text-center h-[40px]  font-semibold text-xl pt-[4px] bg-neutral-700 text-white rounded-lg '>
                MID SEMESTER 2
            </div>
            <div className= ''>
            <table className='table-fixed mt-[10px] tracking-wide text-sm ' >
          <thead >
            <tr className=' shadow-lg shadow-blue-500/2 pl-[10px] ml-[10px] tracking-wide text-sm  '>
              <th className='py-[10px] px-[20px]'>Subject</th>
              <th className='px-[35px]'>01/06/2023</th>
              <th className='px-[35px]'>02/06/2023</th>
              <th className='px-[35px] '>03/06/2023</th>
              <th className='px-[35px] '>04/06/2023</th>
              <th className='px-[35px]'>05/06/2023</th>
              
            </tr>
            </thead>
          
          <tbody className='tracking-wide text-sm'>
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
        </div>
        
      )
}

export default MidTwoTable