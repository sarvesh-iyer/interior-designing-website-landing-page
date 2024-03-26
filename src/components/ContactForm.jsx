
export const ContactForm = () => {
    return (
        <form className="form-wrapper">
            <h2 className="title">Contact us</h2>
            <div className="form-item-row">
                <input 
                    className="form-inputs"
                    type="text" 
                    name="name" 
                    id="name"
                    placeholder="Enter your name"
                />
            </div>
            <div className="form-item-row">
                <input 
                    className="form-inputs"
                    type="email" 
                    name="email" 
                    id="email"
                    placeholder="Enter your email"
                />
            </div>
            <div className="form-item-row">
                <input 
                    className="form-inputs"
                    type="number" 
                    name="phone" 
                    id="phone"
                    placeholder="Enter your mobile number"
                />
            </div>
            <div className="form-item-row">
                <textarea 
                    className="form-textarea"
                    name="query" 
                    id="query"
                    placeholder="Enter your query..." 
                    cols="30" 
                    rows="8"
                ></textarea>
            </div>
            <div className="form-item-row">
                <button className="submit-btn">Submit</button>
            </div>
        </form>
    )
}
