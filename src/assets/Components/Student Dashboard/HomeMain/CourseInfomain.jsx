import React from 'react'

const Courseinfomain = () => {
  return (
        <div id="coursesinformation">

            <div id='courses'>
                <div className="course">
                  <img className='w-[100%] h-[100%]' src="src\assets\Components\Student Dashboard\D\HOME\image.png" alt="" />
                  <p>Diploma in English</p>
                  <p>OXF/ENG/01</p>
                  </div>
                {/* <div className="course">Course2</div>
                <div className="course">Course3</div> */}
            </div>


            <div id="coursesmain">
              <div className='w-[100%]'>
            <div className="coursestatus">Status 1</div>
            <div className="coursestatus">Status 2</div>
            </div>
            <div className='w-[100%]'>
            <div className="coursestatus">Status 3</div>
            <div className="coursestatus">Status 4</div>
            </div>
            </div>
        </div>
   
  )
}

export default Courseinfomain