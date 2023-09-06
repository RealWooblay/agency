"use client"

import { FormEvent, useState } from "react"

export const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
                headers: {
                    'content-type': 'application/json',
                },
            })

        } catch (err: any) {
            console.log('Err', err)
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input onChange={e => setName(e.target.value)} value={name} type="text" placeholder="Firstname:" />
            <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="Email:" />
            <textarea onChange={e => setMessage(e.target.value)} value={message}></textarea>
            <button className="text-white" type="submit">Submit</button>
        </form>
    )
}