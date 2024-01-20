import "./App.css";
import Header from "./components/Header.jsx";
import FeedbackList from "./components/FeedbackList.jsx";
import { useState } from "react";
import FeedbackData from "./utils/FeedbackData.js";
import Card from "./components/shared/Card.jsx";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    if(window.confirm("Are you sure want to delete")) {
      console.log("Deleting feedback with ID:", id);
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header text="Hello World" />
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
