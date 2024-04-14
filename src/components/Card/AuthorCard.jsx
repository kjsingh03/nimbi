import React from 'react'
import { logo1 } from '../../assets'

function AuthorCard({ img }) {
    return (
        <>
            {
                img &&
                <div className='h-[18rem] xs:h-[14rem] xl:h-full xl:w-full relative font-bold text-black'>

                    <img src={img} alt="" className='w-full h-full object-cover' />

                    <div className="absolute top-5 left-5">
                        <p className='text-white bg-black/25 rounded-xl font-normal py-1 px-2 text-[0.6rem]'>@author</p>
                    </div>
                    <div className="absolute w-full bottom-0 flex justify-between items-center bg-[#eff2f3]">
                        <div className="flex gap-2 items-center justify-center">
                            <div className="w-10 md:w-12 p-2 overflow-hidden">
                                <img src={logo1} alt="" className='w-full h-full object-fill' />
                            </div>
                            <div className="">
                                <p className='text-[0.6rem] md:text-sm'>Nimbi #50</p>
                                <p className='text-[0.6rem] font-medium'>@author</p>
                            </div>
                        </div>
                        <p className='font-bold text-[0.6rem] md:text-sm text-black pr-2'>152.2 ETH</p>
                    </div>
                </div>
            }
            {
                !img &&
                <div className='h-full w-full bg-transparent hidden xl:block'>

                </div>
            }
            </>
    )
}

export default AuthorCard
