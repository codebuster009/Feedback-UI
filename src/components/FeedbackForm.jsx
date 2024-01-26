import React, { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingComponent from './RatingComponent'
const FeedbackForm = () => {
  const [text , setText] = useState("")
  const [disabled , setdisabled] = useState(true)
  const [message , setMessage] = useState(null)
  const [rating , setRating] = useState(1)
  function handleText(e) {
    if(text.trim().length <= 10) {
      setdisabled(true)
      setMessage("Text must be atleast 10 characters")
    } else if (text === "" ) {
      setdisabled(true)
      setMessage("")
    }else{
      setdisabled(false)
    }
    setText(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    if(text.trim().length > 10) {
      const newFeedback = {
        text,
        rating
      }
      console.log(newFeedback)
    }
  }
  return (
    <Card>
      <form onClick={handleSubmit}>
        <input type="text" onChange={handleText} placeholder = "Type your name" value={text}/>
        {message && message}
        <Card>
      <div className="rating-parent">
      <RatingComponent select = {(rating) => {setRating(rating)}}/>
      </div>
      </Card>
        <Button type='submit' version = 'primary' disabled={disabled}>Send</Button>
      </form>
    </Card>
  )
}

export default FeedbackForm;
