import React from 'react'

function IntroCard({img,title,desc}) {
    return (
        <div className="flex flex-col items-center gap-2 md:w-[34%] xl:w-[25%] md:border-l md:border-r border-b border-[#767f84] md:h-[14rem] lg:h-[18rem] p-8">
            <div className="w-10 ">
                <img src={img} alt="" className='w-full h-full object-fill' />
            </div>
            <p className='font-semibold'>{title}</p>
            <p className='text-[0.5rem] lg:text-[0.65rem] w-[90%] lg:w-[80%] text-[#c0c4c6] text-center'>{desc}</p>
        </div>
    )
}

export default IntroCard
