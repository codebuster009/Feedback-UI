import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import uuid from "react-uuid";
import FeedbackList from "./components/FeedbackList.jsx";
import { useState } from "react";
import FeedbackData from "./utils/FeedbackData.js";
import Card from "./components/shared/Card.jsx";
import FeedbackStats from "./components/feedbackStats.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Post from "./components/Post.jsx";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  const [newFeedback, setnewFeedback] = useState(null);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure want to delete")) {
      console.log("Deleting feedback with ID:", id);
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newfeedback) => {
    newfeedback.id = uuid();
    setFeedback([newfeedback, ...feedback]);
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/feedback"
          element={
            <>
              <FeedbackForm addFeedback={addFeedback} />
              <FeedbackStats feedback={feedback} />
              <div className="container">
                <AnimatePresence>
                  {feedback.map((feedbackItem) => (
                    <motion.div
                      key={feedbackItem.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <FeedbackList
                        key={feedbackItem.id}
                        feedback={feedbackItem}
                        deleteFeedback={(id) => deleteFeedback(id)}
                        newFeedback={newFeedback}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
                <Card reverse={false}>Hello World</Card>
              </div>
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/post/:id/:name" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
