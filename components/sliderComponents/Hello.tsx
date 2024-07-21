import React from 'react'
import { useSession } from 'next-auth/react';

const Hello = () => {

    const { data: session } = useSession();
    console.log(session?.user);

    return (
        <div className='w-full h-full flex flex-col justify-center items-center bg-yellow-100 rounded-xl'>

        </div>
    )
}

export default Hello; 