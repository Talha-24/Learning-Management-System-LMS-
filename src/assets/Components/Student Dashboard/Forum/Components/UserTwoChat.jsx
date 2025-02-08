import React from 'react'

const UserTwoChat = (propse) => {
    console.log("One ",propse)
  return (
    <span id='usertwochat'>{
        
        propse.data.Message
    }</span>
  )
}

export default UserTwoChat