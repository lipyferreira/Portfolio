import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';


import { toast } from 'react-toastify'

import './contato.css'

function Contato() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const form = useRef()

    function sendEmail(e) {

        e.preventDefault();
        if(name === ''|| message === '') {
            toast.info("Os campos precisam ser preenchidos para que o contato seja realizado")
            return;
        }else if (email.includes('@') !== true || email.includes('.com') !== true ){
            toast.info("Ops..! Email invalido.")
            return;
        }
        emailjs.sendForm('service_avvmzn9', 'template_50oe13k', form.current, 'WopzeZ78shcnqve7x')
            .then((result) => {
                console.log(result);
                toast.success(`Olá ${name}, sua mensagem enviada com sucesso! :)`);
            }, (error) => {
                toast.error(error.text);
            });

        
        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <div className='form-container'>
            <form ref={form} onSubmit={sendEmail}>
            <h1 className='title-form'>Envie uma mensagem!</h1>
                <div className="mb-3">
                    <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    aria-describedby="name"
                    placeholder='nome completo'
                    name='name' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    aria-describedby="emailHelp"
                    placeholder='email'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />

                </div>
                <div className="mb-3">
                    <textarea 
                    className="form-control" 
                    id="message" 
                    rows="3"
                    placeholder='digite sua mensagem..'
                    name='message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit" className="btn btn-danger">Enviar</button>
            </form>
        </div>
    )
}

export default Contato