import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Results() {
  return (
    <div>
    <div className='flex '>
    <div><img className='h-[250px] w-[300px] mt-[20px] pl-[35px]' src="images/lana.png" alt="hi" />
  </div>
  <div className='w-full shadow-lg mt-[20px]'>
    <div>
    <h1 className=' pb-[10px] pl-[20px] font-black text-[40px] font-serif ml-[100px]'> Mai-San</h1>
    </div>
<div className='flex'>
<div>
<h2 className='mt-[10px] ml-[120px] font-bold font-serif '>DEPARTMENT<span className='font-medium font-sans'> : CSE</span></h2>
  <h2 className='mt-[10px] ml-[120px] font-bold font-serif'>YEAR<span className='font-medium font-sans pl-[77px]'> : III</span></h2>
  <h2 className='mt-[10px] ml-[120px] font-bold font-serif'>SEMESTER<span className='font-medium pl-[34px] font-sans'>: 06</span></h2>
  <h2 className='mt-[10px] ml-[120px] font-bold font-serif'>BATCH<span className='font-medium pl-[69px] font-sans'>: 2020-2024</span></h2>
</div>
<div>
<h2 className='mt-[10px] ml-[250px] font-bold font-serif '>REG NUMBER<span className='font-medium font-sans pl-[87px]'> : 210620104012</span></h2>
  <h2 className='mt-[10px] ml-[250px] font-bold font-serif'>ROLL NUMBER<span className='font-medium font-sans pl-[77px]'> : 20JITCS203 </span></h2>
</div>
</div>

  </div>

  </div>
  <nav className='w-full border-4 mt-[30px] shadow-lg'>
    <ul className='flex justify-around p-[20px] font-bold group '>
    <Link to="/result/"><button className='w-[300px] h-[60px]  hover:bg-slate-800 active:bg-slate-200 focus:outline-none focus:ring focus:ring-slate-800 rounded-lg border-2 shadow-lg'><li className=' group-hover:stroke-white hover:text-white  text-sm'>MID SEM 1</li></button></Link>
    <Link to="/result/midtworesult"><button  className='w-[300px] h-[60px]  hover:bg-slate-800 active:bg-slate-200 focus:outline-none focus:ring focus:ring-slate-800 rounded-lg border-2 shadow-lg '><li className='hover:text-white  text-sm'>MID SEM 1</li></button></Link>
    <Link to="/result/modelresult"><button className='w-[300px] h-[60px]  hover:bg-slate-800 active:bg-slate-200 focus:outline-none focus:ring focus:ring-slate-800 rounded-lg border-2 shadow-lg'><li className='hover:text-white  text-sm'>MID SEM 1</li></button></Link>
    <Link to="/result/semresult"><button className='w-[300px] h-[60px]  hover:bg-slate-800 active:bg-slate-200 focus:outline-none focus:ring focus:ring-slate-800 rounded-lg border-2 shadow-lg'><li className='hover:text-white  text-sm'>SEMESTER </li></button></Link>

      
    </ul>
  </nav>
  <Outlet />
  </div>
  
  
)
  
}

export default Results