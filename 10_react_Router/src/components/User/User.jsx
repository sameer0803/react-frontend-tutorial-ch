import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const {userid} = useParams();
  return (
    <div className=" text-center py-16 text-white  bg-gray-900"> 
      <h1>User:{userid}</h1>
    </div>
  )
}

export default User
