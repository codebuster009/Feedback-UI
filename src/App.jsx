import './App.css'
import Header from './components/Header.jsx'
import FeedbackItem from './components/FeedbackItem.jsx'

function App() {
  return (
    <>
    <Header text = "Hello World"/>
    <div className="container">
    <FeedbackItem/>
    </div>
    </>
  )
}

export default App
