import React from 'react'


function Table() {
   
    const data = [
        {
          subject: "Computer Network",
          lectures: "38/45",
          percentage: "99%",
        },
        {
            subject: "Object Oriented Programming",
            lectures: "38/45",
            percentage: "88%",
        },
        {
            subject: "Internet Programming",
            lectures: "38/45",
            percentage: "91%",
          },
          {
            subject: "Mobile Computing",
            lectures: "38/45",
            percentage: "89%",
          },
          {
            subject: "Database Management",
            lectures: "38/45",
            percentage: "90%",
          },
        
      ];
     
      
    

  return (
    <div>
        <table className='table-auto mt-[10px]  ' >
      <thead >
        <tr className=' shadow-lg shadow-blue-500/2 '>
          <th className=''>Subject</th>
          <th className='pl-[110px]'>Lectures</th>
          <th className='pl-[170px] pr-[40px] '>Percentage</th>
        </tr>
        </thead>
      
      <tbody>
        {data.map((item) => (
          <tr key={item.subject} className='text-center'>
            <td >{item.subject} </td>
            <td className='py-2 pl-[100px]  '>{item.lectures}</td>
            <td className='pl-[100px] '>{item.percentage}</td>
            
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default Table