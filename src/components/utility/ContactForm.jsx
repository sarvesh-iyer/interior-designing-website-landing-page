import { useRef, useState } from "react"
import { SuccessModal } from "./SuccessModal"
import emailjs from '@emailjs/browser';

export const ContactForm = () => {

    const initalInputState = {
        name: "",
        email: "",
        phone: "",
        query: ""
    }

    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [inputData, setInputData] = useState(initalInputState)
    const [formValidation, setFormValidation] = useState({
        name: false,
        email: false,
        phone: false,
        query: false
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const phoneRef = useRef(null)
    const queryRef = useRef(null)
    const formRef = useRef(null)

    const handleInputChange = (e) => {
        let {name, value} = e.target
        // for phone no. field only numbers are allowed
        const regex = /^[0-9\s]*$/;
        if(name === 'phone' && !(regex.test(value?.trim()))) return  

        setInputData({
            ...inputData,
            [name]: value
        })
        if(name === 'name' && value?.trim() !== "") nameRef.current.classList.remove('error-field')
        if(name === 'email' && value?.trim() !== "") emailRef.current.classList.remove('error-field')
        if(name === 'phone' && value?.trim() !== "") phoneRef.current.classList.remove('error-field')
        if(name === 'query' && value?.trim() !== "") queryRef.current.classList.remove('error-field')
    } 

    const isFormValid = () => {
        if(
            inputData.name?.trim() === "" || inputData.email?.trim() === "" || 
            inputData.phone?.trim() === "" || inputData.query?.trim() === ""
        ){
            if(inputData.name?.trim() === "")  nameRef.current.classList.add('error-field')
            if(inputData.email?.trim() === "") emailRef.current.classList.add('error-field')
            if(inputData.phone?.trim() === "") phoneRef.current.classList.add('error-field')
            if(inputData.query?.trim() === "") queryRef.current.classList.add('error-field')
            return false
        }

        return true
    } 

    const handleSubmit = async(e) => {
        e.preventDefault()
        if(!isFormValid()) return
        try{
            setIsSubmitting(true)
            let resposne = await emailjs.sendForm('service_62zihjm', 'template_gkt0hkj', formRef.current, {
                publicKey: 'VQ1BJ5tm7Oszi_2Y4',
            })

            setIsSubmitting(false)
            setInputData(initalInputState)
            setShowSuccessModal(true)

        }catch(e){
            console.log(e)
        }

    } 

    return (
        <>
            <form ref={formRef} className="form-wrapper" onSubmit={handleSubmit}>
                <h2 className="title">Contact us</h2>
                <div className="form-item-row">
                    <input 
                        className="form-inputs"
                        value={inputData.name}
                        ref={nameRef}
                        type="text" 
                        name="name" 
                        id="name"
                        placeholder="Enter your name"
                        onChange={handleInputChange}
                        maxLength={200}
                    />
                </div>
                <div className="form-item-row">
                    <input 
                        className="form-inputs"
                        value={inputData.email}
                        ref={emailRef}
                        type="email" 
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                        onChange={handleInputChange}
                        maxLength={200}
                    />
                </div>
                <div className="form-item-row">
                    <input 
                        className="form-inputs"
                        value={inputData.phone}
                        ref={phoneRef}
                        type="tel" 
                        maxLength={10}
                        name="phone" 
                        pattern="\d{10}"
                        id="phone"
                        placeholder="Enter your mobile number"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-item-row">
                    <textarea 
                        className="form-textarea"
                        value={inputData.query}
                        ref={queryRef}
                        name="query" 
                        id="query"
                        placeholder="Enter your query..." 
                        onChange={handleInputChange}
                        cols="30" 
                        rows="8"
                        maxLength={500}
                    ></textarea>
                </div>
                <div className="form-item-row">
                    <input 
                        className="submit-btn" 
                        type="submit" 
                        value={isSubmitting ? "Submitting..." : "Submit"} 
                    />
                </div>
            </form>

            <SuccessModal isVisible={showSuccessModal} setIsVisible={setShowSuccessModal} />
        </>
    )
}
