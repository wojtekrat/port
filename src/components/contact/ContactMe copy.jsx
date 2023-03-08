'use client';

import React, { useState, useRef } from 'react'
import ContactInput from './ContactInput'
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'
import Map from '../../components/contact/Map'

const ContactMe = () => {

    const formRef = useRef()
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [loading, setLoading] = useState()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({...form, [name]: value })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.send('service_aq7153w', 'template_t7hhnab', 
        {
            from_name: form.name,
            to_name: 'Wojtek',
            from_email: form.email,
            to_email: 'wojciech.ratajczak92@gmail.com',
            message: form.message,
        },
        'BAxwAX3FroUVJr_Ir'
        ).then(()=>{
            alert('Thank you, I will get back to you as soon as possible.')
            setForm({
                name: '',
                email: '',
                message: '',
            }), (error) => {
                console.log(error)
                alert('Something went wrong')
            }
        })
    }

  return (
    <div className='m-auto w-[80%] flex md:flex-row mt-[80px] flex-wrap'>
        <motion.div className='ml-[100px] bg-neutral-800 h-fit w-fit p-5 rounded-xl'>
            <div className='text-[50px]'>
                Contact me.
            </div>
            <div>
                <form className='flex flex-col w-[300px]' ref={formRef} onSubmit={handleSubmit}>
                    <label className='flex flex-col'>Your name:
                    <input className={ContactInput({ size: 'md', color: 'primary' })} placeholder='Name' type='name' name='name' value={form.name} onChange={handleChange} ></input>
                    </label>
                    <label className='flex flex-col'>Your email:
                    <input className={ContactInput({ size: 'md', color: 'primary' })} placeholder='Email' type='email' name='email' value={form.email} onChange={handleChange}></input>
                    </label>
                    <label className='flex flex-col'>Your message:
                    <textarea rows="7" name="message" value={form.message} className='p-2 m-2 bg-stone-500 text-white resize-none' placeholder='Message' onChange={handleChange}></textarea>
                    </label>
                    <button type='submit' className='text-white p-2 m-2 bg-stone-700 w-[290px] hover:text-white hover:bg-green-800'>Send message</button>
                </form>
                
            </div>
        </motion.div>
        <Map/>

    </div>
  )
}

export default ContactMe