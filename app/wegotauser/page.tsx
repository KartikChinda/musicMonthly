"use client";
import LoggedIn from '@/components/LoggedIn';
import NotLoggedIn from '@/components/NotLoggedIn';
import { signOut, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'


const page = () => {

    const { data: session } = useSession();
    const [displayConfetti, setdisplayConfetti] = useState(false);

    useEffect(() => {

        setdisplayConfetti((prev) => !prev)


    }, [session?.user])


    // const width = window.innerWidth;
    // const height = window.innerHeight;



    return (
        <main>
            {session ? <LoggedIn /> : <NotLoggedIn />}
            {displayConfetti ?
                <Confetti /> : ""}
            {/* <button onClick={() => { signOut() }}>Signout</button> */}
        </main>
    )
}

export default page