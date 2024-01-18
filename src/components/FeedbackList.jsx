import React, { useState } from 'react'
import Card from "../components/shared/Card"

const FeedbackList = (props) => {
  console.log(props.feedback)
    const handleClick = ()  => {
        setRating((prevState) => prevState === 7 ? 10 : 7)
    }
  return (
    <div>
      <Card>
        <div className="num-display">{props.feedback.rating}</div>
        <div className="text-display">{props.feedback.text}</div>
        <button onClick={handleClick}>Change Rating</button>
      </Card>
    </div>
  )
}

export default FeedbackList;


