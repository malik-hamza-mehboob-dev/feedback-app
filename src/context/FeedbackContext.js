import React,{createContext, useState, useEffect} from 'react'

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(true);
    const [feedbackEdit, setFeedbackEdit] = useState({
      item:{},
      edit: false,
    })

    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
      fetchFeedback();
    },[])

    const fetchFeedback = async () => {
      const response = await fetch('/feedback?_sort=id&_order=desc');
      const data = await response.json();

      setFeedback(data);
      setIsLoading(false);
    }

    const deleteFeedback = async (id) => {
      if(window.confirm('Are you sure?'))
      {
        await fetch(`/feedback/${id}`,{
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })
        setFeedback(feedback.filter((item) => item.id !== id));  
      }
    }

    const addFeedback = async (newFeedback) => {
      const response = await fetch('/feedback',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFeedback),
      })

      const data = await response.json();
      console.log(data);
      setFeedback([data,...feedback]);
    }

    const editFeedback = (item) => {
      setFeedbackEdit({
        item,
        edit:true,
      })
    }

    const updateFeedback = async (id, updateFeedback) => {
      const response = await fetch(`/feedback/${id}`,{
        method:'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateFeedback)
      })
      const data = await response.json();
      setFeedback(feedback.map((item) => item.id === id ? {...item,...data} : item));
    }

    


  return (
    <FeedbackContext.Provider
     value={{ 
      // States
        feedback,
        feedbackEdit,
        isLoading,
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