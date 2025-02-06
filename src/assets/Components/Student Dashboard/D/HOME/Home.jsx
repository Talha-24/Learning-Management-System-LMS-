import React from 'react'
import NavBar from '../../NavBar/NavBar'
import "./Home.css";
import Assignment from '../../Assignment/Components/Assignment';
import Forum from '../../Forum/Forum';
import MyCourses from '../../My Courses/Courses/MyCourses';
import MyCoursescomponent from '../../My Courses/MyCoursesComponent';
import TimeTable from '../../Time Table/TimeTable';

const Home = () => {
  return (
    <div id='Home' className='w-[100%] h-[100vh] flex flex-row justify-between'>
      <div id="navbarcontainer" className='w-[20%] h-[100%]'>
        <NavBar/>
        </div>
        <img  id='navoptions' src="src\assets\Components\Student Dashboard\D\HOME\image copy.png" alt="" />
         {/* <div id="maindatacontainer" className="w-[78%]  h-[100%]"> */}
       {/* <MyCourses/> */}
        {/* <Advertisement/>
        <Courseinfomain/> */}
       {/* <Assignment/> */}
       {/* <AssignmentHead/>
       <SemesterCount/>
       <AssignmentStatus/> */}
        {/* </div> */}
        {/* <Assignment/> */}
        {/* <Forum/> */}
        {/* <Assignment/> */}
        {/* <MyCoursescomponent/> */}
        {/* <Assignment/> */}
        <TimeTable/>

    </div>
  )
}

export default Home