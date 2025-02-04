import React from 'react'
import "./Setting.css"
import Notification from './Components/Notification'
import ChangePassword from './Components/ChangePassword'
import Security from './Components/Security'
import Friends from './Components/Friends'
import TwoStepVerifi from './Components/TwoStepVerifi'
import DisplayLanguages from './Components/DisplayLanguages'
import Help from './Components/Help'
const Setting = () => {
  return (
    <div id='setting'>
      {/* <div className="feature flex flex-row justify-between w-[95%]" >
        <div id="featureproperties" className="flex flex-row gap-[2vw]">
          <img id="symbol" src="src\assets\Components\Student Dashboard\Setting\Assets\Bellsvg.svg" alt="" />


          <p className='featuretext'>Notification</p>
        </div>
        <img id="backward" className='' src="src\assets\Components\Student Dashboard\Setting\Assets\Backward.svg" alt="" />
      </div> */}
      <Notification/>
      <ChangePassword/>
      <Security/>
      <Friends/>
      <TwoStepVerifi/>
      <DisplayLanguages/>
      <Help/>
    </div>
  )
}

export default Setting