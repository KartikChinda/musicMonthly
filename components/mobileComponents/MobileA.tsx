import React from 'react'

const MobileA = () => {
    return (
        <div className='w-[95%] flex flex-col justify-center items-center'>
            <div className='h-[90vh] w-full flex flex-col justify-center gap-10 items-center bg-[#4700D8] font-bebas text-[100px] md:text-[130px] text-[#91d800] text-center p-4 leading-none'>
                <div>Use Spotify?</div>
                <div >
                    Cool!
                </div>
            </div>

            <div className="h-[20vh] w-full flex justify-center items-center bg-gradient-to-b from-[#4700D8] to-[#FF204E]">
            </div>

            <div className='h-[90vh] w-full flex flex-col justify-center gap-10 items-center bg-[#FF204E] font-bebas text-[100px] md:text-[130px] text-[#20ffd1] text-center p-4 leading-none'>
                <div>Love the Wrapped?</div>
                <div >
                    Awesome!
                </div>
            </div>
            <div className="h-[20vh] w-full flex justify-center items-center bg-gradient-to-b from-[#FF204E] to-[#16FF00]">
            </div>
            <div className='h-[90vh] w-full flex flex-col justify-center gap-10 items-center bg-[#16FF00] font-bebas text-[120px] md:text-[130px] text-[#e900ff] text-center p-4 leading-none'>
                <div>Want more of it?</div>

            </div>
        </div>
    )
}

export default MobileA