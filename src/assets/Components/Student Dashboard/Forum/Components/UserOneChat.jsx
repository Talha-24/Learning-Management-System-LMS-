import React from 'react'

const UserOneChat = (propse) => {
    console.log("Two ",propse)
  return (
    <span id='useronechat'>{
        propse.data.Message

    }</span>
  )
}

export default UserOneChat