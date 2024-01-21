import React, { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
const FeedbackForm = () => {
  const [text , setText] = useState("")
  const [disabled , setdisabled] = useState(true)
  return (
    <Card>
      <form>
        <input type="text" onChange={(e) => {setText(e.target.value)}} placeholder = "Type your name" value={text}/>
        <Button type='submit' version = 'primary'>Send</Button>
      </form>
    </Card>
  )
}

export default FeedbackForm;
