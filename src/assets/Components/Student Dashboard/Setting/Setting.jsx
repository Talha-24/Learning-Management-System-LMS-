import React from 'react'
import SettingMain from './SettingMain'
import SettingHead from './SettingHead'

const Setting = () => {
  return (
    <div id='settingcontainer' className='w-[77%] flex flex-col'>
       <SettingHead/>
        <SettingMain/>
    </div>
  )
}

export default Setting