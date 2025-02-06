import React from 'react'
import "./Assignment.css"
import LectureTiming from './Components/LectureTiming'
import AssignmentHead from '../Assignment/Components/AssignmentHead'
import AssignmentSemester from '../Assignment/Components/AssignmentSemester'

const TimeTable = () => {
    return (
        <>
        <div id="maindatacontainer" className="w-[75%]  h-[100%] flex flex-col gap-[3vmax]">
    {/* <MyCourses/> */}
     {/* <Advertisement/>
     <Courseinfomain/> */}
    {/* <Assignment/> */}
    <AssignmentHead/>
   
    <AssignmentSemester/>
    {/* <AssignmentStatus/> */}
   <LectureTiming/>
 
     </div>
        </>
    )
}

export default TimeTable