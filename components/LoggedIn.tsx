"use client";
import { signIn } from 'next-auth/react'
import React from 'react'
import Link from 'next/link';


const LoggedIn = () => {
    return (
        <div className='h-[100vh] w-full flex justify-center items-center'>
            <div className='rounded-xl w-[90vw] bg-[#EDE0D0] flex flex-col justify-center items-center p-10 text-center gap-2'>
                <h1 className='text-[#3C2A21] text-[100px] md:text-[150px] 2xl:text-[180px] font-bebas '>All done! </h1>
                <div className='flex flex-col justify-center items-center gap-2 w-[95%] md:w-[90%] bg-brown rounded-xl p-4 text-[#EDE0D0] font-text group hover:p-[13.15px] duration-200'>
                    <div className='text-xl font-bold mt-5 md:text-3xl'>
                        <span className='group-hover:text-orange font-black text-[34px] group-hover:text-[40px] duration-150'>That's it.</span>  That's all I need from you.
                        <p className='mt-2 md:mt-2 text-base font-light'>
                            Okay maybe that
                            <span className='font-bold group-hover:text-orange duration-150 group-hover:text-[18px]'> and some validation </span> about you liking what I made here. <br /></p>
                        <div className='text-lg mt-5 md:mt-11 duration-150'>
                            Click <span className='group-hover:text-orange duration-150 group-hover:text-[22px]'> the button </span> below.
                            <p>
                                And you'll be taken to a fun recap of your music stats for this past month.
                            </p>
                            <p className='mt-6 text-sm font-light'>
                                <span className='block text-sm'>Coming soon:</span>
                                Not only this, you will receive a new wrapped on your email <span className='group-hover:text-orange duration-150 group-hover:text-[18px]'> every month on the 1st.</span></p>
                        </div>

                    </div>
                    <div className='my-10 hover:my-[34px] rounded-xl bg-orange px-4 py-2 text-brown font-bebas font-black text-6xl hover:bg-brown border-2 border-orange hover:border-orange duration-150 hover:text-orange hover:text-7xl'>

                        <Link href={"/wrapped"} >
                            Check it out
                        </Link>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default LoggedIn