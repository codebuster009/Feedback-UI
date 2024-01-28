import { createContext , useState } from "react";
import uuid from "react-uuid";
const FeedbackContext = createContext()
export const FeedbackProvider = ({children}) => {
    const [feedback , setFeedback] = useState([
        {
            id : 1,
            text : 'This is a feedback from context',
            rating : 10
        }
    ])
    const [feedbackEdit , setfeedbackEdit] = useState({
        item : {},
        edit : false,
    })
    const editFeedback = (item) => {
        setfeedbackEdit({
            item,
            edit : true,
        })
      };
      console.log(feedbackEdit , "add")
    const addFeedback = (newfeedback) => {
        newfeedback.id = uuid();
        setFeedback([newfeedback, ...feedback]);
      };
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure want to delete")) {
          console.log("Deleting feedback with ID:", id);
          setFeedback(feedback.filter((item) => item.id !== id));
        }
    }
    return <FeedbackContext.Provider value = {{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;
