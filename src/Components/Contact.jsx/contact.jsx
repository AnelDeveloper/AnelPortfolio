import React from 'react';

import "./contact.css"

import phone from "../../img/phone.png"
import email from "../../img/email.png"
import address from "../../img/address.png"
import { useRef } from "react";
import emailjs from 'emailjs-com'


const Contact = () => {

    const formRef = useRef()
    const [done, setDone] = React.useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                "service_bk1aafo",
                "template_1b8l3pa",
                formRef.current,
                "n7j8_AQnKKa1keSqO"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true)
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };





    return (
        <div className='c'>
            <div className="c-bg">

            </div>

            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Let's discuss your project
                    </h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={phone} alt="" className="c-icon" />
                            +387 62 954 591
                        </div>
                        <div className="c-info-item">
                            <img src={email} alt="" className="c-icon" />
                            anel.kujovic.developer@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={address} alt="" className="c-icon" />
                            Kobilja Glava 149, Sarajevo, Bosnia and Herzegovina
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="from_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="from_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank you "}
                    </form>
                </div>
            </div>
            <p className="c-created">  Created by Anel Kujovic in React.js </p>
        </div>
    );
}

export default Contact;
