import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import Pictures from './gridComponents/Pictures';

const IntroMobile = () => {
    const { data: session } = useSession();

    return (
        <div className='w-full mt-10 flex flex-col gap-6 justify-center items-center'>
            <div className='bg-brown h-full flex flex-col gap-4 font-text justify-center items-start px-8 text-orange text-4xl font-extralight rounded-xl p-4'>
                <h2>Your music recap,</h2>
                <h1 ><span className='font-extrabold '>"wrapped" </span>and delivered</h1>
                <h2>to you, <span className='font-extrabold'>monthly</span>.</h2>

                {!session ? <Link href="/wegotauser" className='mt-8 rounded-xl bg-orange px-4 py-2 text-brown font-bebas font-black text-2xl hover:bg-brown border-2 border-orange hover:border-orange duration-150 hover:text-orange hover:text-[26px]'>
                    Start your journey </Link>
                    :
                    <div className='mt-8 rounded-xl bg-orange px-4 py-2 text-brown font-bebas font-black text-xl hover:bg-brown border-2 border-orange hover:border-orange duration-150 hover:text-orange hover:text-[23px]'>
                        <Link href={"/wrapped"}>
                            Go check the wrapped again.
                        </Link>
                    </div>
                }
            </div>

            {/* the photos section */}
            <div className='w-full h-[50vh] flex justify-center items-center'>
                <Pictures />
            </div>
        </div>
    )
}

export default IntroMobile