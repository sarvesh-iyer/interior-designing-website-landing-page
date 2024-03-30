import TextImg from '../assets/images/hero/text-img.png'
import { ContactForm } from './utility/ContactForm'

export const Hero = () => {
    return (
        <section id="hero">
            <div className="hero-wrapper">
                <img src={TextImg} className="text-img" alt="text-img" />
                <ContactForm />
            </div>
        </section>
    )
}
