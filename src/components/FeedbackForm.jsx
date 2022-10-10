import { useState } from "react";
import Button from "./shared/Button";
import Card from "./shared/Card"

function FeedbackForm() {
    const [text, setText] = useState('');
    const [message, setMessage] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);

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
  return (
    <Card>
        <form>
            <h2>How you rate your service with us?</h2>
            {/* rating select component */}
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text}/>
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>
            <div className="message">{message}</div>
        </form>
    </Card>
  )
}

export default FeedbackForm