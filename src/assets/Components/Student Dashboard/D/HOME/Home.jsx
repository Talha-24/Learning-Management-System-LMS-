import React from 'react'
import NavBar from '../../NavBar/NavBar'
import "./Home.css";
import Header from '../../Header/Header';
import Advertisement from '../../HomeMain/Advertisement';
import Courseinfomain from '../../HomeMain/CourseInfomain';
import Semesters from '../../My Courses/Semesters';

const Home = () => {
  return (
    <div id='Home' className='w-[100%] h-[100vh] flex felx-row justify-between '>
      <div className='w-[20%]'>
        <NavBar/>
        </div>
        <div className="w-[70%] bg-amber-300 h-[100%]">
        <Header/>
        <Semesters/>
        {/* <Advertisement/>
        <Courseinfomain/> */}
        </div>
       
    </div>
  )
}

export default Home