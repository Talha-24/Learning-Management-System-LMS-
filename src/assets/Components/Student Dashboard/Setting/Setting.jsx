import React from 'react'
import "./Setting.css"
const Setting = () => {
  return (
    <div id='setting'>
      <div className="feature flex flex-row justify-between w-[95%]" >
        <div id="featureproperties" className="flex flex-row gap-[2vw]">
          <img id="symbol" src="src\assets\Components\Student Dashboard\Setting\Assets\Bellsvg.svg" alt="" />


          <p className='featuretext'>Notification</p>
        </div>
        <img id="backward" className='' src="src\assets\Components\Student Dashboard\Setting\Assets\Backward.svg" alt="" />
      </div>
    </div>
  )
}

export default Setting