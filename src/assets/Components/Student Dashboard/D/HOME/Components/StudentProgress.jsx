import React from 'react'
import "./Home.css";
const StudentProgress = () => {
    return (
        <div id='progresscontainer' className='w-[100%]  flex flex-row gap-[20%]'>
            <div id='progress' className="w-[40%]">
                <div id='moduleprogress'><p>Module Progress : </p><p>90%</p></div>
                <div id='attendanceprogress'><p>Attendance Progress :</p><p>97%</p></div>
            </div>
            <div id='progress' className="w-[40%]">

                <div id='moduleprogress'><p>Module Progress : </p><p>90%</p></div>
                <div id='attendanceprogress'><p>Attendance Progress :</p><p>97%</p></div>
            </div>
        </div>
    )
}

export default StudentProgress