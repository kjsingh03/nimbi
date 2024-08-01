import React from 'react'
import { logo1 } from '../../assets'

function NFTCard({ img, clas, icon }) {
    return (
        <>
            {
                img &&
                <div className={`font-["Manrope"] w-full h-full relative font-bold text-black z-0 ${clas}`}>

                    <img src={img} alt="" className="w-full h-full" />

                    <div className="absolute top-2 left-2">
                        <p className='text-white bg-black/45 rounded-xl backdrop-blur-sm font-medium py-1 px-1.5 text-xs'>@author</p>
                    </div>

                    <div className="absolute w-full bottom-0 flex justify-between items-center bg-[rgba(146,157,167,0.81)]  backdrop-blur-[1px]">
                        <div className="flex gap-2 items-center justify-center p-2 pb-2">
                            {/* <div className="w-8 overflow-hidden">
                                <img src={logo1} alt="" className='w-full h-full object-fill' />
                            </div> */}
                            <div className="">
                                <p className='text-xs font-bold'>Nimbi #50</p>
                                <p className='text-[0.625rem] font-medium'>@author</p>
                            </div>
                        </div>
                        <div className="flex gap-1 items-center">
                            <img src={icon} alt="ETH Icon" />
                            <p className='font-bold text-sm text-black pr-2'>152.2 <span className='font-semibold'>ETH</span></p>
                        </div>
                    </div>

                </div>
            }
        </>
    )
}

export default NFTCard
