import React from 'react'
import { telegram } from '../../assets'

function TeamCard({ img, position, title, desc }) {
    return (
        <div className='relative capitalize lg:h-[18rem] xl:h-[21rem] w-full flex flex-col gap-2 bg-[#334047] border border-[#5c666c] p-2 '>
            <div className="">
                <img src={img} alt="" className='w-full h-full object-cover' />
            </div>
            <div className="absolute w-10 h-10 right-3 top-3 ">
                <img src={telegram} alt="" className='w-full h-full object-cover' />
            </div>
            <p className="uppercase font-semibold text-[#00ace6] text-[0.83rem]">{position}</p>
            <p className="text-white underline text-2xl font-semibold">{title}</p>
            <p className="text-[#e4e5e6] text-[0.67rem] font-light">{desc}</p>
        </div>
    )
}

export default TeamCard
