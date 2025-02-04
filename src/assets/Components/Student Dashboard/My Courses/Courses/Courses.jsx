import React from 'react'

const Courses = () => {
  return (
    <div id='mycoursesparent' className='flex flex-row gap-[4vw]'>
         <div id='coursedetails' >
           <div id='coursedetailsb' className='bg-[#0A5F6F] rounded-[2vmin] flex flex-row gap-[1vmin] '>
           <img src="src\assets\Components\Student Dashboard\My Courses\icons8-assignment-50 1.png" alt="" />
           <div>
            <p className=''>Diploma in English</p>
            <p>OXF/ENG/01</p>
            </div>
           </div>
        </div>
        <div id='coursedetails'>
           <div id='coursedetailsb' className='bg-[#0A5F6F] rounded-[2vmin] flex flex-row gap-[1vmin] '>
           <img src="src\assets\Components\Student Dashboard\My Courses\icons8-assignment-50 1.png" alt="" />
           <div>
            <p>Diploma in English</p>
            <p>OXF/ENG/01</p>
            </div>
           </div>
        </div>
        <div id='coursedetails'>
           <div id='coursedetailsb' className='bg-[#0A5F6F] rounded-[2vmin] flex flex-row gap-[1vmin] '>
           <img src="src\assets\Components\Student Dashboard\My Courses\icons8-assignment-50 1.png" alt="" />
           <div>
            <p>Diploma in English</p>
            <p>OXF/ENG/01</p>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Courses