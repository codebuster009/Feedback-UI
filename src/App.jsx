import './App.css'
import Header from './components/Header.jsx'
import FeedbackList from './components/FeedbackList.jsx'
import { useState } from 'react'
import FeedbackData from './utils/FeedbackData.js'
import Card from './components/shared/Card.jsx'

function App() {
  const [feedback , setFeedback] = useState(FeedbackData)
  return (
    <>
    <Header text = "Hello World"/>
    <div className="container">
    {FeedbackData.map((feedback) => {
      return (<FeedbackList key = {feedback.id} feedback={feedback}/>)
    })}
    <Card>
    Hello World
    </Card>
    </div>
    </>
  )
}

export default App
