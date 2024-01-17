import React, { useState } from 'react'

const FeedbackItem = () => {
    const [rating , setRating] = useState(7);
    const [text , setText] = useState("This is a feedback card");
    const handleClick = ()  => {
        setRating((prevState) => prevState === 7 ? 10 : 7)
    }
  return (
    <div>
      <>
      <div className="card">
        <div className="num-display">{rating}</div>
        <div className="text-display">{text}</div>
        <button onClick={handleClick}>Change Rating</button>
      </div>
      </>
    </div>
  )
}

export default FeedbackItem;


