import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

export default function FeedbackForm() {
    const[text,setText] = useState('');
    const [status, setStatus] = useState('typing');
    // const [isSending, setIsSending] = useState(false);
    // const [isSent, setIsSent] = useState(false);


    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('sending');
        await sendMessage(text);
        setStatus('sent');

        // setIsSending(true);
        // await sendMessage(text);
        // setIsSending(false);
        // setIsSent(true);
    }
    const isSending = status === 'sending';
    const isSent = status === 'sent';

    if(isSent) {
        return <div className="alert alert-success">Thank you for your feedback!</div>
    }

    return (
        <div className="col-12">

            <div className="card">
                <div className="card-header">
                    <h1>Feedback Form</h1>
                    <form onSubmit={handleSubmit}>
                        <p>How was your stay at The Prancing Pony?</p>
                        <textarea
                            className="form-control"
                            disabled={isSending}
                            value={text}
                            onChange={e => setText(e.target.value)}
                        />
                        <br />
                        <button
                            className={`btn btn-primary ${isSending ? 'disabled' : ''}`}
                            disabled={isSending}
                            type="submit"
                        >
                            Send
                        </button>
                        {isSending && <p>Sending...</p>}
                    </form>
                </div>
            </div>

        </div>
    );
}
function sendMessage(text)
{
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });

}