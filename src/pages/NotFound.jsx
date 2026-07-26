import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigation = useNavigate()
  return (
    <div>
      <button
        onClick={() => navigate("/Home")}
      >Go Home</button>
    </div>
  )
}

export default NotFound