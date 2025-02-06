import React from 'react'
import AssignmentHead from './AssignmentHead'
import SemesterCount from '../../My Courses/Courses/SemesterCount'
import AssignmentStatus from './AssignmentStatus'
import AssignmentSemester from './AssignmentSemester'
import TimeTable from '../../Time Table/TimeTable'
const Assignment = () => {
  return (
    <>
    <div id="maindatacontainer" className="w-[75%]  h-[100%] flex flex-col gap-[3vmax]">
    {/* <MyCourses/> */}
     {/* <Advertisement/>
     <Courseinfomain/> */}
    {/* <Assignment/> */}
    <AssignmentHead/>
    <AssignmentSemester/>
    <AssignmentStatus/>
     </div>
     </>
  )
}

export default Assignment