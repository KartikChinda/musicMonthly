"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Socials from './gridComponents/Socials';
import Hero from './gridComponents/Hero';
import Pictures from './gridComponents/Pictures';
import Features from './gridComponents/Features';



const Intro = () => {

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // to check when the div comes into display essentially, and we act on it when we cross the threshold. 
        const observer = new IntersectionObserver(
            // entries contain essentially the observable elements on this page. 
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.disconnect();
                    }
                });
            },
            {
                threshold: 0.1, // Trigger when 10% of the div is visible
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.disconnect();
            }
        };
    }, []);

    return (
        <section className='flex flex-col justify-center items-center'>
            <div className='h-[40vh] '>

            </div>
            <motion.div
                className='mt-40 mb-10 mx-4 p-4 w-[90%] rounded-xl bg-[#EDE0D0] flex flex-col justify-center items-center'
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 1 }}
            >

                <div className='font-bebas font-bold text-4xl mt-20 md:text-[150px] text-[#1E1305]'>
                    Music Monthly
                </div>
                {/* container */}
                <div className='grid grid-cols-10 grid-rows-5  mt-28 w-[80%] h-[105vh] 2xl:h-[90vh] gap-4'>
                    {/* main content */}
                    <div className='col-span-7 row-span-3 border-2 border-black rounded-lg'>
                        <Hero />
                    </div>

                    {/* photos */}
                    <div className='col-span-3 row-span-3 rounded-lg'>
                        <Pictures />
                    </div>

                    {/* Features */}
                    <div className='col-span-9 row-span-2 rounded-lg'>
                        <Features />
                    </div>

                    {/* socials */}
                    <div className='col-span-1 row-span-2 rounded-lg'>
                        <Socials />
                    </div>
                </div>

            </motion.div>

        </section>
    )
}

export default Intro