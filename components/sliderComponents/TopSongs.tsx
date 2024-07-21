import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';


const TopSongs = () => {
    const { data: session } = useSession();
    const [topSongs, settopSongs] = useState<any>([]);

    useEffect(() => {
        const fetchTopSongs = async () => {
            const response = await fetch("/api/gettracks");
            const data = await response.json();
            settopSongs(data);
        }

        fetchTopSongs();
    }, [])


    return (
        <div className='w-full h-full flex flex-col justify-center items-center bg-[#FFBE98] rounded-xl text-[#594545] p-4  group duration-150 font-text'>
            <h2 className='text-base font-semibold md:text-2xl mb-2 text-center'>Deleting screenshots, walking to the nearest cafe, or just staring into the void. <br /> Here's what you listened the most doing these.</h2>
            <h1 className='p-2 font-bebas font-semibold text-4xl mt-6 md:text-7xl'>Top 5 Songs</h1>
            <div className='flex flex-col gap-2 justify-center items-center mt-6'>

                {topSongs.map((topSong: any, _idx: number) => {
                    return (
                        <div className='flex justify-start w-full items-center gap-2 rounded-xl p-3 h-full '>
                            <span className='mr-2'>#{_idx + 1}</span>
                            <img src={topSong.imageURL} alt='songImage' className='rounded-xl shadow-xl duration-200 w-[85px]' />
                            <div className='flex flex-col justify-start items-start'>
                                <h1 className='font-bebas'><span className='text-xl md:text-2xl font-black'>{topSong.title}</span></h1>
                                <h2 className='text-lg font-semibold'>
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

export default TopSongs