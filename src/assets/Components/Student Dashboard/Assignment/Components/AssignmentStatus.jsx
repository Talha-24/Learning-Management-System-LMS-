import React from 'react'
import "./Assignment.css"

const AssignmentStatus = () => {
  return (
    <div id='assignmentstatus' className='w-[100%] h-[50%]'>
         <div id="assignmentsyllabus" className='border-b-[2px] w-[100%] h-[20%] bg-[#F9FAFB] border-[#EAECF0]'>
      <div className='flex flex-row items-center gap-[2vmin]'>
        <span className='text-[2.6vmin] font-serif text-[#8D95A8]'>Unit</span></div>
      <span className='text-[2.6vmin] font-serif  w-[20%] text-[#8D95A8]'>Subject</span>

      <span className='text-[2.6vmin] font-serif text-[#8D95A8]'>Issue Date</span>

      <span className='text-[2.6vmin] font-serif text-[#8D95A8]'>Deadline</span>
      <span className='text-[2.6vmin] font-serif text-[#8D95A8]'>Status</span>

    </div>
    <div id="semestersyllabus" className='border-b-[2px] w-[100%] h-[20%] bg-white border-[#EAECF0]'>
      <div className='flex flex-row items-center gap-[2vmin]'><input className='bg-[#F5F5FF]' type="checkbox" />
        <span className='text-[2.4vmin] font-serif text-[#4C5465] font-medium'> 03</span></div>
      <span className='text-[2.4vmin] font-sans font-semibold text-[#3D4558] w-[20%] none-300 '>Programming</span>

      <span className='text-[2.4vmin] text-[#4C5465] text-left font-serif  font-medium'>03/02/2023</span>
      <span className='text-[2.4vmin] text-[#4C5465] text-left font-serif  font-medium '>04/05/2024</span>

      <span className='text-[2.4vmin] font-sans font-semibold  text-[#7E7E7E]'>Submitted</span>

    </div>
    <div id="semestersyllabus" className='border-b-[2px] w-[100%] h-[20%] bg-white border-[#EAECF0]'>
      <div className='flex flex-row items-center gap-[2vmin]'><input type="checkbox" />
        <span className='text-[2.4vmin] font-serif font-medium'>02</span></div>
      <span className='text-[2.4vmin] font-sans font-semibold text-[#3D4558] w-[20%] none-400'>Networking</span>

      <span className='text-[2.4vmin] text-[#4C5465] text-left font-serif  font-medium'>02/03/2024</span>
      <span className='text-[2.4vmin] text-[#4C5465] text-left font-serif  font-medium'>05/04/2024</span>

      <span className='text-[2.4vmin] font-sans font-semibold text-[#7E7E7E]  '>Submitted</span>

    </div>
    <div id="semestersyllabus" className='border-b-[2px] w-[100%] h-[20%] bg-white border-[#EAECF0]'>
      <div className='flex flex-row items-center gap-[2vmin]'><input type="checkbox" />
        <span className='text-[2.4vmin] font-serif font-medium '>03</span></div>
      <span className='text-[2.4vmin] font-sans font-semibold text-[#3D4558] w-[20%] text-left none-300 '>Database</span>

      <span className='text-[2.4vmin]  text-[#4C5465] font-serif font-medium'>08/07/2023</span>
      <span className='text-[2.4vmin] text-[#4C5465] text-left  font-medium'>01/04/2024</span>

      <span className='text-[2.4vmin] font-sans font-semibold text-[#7E7E7E]'>Pending</span>

    </div>
    <div id="semestersyllabus" className='border-b-[2px] w-[100%] h-[20%] bg-white border-[#EAECF0]'>
      <div className='flex flex-row items-center gap-[2vmin]'><input type="checkbox" />
        <span className='text-[2.4vmin] font-serif font-medium '>04</span>
      </div>
      <span id='professionalpractice' className='text-[2.4vmin] font-sans font-semibold text-[#3D4558] text-left none-300 w-[20%]'>Professional Practice</span>

      <span className='text-[2.4vmin] font-serif text-[#4C5465] text-left  font-medium'>03/05/2024</span>
      <span className='text-[2.4vmin]  text-[#4C5465] font-serif'>06/06/2025</span>

      <span className='text-[2.4vmin] font-serif text-[#7E7E7E]'>Late Submission</span>

    </div>
    <div id="semestersyllabusb" className='border-b-[2px] w-[100%]  flex flex-row justify-between bg-white border-[#EAECF0]'>
      <button className=''>Previous</button>
      <button className=''>Next</button>
    </div>
  </div>
  )
}

export default AssignmentStatus