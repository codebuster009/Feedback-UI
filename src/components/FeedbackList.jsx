import React, { useState } from 'react'
import Card from "../components/shared/Card"

const FeedbackList = (props) => {
    if(!props.feedback || props.feedback.length === 0) {
      return (<p>No feedback yet</p>)
    }
    const handleClick = ()  => {
      console.log(1)
    }
  return (
    <div>
      <Card reverse = {true}>
        <div className="num-display">{props.feedback.rating}</div>
        <div className="text-display">{props.feedback.text}</div>
        <button onClick={handleClick}>Change Rating</button>
      </Card>
    </div>
  )
}

export default FeedbackList;


