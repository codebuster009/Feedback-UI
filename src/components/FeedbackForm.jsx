import React, { useContext, useEffect, useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingComponent from './RatingComponent'
import FeedbackContext from '../context/FeedbackContext'
const FeedbackForm = () => {
  const {addFeedback} = useContext(FeedbackContext)
  const [text , setText] = useState("")
  const [disabled , setdisabled] = useState(true)
  const [message , setMessage] = useState(null)
  const [rating , setRating] = useState(null)
  const {feedbackEdit} = useContext(FeedbackContext)
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
      addFeedback(newFeedback)
    }
  }
  useEffect(()=> {
    if(feedbackEdit.edit === true) {
      setdisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)

    }
  } , [feedbackEdit])
  return (
    <Card>
      <form onSubmit={handleSubmit}>
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
