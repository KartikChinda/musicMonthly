import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';


const TopSongs = () => {
    const { data: session } = useSession();
    console.log("This is the session: ", session?.user);

    const [topSong, settopSong] = useState<any>({});

    useEffect(() => {
        const fetchTopSong = async () => {
            const response = await fetch("/api/gettracks");
            const data = await response.json();
            settopSong({
                artist: data[0].artist,
                imageURL: data[0].imageURL,
                songURL: data[0].songURL,
                title: data[0].title,
            });
            console.log(topSong);
        }

        fetchTopSong();
    }, [])


    return (
        <div className='w-full h-full flex flex-col justify-center items-center bg-[#FFFED3] rounded-xl text-[#7BD3EA] p-10 text-center group duration-150 font-text'>
            <h2 className='text-2xl font-semibold md:text-3xl mb-2'>When I was busy crying over the errors while making this app, you had one song on repeat.</h2>
            <h1 className='p-2 font-bebas font-semibold text-4xl mt-6 md:text-6xl'>Your Top Song for the month</h1>
            <div className='flex flex-col justify-center items-center mt-6'>
                <a href={topSong.songURL}>
                    <img src={topSong.imageURL} alt='songImage' width={300} height={300} className='rounded-xl shadow-xl mb-5 duration-200' />
                </a>

                <h1 className='font-bebas'><span className='text-6xl md:text-8xl font-black'>{topSong.title}</span></h1>
                <h2 className='text-xl font-semibold'>
                    {topSong.artist}
                </h2>
            </div>
        </div>
    )
}

export default TopSongs