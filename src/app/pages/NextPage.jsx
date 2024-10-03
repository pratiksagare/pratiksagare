import React from 'react'
import Form from '../components/Form'
import Social from '../components/Social'

function NextPage() {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center  lg:h-screen w-full '>
            <div className='flex flex-row justify-center items-center w-full lg:w-1/2 md:h-screen bg-[#111] py-4 h-screen'>
                <Form />
            </div>

            <div className='w-full lg:w-1/2 bg-[#111] h-screen flex flex-row justify-center items-center'>
                <Social />
            </div>

        </div>
    )
}

export default NextPage
