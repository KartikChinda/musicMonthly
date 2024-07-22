"use client";
import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const Animator = () => {

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
                threshold: 0.5, // Trigger when 10% of the div is visible
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
        <div>
            <div className=' h-[20vh] md:h-[40vh] w-full bg-black '>
            </div>

            <motion.div ref={ref} className='h-[90vh] m-4 md:m-20 rounded-xl bg-[#EDE0D0] flex justify-center items-center group'
                initial={{ opacity: 0 }} // Initial opacity when component mounts
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }} // Opacity when component is visible
                transition={{ duration: 1 }} // Duration of the fade animation
            >
                <h1 className='text-[#3C2A21] text-4xl md:text-7xl 2xl:text-9xl font-bebas group'>I got <span className='text-orange group-hover:text-[160px] duration-150'>you</span>, boo. </h1>
            </motion.div>

        </div>

    )
}

export default Animator