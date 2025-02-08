import React, { useEffect } from 'react'
import "./Header.css";
import axios from 'axios';
import { GoogleGenerativeAI } from '@google/generative-ai';
const ChatBot = ({setimgdata}) => {
   console.log("ChatBot",setimgdata)
  

  return (
    <span  onClick={(e)=>{console.log(e.target.childNodes)}} id='aibot'  className='flex flex-col overflow-scroll relative bg-white rounded-lg'>
      <span id='Lecturers' className=''>
        <span  id='name'>
          <span id="image">
            <img onClick={(e)=>{
       setimgdata({image:e.target.src,name: "ChatGPT" });
              }} src="https://static.vecteezy.com/system/resources/previews/007/225/199/non_2x/robot-chat-bot-concept-illustration-vector.jpg" alt="" />
          </span>
          <span id="message"><b onClick={(e)=>{setimgdata({ image: `https://static.vecteezy.com/system/resources/previews/007/225/199/non_2x/robot-chat-bot-concept-illustration-vector.jpg`, name:e.target.innerText, })}}>ChatGPT</b><p className="text-[1vmin]">Hi there ! how can I help you?</p>
          </span></span>
        <span id="time">
          <p>Online</p><p></p>
        </span>
      </span>
      
    </span>
  )
}

export default ChatBot