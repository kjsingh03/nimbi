import React from 'react'

function IntroCard({img,title,desc}) {
    return (
        <div className="flex flex-col items-center gap-4 md:w-[34%] xl:w-[28.5%] md:border-l md:border-r border-b border-[#767f84] h-[17rem] xs:h-[15rem] sm:h-[13rem] md:h-[21rem] lg:h-[20rem] p-4 lg:p-8">
            <div className="w-10 ">
                <img src={img} alt="" className='w-full h-full object-fill' />
            </div>
            <p className='font-semibold text-xl'>{title}</p>
            <p className='text-sm w-[90%] text-[#c0c4c6] text-center'>{desc}</p>
        </div>
    )
}

export default IntroCard
