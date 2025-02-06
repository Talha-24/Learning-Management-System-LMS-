import React from 'react'
import "./Assignment.css"
import LectureTiming from './Components/LectureTiming'
import AssignmentHead from '../Assignment/Components/AssignmentHead'
import AssignmentSemester from '../Assignment/Components/AssignmentSemester'
import TimeTableHead from './Components/TimeTableHead'
import LectureType from './Components/LectureType'

const TimeTable = () => {
    return (
        <>
        <div id="maindatacontainer" className="w-[75%]  h-[90%] flex flex-col gap-[2vmax]">
    <TimeTableHead/>
    <LectureType/>
   <LectureTiming/>
     </div>
        </>
    )
}

export default TimeTable