import { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from './shared/Spinner';



function FeedbackList() {
  const {feedback, isLoading} = useContext(FeedbackContext);
    if(!isLoading && (!feedback || feedback.length === 0)) { return <p>No Feedback yet!</p>}

    return isLoading ? <Spinner /> : (
      feedback.map((item) => (<FeedbackItem key={item.id} item={item} />))
    )
}

export default FeedbackList