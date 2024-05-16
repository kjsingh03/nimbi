import React from 'react'

function IntroCard({img,title,desc}) {
    return (
        <div className="flex flex-col items-center justify-center xl:justify-normal gap-4 w-full md:w-[34%] xl:w-[26.85%] md:max-w-[502px] md:border-l md:border-r border-b border-[#767f84] h-[16rem] xs:h-[17rem] sm:h-[15rem] md:h-[26rem] lg:h-[24rem] 2xl:h-[21rem] px-4 py-4 lg:px-8 lg:py-10">
            <div className="w-12 ">
                <img src={img} alt="" className='w-full h-full object-fill' />
            </div>
            <p className='font-semibold text-xl'>{title}</p>
            <p className='text-sm font-[Roboto] w-[99%] md:w-[70%] text-[#c0c4c6] text-center'>{desc}</p>
        </div>
    )
}

export default IntroCard
