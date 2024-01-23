import "./App.css";
import FeedbackList from "./components/FeedbackList.jsx";
import { useState } from "react";
import FeedbackData from "./utils/FeedbackData.js";
import Card from "./components/shared/Card.jsx";
import FeedbackStats from "./components/feedbackStats.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import RatingComponent from "./components/RatingComponent.jsx";
import { useId } from 'react';


function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const numbers = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
    { id: 6, value: 6 },
    { id: 7, value: 7 },
    { id: 8, value: 8 },
    { id: 9, value: 9 },
    { id: 10, value: 10 }
  ];
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
      <Card>
      <div className="rating-parent">
      {numbers.map((num)=> {
        return(
          <RatingComponent key={num.id} num = {num.value}/>
        )
      })}
      </div>
      </Card>
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
