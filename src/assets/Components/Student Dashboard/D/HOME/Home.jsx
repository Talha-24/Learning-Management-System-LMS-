import React from 'react'
import NavBar from '../../NavBar/NavBar'
import "./Home.css";
import Advertisement from '../../HomeMain/Advertisement';
import Courseinfomain from '../../HomeMain/CourseInfomain';
import Semesters from '../../My Courses/Semesters';
import MyCourses from '../../My Courses/Courses/MyCourses';

const Home = () => {
  return (
    <div id='Home' className='w-[100%] h-[100vh] flex felx-row justify-between '>
      <div id="navbarcontainer" className='w-[20%] h-[100%]'>
        <NavBar/>
        </div>
        <div id="maindatacontainer" className="w-[78%]  h-[100%]">
       <MyCourses/>
        <Semesters/>
        {/* <Advertisement/>
        <Courseinfomain/> */}
        </div>
       
    </div>
  )
}

export default Home