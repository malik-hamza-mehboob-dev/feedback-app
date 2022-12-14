import { useState, useContext, useEffect } from "react";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card"

import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
    const [text, setText] = useState('');
    const [rating, setRating] = useState(10);
    const [message, setMessage] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [btnText, setBtnText] = useState('send')

    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);

    useEffect(() => {
        if(feedbackEdit.edit){
            setBtnDisabled(false);
            setBtnText('update');
            setText(feedbackEdit.item.feedback);
            setRating(feedbackEdit.item.rating);
        }
    },[feedbackEdit])

    const handleTextChange = (e) => {
        if(text === '') {
            setBtnDisabled(true);
        } else if(text !== '' && text.trim().length <=10){
            setBtnDisabled(true);
            setMessage('Text must be atleast 10 character');
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length > 10){
            let newFeedback = {
                feedback: text,
                rating
            }

            if(feedbackEdit.edit){
                updateFeedback(feedbackEdit.item.id, newFeedback);
            } else {

                addFeedback(newFeedback);
            }

            setText('');
            setBtnText('send');
            setBtnDisabled(true);
        }
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How you rate your service with us?</h2>
            <RatingSelect rating={(rating => setRating(rating))} />
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text}/>
                <Button type='submit' isDisabled={btnDisabled}> {btnText} </Button>
            </div>
            <div className="message">{message}</div>
        </form>
    </Card>
  )
}

export default FeedbackForm