import React from 'react'
import MidsemOne from '../components/Result Components/MidsemOne'
import MidsemTwo from '../components/Result Components/MidsemTwo'
import ModelR from '../components/Result Components/ModelR'
import SemesterR from '../components/Result Components/SemesterR'

function Result() {
  return (
    <div>
      <div className='flex '>
      <div><img className='h-[250px] w-[300px] mt-[20px] pl-[35px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvYXb7VlC1YgBNOnhPjKpuKMSiktqezTZz5A&usqp=CAU" alt="hi" />
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
    <div className='flex justify-between'> 
      <div className='flex border-2 h-[60px] w-[300px] shadow-lg bg-white  rounded-lg mt-[30px] '>
  <div><h1 className='font-bold pt-4 pl-[100px]'>MID SEM 1</h1></div>
</div>
<div className='flex border-2 h-[60px] w-[300px] shadow-lg bg-white  rounded-lg mt-[30px] '>
  <div><h1 className='font-bold pt-4 pl-[100px]'>MID SEM 2</h1></div>
</div>
<div className='flex border-2 h-[60px] w-[300px] shadow-lg bg-white  rounded-lg mt-[30px] '>
  <div><h1 className='font-bold pt-4 pl-[100px]'>MODEL</h1></div>
</div>
<div className='flex border-2 h-[60px] w-[300px] shadow-lg bg-white  rounded-lg mt-[30px] '>
  <div><h1 className='font-bold pt-4 pl-[100px]'>SEMESTER</h1></div>
</div>

</div>
<div>
<MidsemOne />
<MidsemTwo />
<ModelR />
<SemesterR />
</div>
    </div>
    
    
  )
}

export default Result
