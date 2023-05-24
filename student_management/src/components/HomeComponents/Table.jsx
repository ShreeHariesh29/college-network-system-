import React from 'react'

function Table() {
  return (
    <div>
        <table>
            <tr className='text-center '>
                <th className='px-[30px]'>Subject</th>
                <th className='px-[110px]'>Lactures</th>
                <th className='px-[70px]'>% Average</th>
            </tr>
            <tr className='text-center'>
                <td>Maths</td>
                <td>23/30</td>
                <td>82%</td>
            </tr>
        </table>
    </div>
  )
}

export default Table