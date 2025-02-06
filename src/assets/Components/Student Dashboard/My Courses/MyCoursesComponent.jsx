import React from 'react'
import "./Home.css";
import MyCourses from './Courses/MyCourses';
import Semesters from './Semesters';
import NavBar from '../NavBar/NavBar';


const MyCoursescomponent = () => {
  return (
    <>
    {/* // <div id='Home' className='w-[100%] h-[100vh] flex felx-row justify-between '> */}
      {/* <div id="navbarcontainer" className='w-[20%] h-[100%]'>
     <NavBar/>
        </div> */}
        <div id="maindatacontainer" className="w-[78%]  h-[100%]">
      <MyCourses/>
       <Semesters/>
        </div>
       
    {/* // </div> */}
    </>
  )
}

export default MyCoursescomponent