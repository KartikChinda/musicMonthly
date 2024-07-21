import React, { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import { getGenre } from '@/utils/getGenres';
import artists from '@/assets';

const Genre = () => {
    const { data: session } = useSession();
    const [topartists, settopartists] = useState<any>([]);
    const [genre, setgenre] = useState("");

    useEffect(() => {
        const fetchTopArtists = async () => {
            const response = await fetch("/api/getartists");
            const data = await response.json();
            settopartists(data);
            setgenre(getGenre(data)!);

        }
        fetchTopArtists();
    }, [])

    // const resultGenre = getGenre(topartists);
    // console.log(resultGenre);

    return (
        <div className=''>
            <div className='bg-[#FAE8C8]  text-[#445C3C] h-[90vh]  w-full  flex flex-col justify-center rounded-xl items-center text-3xl md:text-6xl p-10 text-center group duration-150 font-text'>
                <h2 className='text-2xl font-semibold md:text-3xl'>Hit me up if you got art pop.</h2>
                <h1 className='p-2 font-bebas font-semibold text-4xl mt-6 md:text-6xl'>Your Top Genre for the month</h1>
                <div className='mt-28'>
                    <h1 className='font-bebas'><span className='text-[120px]  md:text-[200px] font-black'>{genre}</span></h1>
                </div>



            </div>
        </div>
    )
}

export default Genre