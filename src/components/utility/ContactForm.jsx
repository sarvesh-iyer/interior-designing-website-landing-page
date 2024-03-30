import { useEffect, useRef, useState } from "react"
import { SuccessModal } from "./SuccessModal"

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
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const phoneRef = useRef(null)
    const queryRef = useRef(null)

    const errorFieldStyle = "1px solid var(--primary-color)"
    const defaultBorderStyle = "1px solid #ccc"

    const handleInputChange = (e) => {
        let {name, value} = e.target
        setInputData({
            ...inputData,
            [name]: value
        })
    } 

    const isFormValid = () => {
        if(
            inputData.name?.trim() === "" || inputData.email?.trim() === "" || 
            inputData.phone?.trim() === "" || inputData.query?.trim() === ""
        ){
            if(inputData.name?.trim() === "")  nameRef.current.style.borderBottom = errorFieldStyle
            if(inputData.email?.trim() === "") emailRef.current.style.borderBottom = errorFieldStyle
            if(inputData.phone?.trim() === "") phoneRef.current.style.borderBottom = errorFieldStyle
            if(inputData.query?.trim() === "") queryRef.current.style.borderBottom = errorFieldStyle
            return false
        }

        return true
    } 

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!isFormValid()) return

        setInputData(initalInputState)
        setShowSuccessModal(true)
    } 

    return (
        <>
            <form className="form-wrapper">
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
                    />
                </div>
                <div className="form-item-row">
                    <input 
                        className="form-inputs"
                        value={inputData.phone}
                        ref={phoneRef}
                        type="number" 
                        name="phone" 
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
                    ></textarea>
                </div>
                <div className="form-item-row">
                    <button className="submit-btn" onClick={handleSubmit}>Submit</button>
                </div>
            </form>

            <SuccessModal isVisible={showSuccessModal} setIsVisible={setShowSuccessModal} />
        </>
    )
}
