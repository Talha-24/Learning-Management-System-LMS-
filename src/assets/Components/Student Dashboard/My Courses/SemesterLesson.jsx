import React from 'react'

const SemesterLesson = () => {
  return (
    <div className='w-[100%]'>
    <div id="semestersyllabus" className='border-b-[2px] w-[100%] h-[20%] bg-white border-[#EAECF0]'>
      <div className='flex flex-row items-center gap-[2vmin]'><input className='bg-[#F5F5FF]' type="checkbox" />
        <span className='text-[2.4vmin] font-sans font-semibold '> Module 01</span></div>
      <span className='text-[2.4vmin] font-sans font-semibold w-[20%] '>Programming</span>

      <span className='text-[2.4vmin] font-sans font-semibold '>Unit 01</span>

      <span className='text-[2.4vmin] font-sans font-semibold '>Completed</span>

    </div>
    <div id="semestersyllabus" className='border-b-[2px] w-[100%] h-[20%] bg-white border-[#EAECF0]'>
      <div className='flex flex-row items-center gap-[2vmin]'><input type="checkbox" />
        <span className='text-[2.4vmin] font-sans font-semibold '> Module 02</span></div>
      <span className='text-[2.4vmin] font-sans font-semibold w-[20%]'>Networking</span>

      <span className='text-[2.4vmin] font-sans font-semibold '>Unit 02</span>

      <span className='text-[2.4vmin] font-sans font-semibold '>Completed</span>

    </div>
    <div id="semestersyllabus" className='border-b-[2px] w-[100%] h-[20%] bg-white border-[#EAECF0]'>
      <div className='flex flex-row items-center gap-[2vmin]'><input type="checkbox" />
        <span className='text-[2.4vmin] font-sans font-semibold '> Module 03</span></div>
      <span className='text-[2.4vmin] font-sans font-semibold w-[20%] '>Database</span>

      <span className='text-[2.4vmin] font-sans font-semibold '>Unit 03</span>

      <span className='text-[2.4vmin] font-sans font-semibold '>Completed</span>

    </div>
    <div id="semestersyllabus" className='border-b-[2px] w-[100%] h-[20%] bg-white border-[#EAECF0]'>
      <div className='flex flex-row items-center gap-[2vmin]'><input type="checkbox" />
        <span className='text-[2.4vmin] font-sans font-semibold '> Module 04</span>
      </div>
      <span className='text-[2.4vmin] font-sans font-semibold w-[20%]'>Professional  Practice</span>

      <span className='text-[2.4vmin] font-sans font-semibold '>Unit 04</span>

      <span className='text-[2.4vmin] font-sans font-semibold '>Completed</span>

    </div>
    <div id="semestersyllabusb" className='border-b-[2px] w-[100%]  flex flex-row justify-between bg-white border-[#EAECF0]'>
      <button className=''>Previous</button>
      <button className=''>Next</button>
    </div>
  </div>
  )
}

export default SemesterLesson