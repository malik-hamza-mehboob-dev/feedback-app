import React from 'react'
import { useState } from 'react';
import Header from "./components/Header";
import Data from './data/FeedbackData'
import FeedbackList from "./components/FeedbackList";

export default function App() {
  const [feedbackData, setFeedbackData] = useState(Data);
  return (
    <>
        <Header text="hello" />
        <div className='container'>
            <FeedbackList feedback={feedbackData}/>
        </div>
    </>
  )
}
