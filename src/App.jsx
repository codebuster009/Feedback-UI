import "./App.css";
import uuid from 'react-uuid';
import FeedbackList from "./components/FeedbackList.jsx";
import { useState } from "react";
import FeedbackData from "./utils/FeedbackData.js";
import Card from "./components/shared/Card.jsx";
import FeedbackStats from "./components/feedbackStats.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import { useId } from 'react';


function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [newFeedback, setnewFeedback] = useState(null);
  const deleteFeedback = (id) => {
    if(window.confirm("Are you sure want to delete")) {
      console.log("Deleting feedback with ID:", id);
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  const addFeedback = (newfeedback) => {
    newfeedback.id = uuid()
    setFeedback([newfeedback ,...feedback])
  }
  return (
    <>
      <FeedbackForm addFeedback = {addFeedback}/>
      <FeedbackStats feedback = {feedback}/>
      <div className="container">
        {feedback.map((feedback) => {
          return (
            <FeedbackList
              key={feedback.id}
              feedback={feedback}
              deleteFeedback={(id) => deleteFeedback(id)}
              newFeedback = {newFeedback}
            />
          );
        })}
        <Card reverse={false}>Hello World</Card>
      </div>
    </>
  );
}

export default App;
