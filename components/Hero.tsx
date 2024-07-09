"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import artists from "../assets/index"

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

            }

        })

        return () => {
            pin.kill()
        }
    }, [])



    return (
        <main className=" overflow-hidden">
            <div ref={triggerRef}>
                <div ref={sectionRef} className=" h-[100vh] w-[400vw] flex justify-center items-center relative border-none">
                    <div className="h-[100vh] w-[550vw] flex justify-center items-center bg-[#4700D8] font-bebas text-[140px] text-[#91d800] border-2 border-[#4700D8]">
                        Use Spotify?
                    </div>
                    <div className="h-[100vh] w-[150vw] flex justify-center items-center bg-gradient-to-r from-[#4700D8] to-[#FF204E]">

                        <Image className="rounded-xl h-[85vh] 2xl:h-[90vh] absolute w-[30vw] 2xl:w-[25vw]"
                            src={artists.Lana}
                            width={0}
                            height={0}
                            alt="Lana" />


                    </div>
                    <div className="h-[100vh] w-[230vw] flex justify-center items-center bg-[#FF204E] text-[140px] font-bebas text-[#20ffd1]">
                        Cool!
                    </div>
                    <div className="h-[100vh] w-[150vw] flex justify-center items-center bg-gradient-to-r from-[#FF204E] to-[#2192FF]">
                        <Image className="rounded-xl h-[85vh] 2xl:h-[90vh] absolute w-[30vw] 2xl:w-[25vw]"
                            src={artists.Coldplay}
                            width={0}
                            height={0}

                            alt="Lana" />
                    </div>
                    <div className="h-[100vh] w-[400vw] flex justify-center items-center bg-[#2192FF] text-[140px] text-[#ff8e21] font-bebas text-center">
                        Love the wrapped?
                    </div>
                    <div className="h-[100vh] w-[150vw] flex justify-center items-center bg-gradient-to-r from-[#2192FF] to-[#FBFF00]">
                        <Image className="rounded-xl h-[85vh] 2xl:h-[90vh] absolute w-[30vw] 2xl:w-[25vw]"
                            src={artists.Kendrick}
                            width={0}
                            height={0}

                            alt="Lana" />
                    </div>
                    <div className="h-[100vh] w-[240vw] flex justify-center items-center bg-[#FBFF00] text-[125px] text-[#0400ff] font-bebas">
                        Awesome!
                    </div>
                    <div className="h-[100vh] w-[150vw] flex justify-center items-center bg-gradient-to-r from-[#FBFF00] to-[#16FF00]">
                        <Image className="rounded-xl h-[85vh] 2xl:h-[90vh] absolute w-[30vw] 2xl:w-[25vw]"
                            src={artists.Eagles}
                            width={0}
                            height={0}

                            alt="Lana" />
                    </div>
                    <div className="h-[100vh] w-[400vw] flex justify-center items-center bg-[#16FF00] text-[140px] text-[#e900ff] font-bebas">
                        Want more?
                    </div>


                </div>
            </div>
        </main>
    )
}

export default Hero