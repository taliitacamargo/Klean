import Reat from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Quote() {
    const [state, handleSubmit] = useForm("xayvzbqj");

    if (state.succeeded) {
        return (
            <div className="quote" id="container-status">
                <h1 className="quote-title">Thank you for your message!</h1>
                <a className="return" href="#home">Return to Home</a>
            </div>
        );
    }
    return (
        <div className="quotecontainer">
            <h1 className="quote-title" id="quote">Contact Us</h1>
            <form onSubmit={handleSubmit}>
            <div className="form">
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" name="email" placeholder="johndoe@example.com" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <textarea id="message" name="message" placeholder="Your message here..." required />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <button className="submitbutton" type="submit" disabled={state.submitting} >
                    Submit
                </button>
            </div>
            </form>
            <p className="quote-content">If you have any questions or would like to schedule a cleaning service,
                please don't hesitate to contact us. You can reach us via <a href="mailto:email">email</a></p>
        </div>
    );
}