import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackStats = () => {
    const { feedback } = useContext(FeedbackContext); 

    const average = feedback.length > 0
        ? feedback.reduce((acc, curr) => acc + curr.rating, 0) / feedback.length
        : NaN;

    return (
        <>
            <div>No. of Reviews = {feedback.length}</div>
            <div>Average = {isNaN(average) ? "No Reviews as of yet" : average}</div>
        </>
    );
}

export default FeedbackStats;
