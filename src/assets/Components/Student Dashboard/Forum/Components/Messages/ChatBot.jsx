import React, { useEffect } from 'react'
import "./Header.css";
import axios from 'axios';
import { GoogleGenerativeAI } from '@google/generative-ai';
const ChatBot = () => {
   


  return (
    <span id='aibot' className='flex flex-col overflow-scroll relative bg-white rounded-lg'>
      <span id='Lecturers' className=''>
        <span id='name'>
          <span id="image">
            <img src="https://static.vecteezy.com/system/resources/previews/007/225/199/non_2x/robot-chat-bot-concept-illustration-vector.jpg" alt="" />
          </span>
          <span id="message"><b>ChatGPT</b><p className="text-[1vmin]">Hi there ! how can I help you?</p>
          </span></span>
        <span id="time">
          <p>Online</p><p>12:00pm</p>
        </span>
      </span>
      
    </span>
  )
}

export default ChatBot