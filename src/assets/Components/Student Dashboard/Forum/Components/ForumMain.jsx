import React from 'react'
import TeacherMessage from './Messages/TeacherMessage'
import StudentMessage from './Messages/StudentMessage'
import SearchBox from './SearchBox'
import ChatBot from './Messages/ChatBot'
import "./Header.css";
const ForumMain = ({setimgdata}) => {

    console.log(setimgdata);

    return (

        <div  id='formMain'className='flex flex-col w-[40%] gap-[2%] h-[98%] '>

           <SearchBox/>
           <ChatBot  setimgdata={setimgdata} />
            <TeacherMessage />
            <StudentMessage/>

        </div>
    )
}

export default ForumMain