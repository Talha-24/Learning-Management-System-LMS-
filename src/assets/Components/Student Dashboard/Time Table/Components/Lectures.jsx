import React from 'react'

const Lectures = () => {
  return (
    <div id="semestersyllabus" className='border-[1px] w-[100%] h-[20%] bg-white border-[#EAECF0]'>

                <div id='lecturerdetails' className='flex flex-row items-center gap-[2vmin] w-[30%]'><input className='bg-[#F5F5FF]' type="checkbox" />

                    <span className='text-[2.4vmin] font-serif text-[#000000] font-medium flex gap-[10px]'>
                        <img id='img' src="src\assets\Components\Student Dashboard\Time Table\Components\Ellipse 170.png" alt="" className='' />
                        <span id=' ' className='flex flex-col items-start'>
                            <span className='flex flex-row gap-[2.5vw]'><p>John</p>

                            
                            <img id='countryimage' src="src\assets\Components\Student Dashboard\Time Table\Components\country flag.svg" alt="" />
                            
                            
                            </span>
                            <p id='teachergmail' className=''>John@gmail.com</p>
                        </span>

                        

                    </span>


                </div>



                <span className='text-[2.4vmin] font-serif font-medium text-[#000000] w-[20%] none-300 '>Programming</span>

                <span id='timing' className='text-[2.4vmin] text-[#000000] text-left font-serif  font-medium w-[20%]'>9.00</span>
                <span id='timing' className='text-[2.4vmin] text-[#000000] text-left font-serif  font-medium  w-[20%]'>1.0</span>

                <span id='datetext' className='text-[2.4vmin] font-sans font-semibold  text-[#000000] w-[10%] text-right'>22.10.2023</span>

            </div>
  )
}

export default Lectures