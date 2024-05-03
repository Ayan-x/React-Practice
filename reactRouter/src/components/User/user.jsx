import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userId} = useParams();
  return (
    <div>User Id:{userId}</div>
  )
}

export default User