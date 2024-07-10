"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';


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
        <section className='mt-40 mx-4'>
            <div className='h-[40vh]'>

            </div>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                transition={{ duration: 1 }}
                style={{ height: '200px', backgroundColor: '#EDE0D0' }}
            >
                This content will fade in and slide up when it comes into view.
            </motion.div>
            <div style={{ height: '100vh' }}></div>
        </section>
    )
}

export default Intro