import React from 'react'
import { useState } from 'react';
import Header from "./components/Header";
import Data from './data/FeedbackData'
import FeedbackList from "./components/FeedbackList";

export default function App() {
  const [feedbackData, setFeedbackData] = useState(Data);

  const deleteFeedback = (id) => {
      if(window.confirm('Are you sure?'))
      {
        setFeedbackData(feedbackData.filter((item) => item.id !== id));  
      }
  }
  return (
    <>
        <Header text="hello" />
        <div className='container'>
            <FeedbackList feedback={feedbackData} handleClick={deleteFeedback}/>
        </div>
    </>
  )
}
