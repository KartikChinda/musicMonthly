"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Genre from "@/components/sliderComponents/Genre";
import Hello from "@/components/sliderComponents/Hello";
import TopSong from "@/components/sliderComponents/TopSong";
import TopSongs from "@/components/sliderComponents/TopSongs";
import TopArtist from "@/components/sliderComponents/TopArtist";
import TopArtists from "@/components/sliderComponents/TopArtists";
import Thanks from "@/components/sliderComponents/Thanks";

const components = [
    <Hello />,
    <TopSong />,
    <TopSongs />,
    <TopArtist />,
    <TopArtists />,
    <Genre />,
    <Thanks />,
];

const ONE_SECOND = 10000000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
};

const page = () => {

    const [componentIndex, setcomponentIndex] = useState(0);

    const dragX = useMotionValue(0);



    // this is caraousel stuff
    useEffect(() => {
        const intervalRef = setInterval(() => {
            const x = dragX.get();

            if (x === 0) {
                setcomponentIndex((pv) => {
                    if (pv === components.length - 1) {
                        return 0;
                    }
                    return pv + 1;
                });
            }
        }, AUTO_DELAY);

        return () => clearInterval(intervalRef);
    }, []);

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && componentIndex < components.length - 1) {
            setcomponentIndex((pv) => pv + 1);
        } else if (x >= DRAG_BUFFER && componentIndex > 0) {
            setcomponentIndex((pv) => pv - 1);
        }
    };

    return (
        <div className="relative overflow-hidden h-[100vh] bg-black py-8">
            <motion.div
                drag="x"
                dragConstraints={{
                    left: 0,
                    right: 0,
                }}
                style={{
                    x: dragX,
                }}
                animate={{
                    translateX: `-${componentIndex * 100}%`,
                }}
                transition={SPRING_OPTIONS}
                onDragEnd={onDragEnd}
                className="flex cursor-grab items-center active:cursor-grabbing"
            >
                <Components componentIndex={componentIndex} />
            </motion.div>

            <Dots componentIndex={componentIndex} setcomponentIndex={componentIndex} />
            <GradientEdges />
        </div>
    );
};

const Components = ({ componentIndex }: { componentIndex: any }) => {
    return (
        <>
            {components.map((component, idx) => {
                return (
                    <motion.div
                        key={idx}
                        animate={{
                            scale: componentIndex === idx ? 0.95 : 0.85,
                        }}
                        transition={SPRING_OPTIONS}
                        className="aspect-video w-screen shrink-0 rounded-xl bg-neutral-800 object-cover h-[90vh]"
                    >
                        {React.cloneElement(component, { active: componentIndex === idx })}
                    </motion.div>
                );
            })}
        </>
    );
};

const Dots = ({ componentIndex, setcomponentIndex }: { componentIndex: any, setcomponentIndex: any }) => {
    return (
        <div className="mt-4 flex w-full justify-center gap-2">
            {components.map((_, idx) => {
                return (
                    <button
                        key={idx}
                        onClick={() => setcomponentIndex(idx)}
                        className={`h-3 w-3 rounded-full transition-colors ${idx === componentIndex ? "bg-neutral-50" : "bg-neutral-500"
                            }`}
                    />
                );
            })}
        </div>
    );
};

const GradientEdges = () => {
    return (
        <>
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[70px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[70px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
        </>
    );
};

export default page