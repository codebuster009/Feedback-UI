import React, { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
const FeedbackForm = () => {
  const [text , setText] = useState("")
  const [disabled , setdisabled] = useState(true)
  const [message , setMessage] = useState(null)
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
  return (
    <Card>
      <form>
        <input type="text" onChange={handleText} placeholder = "Type your name" value={text}/>
        {message && message}
        <Button type='submit' version = 'primary' disabled={disabled}>Send</Button>
      </form>
    </Card>
  )
}

export default FeedbackForm;
