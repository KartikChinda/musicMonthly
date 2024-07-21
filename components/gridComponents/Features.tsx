import React from 'react'

const Features = () => {
    return (
        <div className='grid grid-cols-5 grid-rows-1 h-full w-full gap-2'>
            <div className='col-span-1 row-span-1 border-2 bg-orange rounded-xl h-[100%] flex flex-col justify-center items-center font-text group duration-150 p-2 group'>
                <h1 className='font-bebas text-3xl 3xl:text-5xl text-center group-hover:text-xl 3xl:group-hover:text-3xl duration-200'>Certified <br /> bops you <br />listened to.</h1>
                <p className='text-center mt-2 text-xs  group-hover:text-sm 3xl:group-hover:text-base group-hover:font-semibold duration-200'>Get a list of bangers you could not stop from pouring through your headphones. The top songs you listened to, curated in one place.</p>
            </div>
            <div className='col-span-1 row-span-1 border-2 bg-orange rounded-xl h-[100%] flex flex-col justify-center items-center font-text group duration-150 p-4'>
                <h1 className='font-bebas text-3xl 3xl:text-5xl text-center group-hover:text-xl 3xl:group-hover:text-3xl duration-200'>Artists who <br /> spoke to you. <br />And for you.</h1>
                <p className='text-center mt-2 text-xs  group-hover:text-sm 3xl:group-hover:text-base group-hover:font-semibold duration-200'>These voices haunted your daydreams, soothed your nightmares. The top artists you listened to each month, served hot.</p>
            </div>
            <div className='col-span-1 row-span-1 border-2 bg-orange rounded-xl h-[100%] flex flex-col justify-center items-center font-text group duration-150 p-4'>
                <h1 className='font-bebas text-3xl 3xl:text-5xl text-center group-hover:text-xl 3xl:group-hover:text-3xl duration-200'>Stats, visualized.</h1>
                <p className='text-center mt-2 text-xs  group-hover:text-sm 3xl:group-hover:text-base group-hover:font-semibold duration-200'>I'm just going to say it. I like my information served on a visually stunning page. Get your recap designed beautifully. <br /> You flaunt your music, I flaunt my design.</p>
            </div>
            <div className='col-span-1 row-span-1 border-2 bg-orange rounded-xl h-[100%] flex flex-col justify-center items-center font-text group duration-150 p-4'>
                <h1 className='font-bebas text-3xl 3xl:text-5xl text-center group-hover:text-xl 3xl:group-hover:text-3xl duration-200'>Bangers to <br /> add to your playlists.</h1>
                <p className='text-center mt-2 text-xs  group-hover:text-sm 3xl:group-hover:text-base group-hover:font-semibold duration-200'>
                    New songs? Based on your music taste? For you to listen to? Each month?  *impersonates Clay Davis from the Wire* <br /> shiieee----t. </p>
            </div>
            <div className='col-span-1 row-span-1 border-2 bg-orange rounded-xl h-[100%] flex flex-col justify-center items-center font-text group duration-150 p-4'>
                <h1 className='font-bebas text-3xl 3xl:text-5xl text-center group-hover:text-xl 3xl:group-hover:text-3xl duration-200'>Lana girl, or a <br />Radiohead boy? </h1>
                <p className='text-center mt-2 text-xs  group-hover:text-sm 3xl:group-hover:text-base group-hover:font-semibold duration-200'>Discover your music personality through the genres that define your listening habits, and reveal the soundtrack to your inner vibe. <br /> (chatGPT wrote this)</p>
            </div>


        </div>
    )
}

export default Features