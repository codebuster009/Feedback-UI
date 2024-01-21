import React, { useState } from 'react'
import Card from './shared/Card'
const FeedbackForm = () => {
  const [text , setText] = useState("")
  return (
    <Card>
      <form>
        <input type="text" onChange={(e) => {setText(e.target.value)}} placeholder = "Type your name" value={text}/>
        <button type='submit'>Send</button>
      </form>
    </Card>
  )
}

export default FeedbackForm;
