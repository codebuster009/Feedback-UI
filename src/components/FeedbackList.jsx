import React, { useState } from 'react'
import Card from "../components/shared/Card"
import {FaTimes} from 'react-icons/fa'

const FeedbackList = (props) => {
    if(!props.feedback || props.feedback.length === 0) {
      return (<p>No feedback yet</p>)
    }
    const handleClick = (id)  => {
      console.log(id)
    }
  return (
    <div>
      <Card reverse = {true}>
        <div className="num-display">{props.feedback.rating}</div>
        <button onClick ={() => handleClick(props.feedback.id)}><FaTimes/></button>
        <div className="text-display">{props.feedback.text}</div>
        <button onClick={handleClick}>Change Rating</button>
      </Card>
    </div>
  )
}

export default FeedbackList;


