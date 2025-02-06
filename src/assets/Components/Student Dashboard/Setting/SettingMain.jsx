import React from 'react'
import "./Setting.css"
import Notification from './Components/Notification'
import ChangePassword from './Components/ChangePassword'
import Security from './Components/Security'
import Friends from './Components/Friends'
import TwoStepVerifi from './Components/TwoStepVerifi'
import DisplayLanguages from './Components/DisplayLanguages'
import Help from './Components/Help'
const SettingMain = () => {
  return (
    <>
    <div className='flex flex-col gap-[4vmax] w-[40%]'>
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
    <span id='logout' className='self-end'>
          <img src="src\assets\Components\Student Dashboard\Time Table\Components\country flag.svg" alt="" />
          <p className='cursor-pointer active:scale-[0.98]'>logout</p>
    </span>
    </div>

    </>
  )
}

export default SettingMain