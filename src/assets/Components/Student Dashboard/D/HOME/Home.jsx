import React from 'react'
import NavBar from '../../NavBar/NavBar'
import "./Home.css";
import Header from '../../Header/Header';
import Advertisement from '../../HomeMain/Advertisement';
import Courseinfomain from '../../HomeMain/CourseInfomain';

const Home = () => {
  return (
    <div id='Home' className='w-[100%] h-[100vh] relative'>
      
        <NavBar/>
        <div className="w-[80%] h-[100%] absolute top-[2%] left-[18%]">
        <Header/>
        <Advertisement/>
        <Courseinfomain/>
        </div>
       
    </div>
  )
}

export default Home