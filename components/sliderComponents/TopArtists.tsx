import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';

const TopArtists = () => {
    const { data: session } = useSession();
    const [topartists, settopartists] = useState<any>([]);

    useEffect(() => {
        const fetchTopArtists = async () => {
            const response = await fetch("/api/getartists");
            const data = await response.json();
            settopartists(data);
        }

        fetchTopArtists();
    }, [])


    return (
        <div className='w-full h-full flex flex-col justify-center items-center bg-[#5E454B] rounded-xl text-[#F0EBE3] p-10  group duration-150 font-text'>
            <h2 className='text-xl font-semibold md:text-2xl mb-2'>I can't be creative on all of these.</h2>
            <h1 className='p-2 font-bebas font-semibold text-4xl mt-6 md:text-7xl'>Top 5 Artists</h1>
            <div className='flex flex-col gap-2 justify-center items-center mt-6'>

                {topartists.map((topSong: any, _idx: number) => {
                    return (
                        <div className='flex justify-start w-full items-center gap-2 rounded-xl p-3 h-full '>
                            <span className='mr-2'>#{_idx + 1}</span>
                            <img src={topSong.imageURL} alt='songImage' className='rounded-xl shadow-xl duration-200 w-[85px]' />
                            <div className='flex flex-col justify-start items-start'>
                                <h1 className='font-text ml-2'><span className='text-2xl md:text-2xl font-black'>{topSong.title}</span></h1>
                                <h2 className='text-xl font-semibold'>
                                    {topSong.artist}
                                </h2>
                            </div>


                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default TopArtists; 