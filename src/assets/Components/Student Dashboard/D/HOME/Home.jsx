import React, { useEffect } from 'react'
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
import StudentInfo from '../../../Others/StudentInfo';
import Home_Data from './Home_Data';

const Home = () => {
let turn = true;
  function NavbarHandler(){
       Home_Data();
       if( turn == true){
        document.querySelector("#navbarcontainer").style.display='inline-block';
        document.querySelector("#navbarcontainer").style.position='absolute';
        document.querySelector("#navbarcontainer").style.zIndex='9';
    turn = false;
  }else{
    document.querySelector("#navbarcontainer").style.display='none';
    turn = true;
  }


      
  }

  






  return (
    <div id='Home' className='w-[100%] h-[100vh] flex flex-row justify-between'>
      <div id="navbarcontainer" className='w-[20%] h-[100%]'>
        <NavBar />
      </div>
      <img onClick={() => {
        NavbarHandler();
      }} id='navoptions' src="src\assets\Components\Student Dashboard\D\HOME\Notification Icons.svg" alt="" />
      <Routes>
        <Route path='/studentinfo' element={<StudentInfo />} />
        <Route path='/' element={<HomeMain />} />
        <Route path='/courses' element={<MyCoursescomponent />} />
        <Route path='/assignments' element={<Assignment />} />
        <Route path='/timetable' element={<TimeTable />} />
        <Route path='/forum' element={<Forum />} />
        <Route path='/setting' element={<Setting />} />
      </Routes>


    </div>
  )
}

export default Home