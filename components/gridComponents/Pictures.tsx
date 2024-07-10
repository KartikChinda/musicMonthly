import React from 'react';
import Image from 'next/image';
import images from '@/assets/grid/grid';
import styles from "./pictures.module.css";

const Pictures = () => {
    return (
        // <div className='bg-orange p-2 h-full rounded-lg w-[100%] overflow-hidden' >
        //     {/* <Image src={images[0]} alt='user' className="transform scale-110" /> */}
        // </div>
        <div className='h-full w-full rounded-lg'>
            <div className={styles.imgSlider}>
                <div className='z-20 flex flex-col gap-2 justify-center items-center h-full bg-[#f1730cac] text-4xl font-bold font-text hover:bg-[#f17102ca] hover:text-[40px] duration-150 group rounded-2xl'>
                    <div>Crafted for</div>
                    <div className='font-bebas text-6xl -mb-2 group-hover:text-9xl duration-150'>YOUR</div>
                    <div>ears.</div>
                </div>
            </div>
        </div>

    )
}

export default Pictures