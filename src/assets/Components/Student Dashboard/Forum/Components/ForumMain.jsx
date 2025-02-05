import React from 'react'
import TeacherMessage from './Messages/TeacherMessage'
import StudentMessage from './Messages/StudentMessage'
import SearchBox from './SearchBox'

const ForumMain = () => {
    return (
        <div className='flex flex-col w-[40%] gap-[2%] h-[90%] '>
           <SearchBox/>
            <TeacherMessage />
            <StudentMessage/>
        </div>
    )
}

export default ForumMain