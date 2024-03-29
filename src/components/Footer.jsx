import MailImg from '../assets/images/general/mail.svg' 
import PhoneImg from '../assets/images/general/phone.svg' 

export const Footer = () => {
    
    return (
        <div className="footer-wrapper">
            <span className="span-text">
                Copyright © Homevista Decor and Furnishings Private Limited. All rights reserved.
            </span>
            <div className="contact-info">
                <div className="contact-info" style={{marginRight: '30px'}}>
                    <img src={MailImg} alt="mail" width={20} />
                    <span className="span-text">
                        <a href="mailto:abc@gmail.com">abc@gmail.com</a>
                    </span>
                </div>
                <div className="contact-info">
                    <img src={PhoneImg} alt="phone" width={20} />
                    <span className="span-text"> 
                        <a href="tel:+911234567890">+911234567890</a>
                    </span>
                </div>
            </div>
        </div>
    )
}
