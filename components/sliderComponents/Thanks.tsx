import React from 'react'
import Link from 'next/link'

const Thanks = () => {
    return (
        <div className=''>
            <div className='bg-[#1FD662] text-black h-[90vh]  w-full  flex flex-col justify-center rounded-xl items-center text-3xl md:text-6xl p-10 text-center group duration-150 font-text'>
                <h2 className='text-2xl font-semibold md:text-3xl mb-2'>Thought I'd make at least one slide with the colors of Spotify.</h2>
                <h1 className='p-2 font-bebas font-semibold text-4xl mt-4 md:text-6xl'>A lot more stuff is to come.</h1>
                <h1 className='p-2 font-bebas font-semibold text-4xl  md:text-6xl'>Stay tuned.</h1>


                <div className='my-10 hover:my-[34px] rounded-xl bg-black px-4 py-2 text-[#1FD662] font-bebas font-black text-6xl hover:bg-[#1FD662] border-2 border-[#1FD662] hover:border-black duration-150 hover:text-black hover:text-7xl'>

                    <Link href={"/"} >
                        Go Home.
                    </Link>

                </div>

                <div className='mt-10 3xl:mt-28'>
                    <h1 className='font-bebas'><span className='text-[50px]  md:text-[170px] font-black'>Made with love 🖤 </span></h1>
                </div>


            </div>
        </div>
    )
}

export default Thanks