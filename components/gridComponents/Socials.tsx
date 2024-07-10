import React from 'react'
import Link from 'next/link';
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";


const Socials = () => {
    return (
        <div className='w-full h-full bg-brown rounded-xl flex flex-col gap-8 text-orange justify-center items-center text-4xl group duration-150'>
            <Link href={"https://github.com/KartikChinda/musicMonthly"} className='hover:text-5xl duration-150'> <FaGithubSquare /></Link>
            <Link href={"https://twitter.com/ChindaKartik"} className='hover:text-5xl duration-150'> <FaSquareXTwitter /></Link>
            <Link href={"www.linkedin.com/in/kartikchinda"} className='hover:text-5xl duration-150'> <FaLinkedin /></Link>
            <Link href={"https://www.instagram.com/kartik.chinda11"} className='hover:text-5xl duration-150'> <TiSocialInstagram /></Link>
        </div>
    )
}

export default Socials