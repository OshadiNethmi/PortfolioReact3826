import SectionTitle from '../../components/SectionTitle';
import { useSelector } from 'react-redux';

import React from 'react'

const Contact = () => {
    const { myapiData } = useSelector(state => state.root);
    const { contact } = myapiData;
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "28f8cf42-05b9-4407-aa9a-3ff3faae55c0");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
            event.target.reset();
        }
    };

    return (

        <div className='contact' id="contact">
            <div className='contact-title'>
                <SectionTitle title='Get in touch' />
            </div>
            <div className='contact-section'>
                <div className='contact-left'>
                    <h1>Let's Talk</h1>
                    <p className='text-tertiary'>{'{'}</p>
                    {Object.keys(contact).map(
                        (key) =>
                            key !== "_id" && (
                                <p className='ml-5'>
                                    <span className='text-tertiary'>{key} : </span>
                                    <span className='text-tertiary'>{contact[key]} </span>
                                </p>
                            )
                    )}
                    <p className='text-tertiary'>{'}'}</p>
                </div>
                <form onSubmit={onSubmit} className='contact-right'>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter Your Email" name="email" />
                    <label htmlFor="">Write Your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <button type='submit' className='contact-submit'>Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
