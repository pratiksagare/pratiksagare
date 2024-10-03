'use client'
import React, { useRef, useState } from 'react'

function Form() {
    const [message, setMessage] = useState({});
    const [status, setStatus] = useState('');
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);

    const handleSubmit = async (msg) => {
        console.log("handle submit call");
        try {
            const response = await fetch('/api/sendMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(msg)
            });

            const result = await response.json();
            if (result.success) {
                setStatus('Email sent successfully!');
                setTimeout(() => {
                    setStatus('');
                }, 5000);
            } else {
                setStatus('Error sending email.');
            }
        } catch (error) {
            setStatus('Error: ' + error.message);
        }
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
        setMessage({});
    };

    console.log(message)
    return (
        <div className=" w-full h-full flex flex-col justify-center items-center gap-4 ">
            <span className="font-gilroyBold text-[1.5rem] lg:text-[2.5rem] md:text-[2rem] text-white">Contact Us</span>
            <input ref={nameRef} className="outline-none border-none text-white bg-transparent p-3 px-6 w-full rounded-sm" type="text" placeholder="Name" onChange={(e) => { setMessage({ ...message, name: e.target.value }) }} />
            <input ref={emailRef} className="outline-none border-none text-white bg-transparent p-3 px-6 w-full rounded-sm" type="email" placeholder="Email" onChange={(e) => setMessage({ ...message, email: e.target.value })} />
            <textarea ref={messageRef}
                className="outline-none border-none text-white bg-transparent p-3 px-6 w-full overflow-hidden rounded-sm"
                placeholder="Message"
                data-gramm="false"
                rows="3"
                onChange={(e) => { setMessage({ ...message, textMessage: e.target.value }) }}
            />
            <button className="flex bg-sky-500 p-3 px-6  w-full justify-center items-center font-gilroyMedium text-md" onClick={(e) => { e.preventDefault(); handleSubmit(message) }}>Send &nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height={15} fill="currentColor"><path d="M1.94619 9.31543C1.42365 9.14125 1.41953 8.86022 1.95694 8.68108L21.0431 2.31901C21.5716 2.14285 21.8747 2.43866 21.7266 2.95694L16.2734 22.0432C16.1224 22.5716 15.8178 22.59 15.5945 22.0876L12 14L18 6.00005L10 12L1.94619 9.31543Z"></path></svg>
            </button>
            <span>{status}</span>
        </div>
    )
}

export default Form;

