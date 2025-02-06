import React from 'react'

const LectureTiming = () => {
  return (
    <div id='assignmentstatus' className='w-[100%] h-[50%]'>
            <div id="assignmentsyllabus" className='border-b-[2px] w-[100%] h-[20%] bg-[#F9FAFB] border-[#EAECF0]'>
                <div className='flex flex-row items-center gap-[2vmin] w-[20%]'>
                <input id='lecturerinput' type="checkbox" className="" />
                    <span id='lecturerinputcontainer' className='text-[2.6vmin] font-serif text-[#8D95A8]'> Lecturer Name</span></div>
                <span className='text-[2.6vmin] font-serif  w-[20%] text-[#8D95A8]'>Subject</span>

                <span className='text-[2.6vmin] font-serif text-[#8D95A8] w-[20%]'>Start Time</span>

                <span className='text-[2.6vmin] font-serif text-[#8D95A8] w-[20%]'>End Time</span>
                <span id='date' className='text-[2.6vmin] font-serif text-[#000000] w-[30%] text-right'>Date</span>

            </div>
            <div id="semestersyllabus" className='border-b-[2px] w-[100%] h-[20%] bg-white border-[#EAECF0]'>

                <div id='lecturerdetails' className='flex flex-row items-center gap-[2vmin] w-[20%]'><input className='bg-[#F5F5FF]' type="checkbox" />

                    <span className='text-[2.4vmin] font-serif text-[#000000] font-medium'>
                        <img src="" alt="" className='' />
                        <span id=''></span>

                        03

                    </span>


                </div>



                <span className='text-[2.4vmin] font-sans font-semibold text-[#000000] w-[20%] none-300 '>Programming</span>

                <span className='text-[2.4vmin] text-[#000000] text-left font-serif  font-medium w-[20%]'>9.00</span>
                <span className='text-[2.4vmin] text-[#000000] text-left font-serif  font-medium  w-[20%]'>1.0</span>

                <span id='datetext' className='text-[2.4vmin] font-sans font-semibold  text-[#000000] w-[20%] text-right'>22.10.2023</span>

            </div>
            <div id="semestersyllabus" className='border-b-[2px] w-[100%] h-[20%] bg-white border-[#EAECF0] '>
                <div className='flex flex-row items-center gap-[2vmin] w-[20%]'><input type="checkbox" />
                    <span className='text-[2.4vmin] font-serif font-medium'>02</span></div>
                <span className='text-[2.4vmin] font-sans font-semibold text-[#000000] w-[20%] none-400'>Networking</span>

                <span className='text-[2.4vmin] text-[#000000] text-left font-serif  font-medium    w-[20%]'>9.00</span>
                <span className='text-[2.4vmin] text-[#000000] text-left font-serif  font-medium   w-[20%]'>1.0</span>

                <span id='datetext' className='text-[2.4vmin] font-sans font-semibold text-[#000000]    w-[20%] text-right'>22.10.2023</span>

            </div>
            <div id="semestersyllabus" className='border-b-[2px] w-[100%] h-[20%] bg-white border-[#EAECF0]'>
                <div className='flex flex-row items-center gap-[2vmin]  w-[20%]'><input type="checkbox" />
                    <span className='text-[2.4vmin] font-serif font-medium '>03</span></div>
                <span className='text-[2.4vmin] font-sans font-semibold text-[#000000] w-[20%] text-left none-300 '>Database</span>

                <span className='text-[2.4vmin] text-[#000000] text-left font-serif  font-medium  w-[20%]'>9.00</span>
                <span className='text-[2.4vmin] text-[#000000] text-left font-serif  font-medium   w-[20%]'>1.0</span>

                <span id='datetext' className='text-[2.4vmin] font-sans font-semibold text-[#000000]  w-[20%] text-right'>22.10.2023</span>

            </div>
            <div id="semestersyllabus" className='border-b-[2px] w-[100%] h-[20%] bg-white border-[#EAECF0]'>
                <div className='flex flex-row items-center gap-[2vmin]  w-[20%]'><input type="checkbox" />
                    <span className='text-[2.4vmin] font-serif font-medium '>04</span>
                </div>
                <span id='professionalpractice' className='text-[2.4vmin] font-sans font-semibold text-[#000000] text-left none-300 w-[20%]'>Professional Practice</span>

                <span className='text-[2.4vmin] text-[#000000] text-left font-serif  font-medium w-[20%]'>9.00</span>
                <span className='text-[2.4vmin] text-[#000000] text-left font-serif  font-medium   w-[20%]'>1.0</span>

                <span id='datetext' className='text-[2.4vmin] font-serif text-[#000000]  w-[20%] text-right'>22.10.2023</span>

            </div>
            <div id="semestersyllabusb" className='border-b-[2px] w-[100%]  flex flex-row justify-between bg-white border-[#EAECF0]'>
                <button className=''>Previous</button>
                <button className=''>Next</button>
            </div>
        </div>
  )
}

export default LectureTiming