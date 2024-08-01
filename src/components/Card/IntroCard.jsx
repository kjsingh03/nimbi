import React from 'react'

function IntroCard({ img, title, desc }) {
    return (
        <div className="flex flex-col items-center justify-center xl:justify-center gap-[16px] w-full md:w-[34%] xl:w-[26.85%] xs:max-w-[502px] 2xl:w-[502px] md:border-l border md:border-b-0 border-[#767f84] h-[18rem] xs:h-[17rem] sm:h-[15rem] md:h-[26rem] lg:h-[24rem] 2xl:h-[21rem] py-[42px] px-[13px] ">
            <div className="w-24">
                <img src={img} alt="" className='w-full h-full object-fill' />
            </div>
            <div className="flex flex-col h-[136px] items-center text-center gap-2">

                <p className='font-semibold text-xl'>{title}</p>
                <p className='text-sm font-[Roboto] w-[94%] 2xl:w-[368px] text-[#c0c4c6] text-center'>{desc}</p>
            </div>

            {/* <img src={img} alt="" className='w-full h-full object-fill' /> */}
        </div>
    )
}

export default IntroCard
