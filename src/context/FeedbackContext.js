import React,{createContext, useState} from 'react'

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedbackEdit, setFeedbackEdit] = useState({
      item:{},
      edit: false,
    })

    const [feedback, setFeedback] = useState([
      {
        id:1,
        feedback:'This is from context API',
        rating:10
      },
      {
        id:2,
        feedback:'This is from context API 7',
        rating:7
      },
      {
        id:3,
        feedback:'This is from context API 8',
        rating:8
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

    const editFeedback = (item) => {
      setFeedbackEdit({
        item,
        edit:true,
      })
    }

    const updateFeedback = (id, updateFeedback) => {
      setFeedback(feedback.map((item) => item.id === id ? {...item,...updateFeedback} : item));
    }

    


  return (
    <FeedbackContext.Provider
     value={{ 
      // States
        feedback,
        feedbackEdit,
        // Functions
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
      }}>
         {children} 
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext