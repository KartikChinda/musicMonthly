import React from 'react';
import Image from 'next/image';
import images from '@/assets/grid/grid';
import styles from "./pictures.module.css";

const Pictures = () => {
    return (
        // <div className='bg-orange p-2 h-full rounded-lg w-[100%] overflow-hidden' >
        //     {/* <Image src={images[0]} alt='user' className="transform scale-110" /> */}
        // </div>
        <div className='h-full w-full rounded-lg border-2'>
            <div className={styles.imgSlider}>

            </div>
        </div>

    )
}

export default Pictures