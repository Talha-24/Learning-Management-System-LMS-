import React from 'react'
import NavBar from '../../NavBar/NavBar'
import "./Home.css";
import Setting from '../../Setting/Setting';
import Assignment from '../../Assignment/Components/Assignment';
import MyCourses from '../../My Courses/Courses/MyCourses';
import MyCoursescomponent from '../../My Courses/MyCoursesComponent';
import HomeMain from './HomeMain';
import TimeTable from '../../Time Table/TimeTable';
import Forum from '../../Forum/Forum';
import { Route, Routes } from 'react-router-dom';

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
        {/* <Forum/> */}
        {/* <Setting/> */}
        {/* <TimeTable/> */}
        
        {/* <MyCoursescomponent/> */}
        {/* <Setting/> */}
      {/* <MyCoursescomponent/> */}
      <Routes>
      <Route path='/' element={<HomeMain/>} />
      <Route path='/courses' element={<MyCoursescomponent/>} />
      <Route path='/assignments' element={<Assignment/>} />
      <Route path='/timetable' element={<TimeTable/>} />
      <Route path='/forum' element={<Forum/>} />
      <Route path='/setting' element={<Setting/>} />
      {/* <HomeMain/> */}
      </Routes>


    </div>
  )
}

export default Home