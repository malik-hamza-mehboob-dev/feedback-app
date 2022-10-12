import React from 'react'
import { FeedbackProvider } from './context/FeedbackContext';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

export default function App() {

  return (
    <FeedbackProvider>
        <Header text="Feedback UI" />
        <div className='container'>
            <FeedbackForm  />
            <FeedbackStats />
            <FeedbackList />
        </div>
    </FeedbackProvider>
  )
}
