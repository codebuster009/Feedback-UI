import React from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
    const params = useParams()
  return (
    <div>
    This post {params.id} of {params.name}
    </div>
  )
}

export default Post
