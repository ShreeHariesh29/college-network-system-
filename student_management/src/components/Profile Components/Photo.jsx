import React from 'react'

function Photo() {
  return (
    <div className='bg-slate-200 pt-[2px] pb-[2px] md:flex h-screen '>
    <div className='mt-[15px] w-1/4 mr-[10px]'>
    <div className='h-[450px] w-full shadow-lg drop-shadow-2xl bg-white shadow-gray-500 border-2 rounded-2xl  ml-[15px] tracking-wide text-sm '> 
    <div className=' flex justify-center items-center'>
    <img className=' h-[250px] pt-[10px] w-[250px] ' src="images/lana.png" alt="hi" />
    </div>
   
   <h1 className='pt-[10px] font-black text-2xl font-serif text-center'> Mai-San</h1>
    <h2 className='mt-[10px] ml-[15px] font-bold font-serif '>DEPARTMENT<span className='font-medium font-sans'> : CSE</span></h2>
    <h2 className='mt-[10px] ml-[15px] font-bold font-serif'>YEAR<span className='font-medium font-sans pl-[77px]'> : III</span></h2>
    <h2 className='mt-[10px] ml-[15px] font-bold font-serif'>SEMESTER<span className='font-medium pl-[34px] font-sans'>: 06</span></h2>
    <h2 className='mt-[10px] ml-[15px] font-bold font-serif'>BATCH<span className='font-medium pl-[69px] font-sans'>: 2020-2024</span></h2>
</div>
<div className='h-[210px] w-full shadow-lg drop-shadow-2xl bg-white shadow-gray-500 border-2 rounded-2xl mt-[25px] ml-[15px] tracking-wide text-sm'>
        <h1 className='mt-[10px] text-center font-black text-2xl font-serif'>SOCIAL HUB</h1>
        <h2 className='pl-[10px] font-bold font-serif mt-[15px] '> G-MAIL <span className='font-sans font-medium pl-[35px]'>: guhanramu1203@gmail.com</span></h2>
        <h2 className='pl-[10px] font-bold font-serif mt-[15px]'> GITHUB<span className='font-sans font-medium pl-[35px]'>: GUHAN1203</span></h2>        
        <h2 className='pl-[10px] font-bold font-serif mt-[15px]'> LINKEDIN<span className='font-sans font-medium pl-[15px]'>: GUHAN RAMU</span></h2>
    </div>

    </div>
   <div className='w-3/4 mr-[30px]'>
   <div className='h-[680px] w-full shadow-lg drop-shadow-2xl bg-white shadow-gray-500 border-2 rounded-2xl mt-[15px] ml-[15px] tracking-wide text-sm '>
        <h1 className='mt-[20px] text-center font-black text-2xl font-serif'>STUDENT'S DETAILS</h1>
        <h2 className='pl-[20px] font-bold font-serif text-sm mt-[20px] '>FULL NAME <span className='font-sans font-medium pl-[75px]'>:  MAI SAN</span></h2>
        <h2 className='pl-[20px] font-bold font-serif text-sm mt-[20px]'>ROLL NUMBER<span className='font-sans font-medium pl-[55px]'>: 20JITCS203</span></h2>        
        <h2 className='pl-[20px] font-bold font-serif text-sm mt-[20px]'>REG NUMBER<span className='font-sans font-medium pl-[65px]'>: 210620104012</span></h2>
        <h2 className='pl-[20px] font-bold font-serif text-sm mt-[20px]'>DATE OF BIRTH<span className='font-sans font-medium pl-[51px]'>: 06-06-2003</span></h2>
        <h2 className='pl-[20px] font-bold font-serif text-sm mt-[20px]'>GENDER<span className='font-sans font-medium pl-[105px]'>: MALE</span></h2>
        <h2 className='pl-[20px] font-bold font-serif text-sm mt-[20px]'>CONTACT NO<span className='font-sans font-medium pl-[72px]'>: 9551218589</span></h2>
        <h2 className='pl-[20px] font-bold font-serif text-sm mt-[20px]'>ADDRESS<span className='font-sans font-medium pl-[98px]'>: NO 31/29,BANSI ENCLAVE,KARIKALAN STREET,CHROMEPET,CHENNAI -600044</span></h2>
        <h2 className='pl-[20px] font-bold font-serif text-sm mt-[20px]'>BLOOD GROUP<span className='font-sans font-medium pl-[58px]'>: A+</span></h2>
        <h2 className='pl-[20px] font-bold font-serif text-sm mt-[20px]'>FATHER’S NAME<span className='font-sans font-medium pl-[45px]'>: Venkatesh</span></h2>
        <h2 className='pl-[20px] font-bold font-serif text-sm mt-[20px]'>MOTHER’S NAME<span className='font-sans font-medium pl-[40px]'>: Kavitha</span></h2>
        <h2 className='pl-[20px] font-bold font-serif text-sm mt-[20px]'>FATHER’S NUMBER<span className='font-sans font-medium pl-[25px]'>: 1234567890</span></h2>
        <h2 className='pl-[20px] font-bold font-serif text-sm mt-[20px]'>MOTHER’S NUMBER<span className='font-sans font-medium pl-[20px]'>: 1234567890</span></h2>
    </div>
   </div>
</div>
    
    
  )
}

export default Photo
 