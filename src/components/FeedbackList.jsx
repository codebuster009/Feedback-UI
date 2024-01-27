import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import motion and AnimatePresence
import Card from '../components/shared/Card';
import { FaEdit, FaTimes } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext.jsx';

const FeedbackList = ({ newFeedback }) => {
    const { feedback, deleteFeedback , editFeedback } = useContext(FeedbackContext);

    if (!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>;
    }

    return (
        <AnimatePresence>
            {feedback.map((item) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <Card reverse={true}>
                        <div className="num-display">{item.rating}</div>
                        <button onClick={() => deleteFeedback(item.id)}>
                            <FaTimes />
                        </button>
                        <button style={{ backgroundColor: 'transparent', border: 'none' }}>
                            <FaEdit color='purple' onClick={() => editFeedback(item)}/>
                        </button>
                        <div className="text-display">{item.text}</div>
                    </Card>
                </motion.div>
            ))}
        </AnimatePresence>
    );
};

export default FeedbackList;
