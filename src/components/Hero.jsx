import TextImg from '../assets/images/text-img.png'
import { ContactForm } from './ContactForm'

export const Hero = () => {
    return (
        <section>
            <div className="hero-wrapper">
                <img src={TextImg} className="text-img" alt="text-img" />
                <ContactForm />
            </div>
        </section>
    )
}
