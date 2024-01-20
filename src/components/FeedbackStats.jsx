const FeedbackStats = ({feedback}) => {
    const average = feedback.reduce((acc , curr) => {
        console.log(curr , "current")
        return acc += curr.rating
    } , 0) / feedback.length
    return (
        <>
        <div>No. of Reviews = {feedback.length}</div>
        <div>Average = {average}</div>
        </>
    )
}

export default FeedbackStats;
import React from 'react'
