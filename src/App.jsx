import "./App.css";
import FeedbackList from "./components/FeedbackList.jsx";
import { useContext, useState } from "react";
import FeedbackStats from "./components/feedbackStats.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Post from "./components/Post.jsx";
import FeedbackContext, {
  FeedbackProvider,
} from "./context/FeedbackContext.jsx";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Routes>
          <Route
            path="/feedback"
            element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList/>
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/post/*" element={<Post />} />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
