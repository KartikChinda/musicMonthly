"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Hero = () => {

    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.to(sectionRef.current, {
            translateX: "-300vw",
            ease: "none",
            duration: 1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "6000 300",
                scrub: 0.6,
                pin: true,
                markers: true,
            }

        })

        return () => {
            pin.kill()
        }
    }, [])



    return (
        <main className=" overflow-hidden">
            <div ref={triggerRef}>
                <div ref={sectionRef} className=" h-[100vh] w-[400vw] flex justify-center items-center relative">
                    <div className="h-[95vh] w-[550vw] flex justify-center items-center bg-white">
                        Use Spotify
                    </div>
                    <div className="h-[95vh] w-[100vw] flex justify-center items-center bg-yellow-300">
                        This is the picture
                    </div>
                    <div className="h-[95vh] w-[230vw] flex justify-center items-center bg-white">
                        Cool
                    </div>
                    <div className="h-[95vh] w-[100vw] flex justify-center items-center bg-yellow-300">
                        This is the picture
                    </div>
                    <div className="h-[95vh] w-[400vw] flex justify-center items-center bg-white">
                        Love the wrapped?
                    </div>
                    <div className="h-[95vh] w-[100vw] flex justify-center items-center bg-yellow-300">
                        This is the picture
                    </div>
                    <div className="h-[95vh] w-[230vw] flex justify-center items-center bg-white">
                        Awesome
                    </div>
                    <div className="h-[95vh] w-[100vw] flex justify-center items-center bg-yellow-300">
                        This is the picture
                    </div>
                    <div className="h-[95vh] w-[400vw] flex justify-center items-center bg-white">
                        Want more?
                    </div>


                </div>
            </div>
        </main>
    )
}

export default Hero