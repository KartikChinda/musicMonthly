"use client";
import LoggedIn from '@/components/LoggedIn';
import NotLoggedIn from '@/components/NotLoggedIn';
import { signOut, useSession } from 'next-auth/react'
import React from 'react'

const page = () => {

    const { data: session } = useSession();

    return (
        <main>
            {session ? <LoggedIn /> : <NotLoggedIn />}
            <button onClick={() => signOut()}>Sign out</button>
        </main>
    )
}

export default page