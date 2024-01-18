import React, { useState } from 'react'

const FeedbackList = (props) => {
  console.log(props.feedback)
    const handleClick = ()  => {
        setRating((prevState) => prevState === 7 ? 10 : 7)
    }
  return (
    <div>
      <>
      <div className="card">
        <div className="num-display">{props.feedback.rating}</div>
        <div className="text-display">{props.feedback.text}</div>
        <button onClick={handleClick}>Change Rating</button>
      </div>
      </>
    </div>
  )
}

export default FeedbackList;


