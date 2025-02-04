import React from 'react'
import Courses from './Courses/Courses'

const Semesters = () => {
  return (
    <>
    <div className="flex flex-col w-[100%] gap-[10%] h-[60%]">
       <Courses/>
    <div id="Semester" className='flex flex-row gap-[5vmin] w-[80%] rounded-full bg-[#00173D]'>
        <span className='text-[#F8A435] w-[25%] font-semibold'>Semester 01</span>
        <span className='text-[#FFFFFF] w-[25%] font-semibold' >Semester 02</span>
        <span className='text-[#FFFFFF] w-[25%] font-semibold' >Semester 03</span>
        <span className='text-[#FFFFFF] w-[25%] font-semibold' >Semester 04</span>
    </div>

    <div className='w-[80%]'>
        <div id="semestersyllabus" className='border-b-[2px] w-[100%] h-[20%] bg-white border-[#EAECF0]'>
           <div className='flex flex-row items-center gap-[2vmin]'><input className='bg-[#F5F5FF]'  type="checkbox" />
            <span className='text-[2.4vmin] font-sans font-semibold '> Module 01</span></div>
            <span className='text-[2.4vmin] font-sans font-semibold w-[20vh] '>Programming</span>

            <span className='text-[2.4vmin] font-sans font-semibold '>Unit 01</span>

            <span className='text-[2.4vmin] font-sans font-semibold '>Completed</span>

        </div>
        <div id="semestersyllabus" className='border-b-[2px] w-[100%] h-[20%] bg-white border-[#EAECF0]'>
           <div className='flex flex-row items-center gap-[2vmin]'><input  type="checkbox" />
            <span className='text-[2.4vmin] font-sans font-semibold '> Module 02</span></div>
            <span className='text-[2.4vmin] font-sans font-semibold w-[20vh]'>Networking</span>

            <span className='text-[2.4vmin] font-sans font-semibold '>Unit 02</span>

            <span className='text-[2.4vmin] font-sans font-semibold '>Completed</span>

        </div>
        <div id="semestersyllabus" className='border-b-[2px] w-[100%] h-[20%] bg-white border-[#EAECF0]'>
           <div className='flex flex-row items-center gap-[2vmin]'><input  type="checkbox" />
            <span className='text-[2.4vmin] font-sans font-semibold '> Module 03</span></div>
            <span className='text-[2.4vmin] font-sans font-semibold w-[20vh] '>Database</span>

            <span className='text-[2.4vmin] font-sans font-semibold '>Unit 03</span>

            <span className='text-[2.4vmin] font-sans font-semibold '>Completed</span>

        </div>
        <div id="semestersyllabus" className='border-b-[2px] w-[100%] h-[20%] bg-white border-[#EAECF0]'>
           <div className='flex flex-row items-center gap-[2vmin]'><input  type="checkbox" />
            <span className='text-[2.4vmin] font-sans font-semibold '> Module 04</span>
            </div>
            <span className='text-[2.4vmin] font-sans font-semibold w-[20vmin]'>Professional  Practice</span>

            <span className='text-[2.4vmin] font-sans font-semibold '>Unit 04</span>

            <span className='text-[2.4vmin] font-sans font-semibold '>Completed</span>

        </div>
        <div id="semestersyllabusb" className='border-b-[2px] w-[100%] h-fit  flex flex-row justify-between bg-white border-[#EAECF0]'>
         <button className=''>Previous</button>
         <button className=''>Next</button>
        </div>
    </div>
    </div>
    </>
  )
}

export default Semesters