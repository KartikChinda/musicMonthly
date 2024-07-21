import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';


const TopArtist = () => {

    const { data: session } = useSession();

    const [topArtist, settopArtist] = useState<any>({});

    useEffect(() => {
        const fetchTopSong = async () => {
            const response = await fetch("/api/getartists");
            const data = await response.json();
            settopArtist({
                artist: data[0].artist,
                imageURL: data[0].imageURL,
                songURL: data[0].songURL,
                title: data[0].title,
            });
            console.log(topArtist);
        }

        fetchTopSong();
    }, [])


    return (
        <div className='w-full h-full flex flex-col justify-center items-center bg-[#FF8080] rounded-xl text-[#CDFAD5] p-10 text-center group duration-150 font-text'>
            <h2 className='text-2xl font-semibold md:text-3xl mb-2'>You let many people hum their melodies in your ears, but this right here is your bestie.
                <br /> <span className='text-base'>(According to you.)</span>
            </h2>
            <h1 className='p-2 font-bebas font-semibold text-4xl mt-6 md:text-6xl'>Your Top Artist for the month</h1>
            <div className='flex flex-col justify-center items-center mt-6'>

                <img src={topArtist.imageURL} alt='songImage' width={300} height={300} className='rounded-xl shadow-xl mb-5 duration-200' />


                <h1 className='font-bebas'><span className='text-6xl md:text-8xl font-black'>{topArtist.title}</span></h1>

            </div>
        </div>
    )
}

export default TopArtist