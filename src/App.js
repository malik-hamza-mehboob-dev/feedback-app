import React from 'react'
import { useState } from 'react';
import { FeedbackProvider } from './context/FeedbackContext';
import Header from "./components/Header";
import Data from './data/FeedbackData'
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

export default function App() {
  const [feedbackData, setFeedbackData] = useState(Data);

  const handleAdd = (newFeedback) => {
    setFeedbackData([newFeedback,...feedbackData]);
  }

  const deleteFeedback = (id) => {
      if(window.confirm('Are you sure?'))
      {
        setFeedbackData(feedbackData.filter((item) => item.id !== id));  
      }
  }
  return (
    <FeedbackProvider>
        <Header text="Feedback UI" />
        <div className='container'>
            <FeedbackForm feedbackAdd={handleAdd} />
            <FeedbackStats />
            <FeedbackList handleClick={deleteFeedback}/>
        </div>
    </FeedbackProvider>
  )
}
