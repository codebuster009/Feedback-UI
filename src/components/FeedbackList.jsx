import React, { useState } from 'react'
import Card from "../components/shared/Card"
import {FaTimes} from 'react-icons/fa'

const FeedbackList = ({feedback , deleteFeedback , newFeedback}) => {
  console.log('Rendering FeedbackList with feedback:', feedback);
  console.log('Rendering FeedbackList with feedback:', newFeedback);
    if(!feedback || feedback.length === 0) {
      return (<p>No feedback yet</p>)
    }
  return (
    <div>
      <Card reverse = {true}>
        <div className="num-display">{feedback.rating}</div>
        <button onClick={()=> deleteFeedback(feedback.id)}><FaTimes/></button>
        <div className="text-display">{feedback.text}</div>
      </Card> 
    </div>
  )
}

export default FeedbackList;


