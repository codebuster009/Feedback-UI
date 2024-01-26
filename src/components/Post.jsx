import React from 'react'
import { Navigate , useNavigate } from 'react-router-dom'

const Post = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/');
      };
    const status = 200
    if(status === 404) {
       return <Navigate to = '/notFound'/>
    }
  return (
    <>
    <div>
    This post
    </div>
    <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default Post
