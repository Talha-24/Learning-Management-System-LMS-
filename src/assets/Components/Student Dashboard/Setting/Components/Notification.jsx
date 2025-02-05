import React from 'react'

const Notification = () => {
  return (
    <div className="feature flex flex-row justify-between w-[100%]" >
        <div id="featureproperties" className="flex flex-row gap-[2vw] w-fit">
          <img id="symbol" src="src\assets\Components\Student Dashboard\Setting\Assets\Bellsvg.svg" alt="" />


          <p className='featuretext'>Notification</p>
        </div>
        <img id="backward" className='' src="src\assets\Components\Student Dashboard\Setting\Assets\Backward.svg" alt="" />
      </div>
  )
}

export default Notification