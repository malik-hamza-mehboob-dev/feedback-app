import FeedbackItem from './FeedbackItem'
import propTypes from 'prop-types'

function FeedbackList({feedback}) {
    if(!feedback || feedback.length === 0) { return <p>No Feedback yet!</p>}
  return (
    feedback.map((item) => (<FeedbackItem key={item.id} item={item} />))
  )
}

FeedbackItem.propTypes = {
    feedback : propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            feedback: propTypes.string.isRequired,
            rating: propTypes.number.isRequired,
        })
    ),
}

export default FeedbackList