import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import Image from 'next/image';

const Hello = () => {

    const { data: session } = useSession();


    const now = new Date();
    const currentMonth = now.getMonth();
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const currMonth = monthNames[currentMonth];

    return (
        <div className='w-full h-full flex flex-col justify-center items-center bg-[#7469B6] rounded-xl text-[#C8FFD4] text-3xl md:text-6xl p-10 text-center group duration-150 font-text'>
            <img src={session?.user.image!} alt='UserImage' width={200} height={200} className='rounded-xl shadow-xl mb-5 grayscale hover:grayscale-0 duration-200' />
            <h1 className='font-bebas'>Hi, <span className='text-4xl md:text-8xl font-black text-[#8df3a3]'>{session?.user.name}</span></h1>
            <h2 className='mt-6 text-xl md:text-4xl group-hover:font-bold duration-150'>
                {currMonth} <span className=' font-light'>has been a busy month for your ears. </span>
            </h2>
            <div className='mt-20 text-xl md:text-4xl font-semibold duration-150' >

                Let's take a look at the music you loved the most this past month.
            </div>

        </div >
    )
}

export default Hello; 