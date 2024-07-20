"use client";
import { signIn } from 'next-auth/react'
import React from 'react'

const NotLoggedIn = () => {
    return (
        <div className='h-[100vh] w-full flex justify-center items-center'>
            <div className='rounded-xl w-[90vw] bg-[#EDE0D0] flex flex-col justify-center items-center p-10 text-center gap-2'>
                <h1 className='text-[#3C2A21] text-[100px] md:text-[150px] 2xl:text-[180px] font-bebas '>Neat! </h1>
                <div className='flex flex-col justify-center items-center gap-2 w-[95%] md:w-[90%] bg-brown rounded-xl p-4 text-[#EDE0D0] font-text group hover:p-[15px] duration-200'>
                    <div className='text-xl font-bold mt-5 md:text-3xl'>
                        Go ahead and <span className='group-hover:text-orange font-black text-[34px] group-hover:text-[40px] duration-150'>log in</span> with your Spotify account.
                        <p className='mt-2 md:mt-5 text-base font-light'>Don't fret, I <span className='font-bold group-hover:text-orange duration-150 group-hover:text-[18px]'>won't</span> steal your data. <br /><span className='text-sm group-hover:text-xs duration-150'>(I dont know how to.)</span></p>
                    </div>
                    <div>
                        <button onClick={() => signIn()} className='my-10 hover:my-[34px] rounded-xl bg-orange px-4 py-2 text-brown font-bebas font-black text-6xl hover:bg-brown border-2 border-orange hover:border-orange duration-150 hover:text-orange hover:text-7xl'>
                            Sign In
                        </button>
                    </div>
                    {/* <div className=''>
                        That's it. That's all I need from you.<p>
                            Okay maybe that and some validation about you liking what I made here.
                        </p>
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default NotLoggedIn