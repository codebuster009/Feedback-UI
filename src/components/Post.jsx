import React from 'react'
import { Routes , Route } from 'react-router-dom'
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
    <Routes>
        <Route path ='/show' element = {<h1>Hello Show</h1>}/>
    </Routes>
    </>
  )
}

export default Post
