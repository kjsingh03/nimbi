import React from 'react'

function TeamCard({ img, position, title, desc }) {
    return (
        <div className='h-full w-full flex flex-col gap-4'>
            <div className="">
                <img src={img} alt="" className='w-full h-full object-cover' />
            </div>
            <p className="">{position}</p>
            <p className="">{title}</p>
            <p className="">{desc}</p>
        </div>
    )
}

export default TeamCard
