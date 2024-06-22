import React from 'react'
import { icon } from '../../assets'

function CommunityCard({img,title,des,link}) {
    return (
        <a target='_blank' href={link} className="flex items-center justify-between gap-4 cursor-pointer hover:bg-[#242d32] rounded-md px-4 py-2">
            <div className="flex items-center justify-between gap-4 ">
                <img src={img} alt="" className='w-10' />
                <div className="">
                    <p className='font-semibold text-sm'>{title}</p>
                    <p className='text-xs'>{des}</p>
                </div>
            </div>
            <img src={icon} alt="" />
        </a>
    )
}

export default CommunityCard
