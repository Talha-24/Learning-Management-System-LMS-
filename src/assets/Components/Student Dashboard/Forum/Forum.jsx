import React from 'react'
import FormHead from './Components/ForumHead'
import ForumMain from './Components/ForumMain'
import ForumChat from "./Components/FormChat"
const Forum = () => {
  return (
    <div id="maindatacontainer" className="w-[75%]  h-[100%] flex flex-col gap-[3.2%] ">
        <FormHead/>
        <div className='flex flex-row gap-[2%] w-[100%] h-[100%]'>
        <ForumMain/>
        <ForumChat/>
        </div>
     </div>
  )
}

export default Forum