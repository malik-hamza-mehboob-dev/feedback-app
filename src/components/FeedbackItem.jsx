import { useState } from 'react'
 
function FeedbackItem() {
    const [rating, setRating] = useState(7);
    const [feedback, setFeedback] = useState('This is an example text')

  return (
    <div className="card">
        <div className="num-display">{rating}</div>
        <div className="text-display">{feedback}</div>
    </div>
  )
}

export default FeedbackItem