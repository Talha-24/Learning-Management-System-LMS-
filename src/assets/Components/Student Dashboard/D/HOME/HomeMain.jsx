import React from 'react'
import AssignmentHead from '../../Assignment/Components/AssignmentHead';
import AssignmentSemester from '../../Assignment/Components/AssignmentSemester';
import AssignmentStatus from '../../Assignment/Components/AssignmentStatus';
import HomeHeader from './Components/HomeHeader';
import HomeAdd from './Components/HomeAdd';
import MyCourses from '../../My Courses/Courses/MyCourses';
import MyCoursescomponent from '../../My Courses/MyCoursesComponent';
import Courses from '../../My Courses/Courses/Courses';
import StudentProgress from './Components/StudentProgress';
import StudentCourses from './Components/StudentCourses';
import Notification from '../../../Features/Notification/Notification';
const HomeMain = () => {
  return (
    <div id="maindatacontainer" className="w-[75%]  h-[100%] flex flex-col gap-[3vmax]">
    {/* <MyCourses/> */}
     {/* <Advertisement/>
     <Courseinfomain/> */}
    {/* <Assignment/> */}
    <HomeHeader/>
    <Notification/>
    {/* <AssignmentSemester/> */}
    <HomeAdd/>
    {/* <AssignmentStatus/> */}
   <StudentCourses/>
   <StudentProgress/>
     </div>
  )
}

export default HomeMain