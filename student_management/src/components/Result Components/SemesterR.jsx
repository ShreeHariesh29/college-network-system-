import React from 'react'

function SemesterR() {
  const timetable = [
    {
      day: "CS8581",
      on:"IP",
      two:"A",
      three:"P",
    },
    {
      day : "CS8592",
      on:"DS",
      two:"B",
      three:"P",
    },
    {
      day : "CS8592",
      on:"AI",
      two:"O",
      three:"P",
      },
      {
        day : "CS8592",
        on:"CD",
        two:"O",
        three:"P",
      },
      {
        day : "CS8592",
        on:"MC",
        two:"A",
        three:"P",
      },
      {
        day : "CS8592",
        on:"MC",
        two:"A",
        three:"P",
      },
      {
        day : "CS8592",
        on:"MC",
        two:"A",
        three:"P",
      },
      {
        day : "CS8592",
        on:"MC",
        two:"A",
        three:"P",
      },
      {
        day : "CS8592",
        on:"MC",
        two:"A",
        three:"P",
      },

  ];
      
  return (
    <div className='h-[550px] pb-[10px] ml-[500px] mt-[20px] md:flex '>
      <div className='bg-white rounded-lg  shadow-lg shadow-indigo-500/50 ' >
      <div className='text-center h-[40px]  font-semibold text-xl pt-[4px] bg-neutral-700 text-white rounded-lg '>
            SEMESTER
        </div>
        <div className= ''>
        <table className='table-fixed mt-[10px] tracking-wide text-sm ' >
      <thead >
        <tr className=' shadow-lg shadow-blue-500/2 pl-[10px] ml-[10px] tracking-wide text-sm  '>
          <th className='py-[10px] px-[20px]'>SUB-CODE</th>
          <th className='px-[35px]'>SUBJECTS</th>
          <th className='px-[35px]'>GRADE</th>
          <th className='px-[35px] '>RESULT</th>
          
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

export default SemesterR
