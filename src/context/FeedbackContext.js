import React,{createContext, useState} from 'react'

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
      {
        id:1,
        feedback:'This is from context API',
        rating:10
      },
      {
        id:2,
        feedback:'This is from context API',
        rating:10
      },
      {
        id:3,
        feedback:'This is from context API',
        rating:10
      },
   ]);

    const deleteFeedback = (id) => {
      if(window.confirm('Are you sure?'))
      {
        setFeedback(feedback.filter((item) => item.id !== id));  
      }
    }

    const addFeedback = (newFeedback) => {
      setFeedback([newFeedback,...feedback]);
    }
  return (
    <FeedbackContext.Provider
     value={{ 
        feedback,
        deleteFeedback,
        addFeedback
      }}>
         {children} 
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext