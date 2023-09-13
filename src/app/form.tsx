"use client"

import Link from "next/link"
import { FormEvent, useState } from "react"

export const ContactForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [isSubmitted, setSubmitted] = useState(false);

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
            if (res.status === 200) {
                setSubmitted(true)
            }

        } catch (err: any) {
            console.log('Err', err)
        }
    }
    return (
        isSubmitted ? (
            <div className="h-screen pt-24 justify-center items-center">
                <h1 className="text-white text-center font-semibold text-3xl pb-10">
                    Thank you for your message!
                </h1>
                <div className="flex justify-center">
                    <button className="btn btn-outline btn-info pr-10 pl-10">
                        <Link href="/">Return ➜</Link>
                    </button>
                </div>
            </div>
        ) :
            (<div className="h-screen" onSubmit={onSubmit}>
                <h1 className="pt-24 text-4xl pb-5">Contact Us</h1>
                <div className="flex justify-center items-center">
                    <form className="grid grid-cols-2 text-white bg-neutral-800 p-10 rounded-lg hover:shadow-sm hover:shadow-sky-400">
                        <div onSubmit={onSubmit} className="col-span-1 flex flex-col gap-y-10">
                            <input
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                type="text"
                                placeholder="Firstname:"
                                className="input input-bordered input-info w-full max-w-xs"
                            />
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="email"
                                placeholder="Email:"
                                className="input input-bordered input-info w-full max-w-xs"
                            />
                            <textarea
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                className="textarea textarea-bordered w-full pb-24"
                                placeholder="Message"
                            ></textarea>
                            <p className="text-gray-400">Please include: reason, business, purpose, arguement and level of dedication</p>
                            <button type="submit" className="btn btn-outline btn-info w-1/6">
                                Submit
                            </button>
                        </div>
                        <div className="col-span-1 pl-20">
                            <img
                                src="https://img.freepik.com/free-vector/illustration-hand-holding-bitten-donut-icon_53876-15722.jpg?w=740&t=st=1694145422~exp=1694146022~hmac=9d1216113f3ad533a5b1b4e7cbee97d33df651bd31d00643c43b03daa8a20a41"
                                alt="Donut"
                                className="max-w-full h-auto"
                            />
                        </div>
                    </form>
                </div>
            </div>)
    );
}