import React from 'react'
import Courses from './Courses/Courses'
import SemesterCount from './Courses/SemesterCount'
import SemesterLesson from './SemesterLesson'

const Semesters = () => {
  return (
    <>
      <div className="flex flex-col w-[100%] gap-[10%] h-[60%]">
        <Courses />
        <SemesterCount/>
        <SemesterLesson/>
      </div>
    </>
  )
}

export default Semesters