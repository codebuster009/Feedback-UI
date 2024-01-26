import "./App.css";
import FeedbackList from "./components/FeedbackList.jsx";
import { useState } from "react";
import FeedbackData from "./utils/FeedbackData.js";
import Card from "./components/shared/Card.jsx";
import FeedbackStats from "./components/feedbackStats.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import { useId } from 'react';


function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const passwordHint = useId()
  const deleteFeedback = (id) => {
    if(window.confirm("Are you sure want to delete")) {
      console.log("Deleting feedback with ID:", id);
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <FeedbackForm/>
      <FeedbackStats feedback = {feedback}/>
      <div className="container">
        {feedback.map((feedback) => {
          return (
            <FeedbackList
              key={feedback.id}
              feedback={feedback}
              deleteFeedback={(id) => deleteFeedback(id)}
            />
          );
        })}
        <Card reverse={false}>Hello World</Card>
      </div>
    </>
  );
}

export default App;
