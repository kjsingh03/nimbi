import React from 'react'
import { icon } from '../../assets'

function Accordion({ques,ans}) {
  return (
    <div className=''>
      <div className="flex items-center justify-between border-b border-b-[#c4c0c8] py-4">
        <p className='text-xl font-semibold'>{ques}</p>
        <img src={icon} className='w-3 h-3 rotate-90' alt="" />
      </div>
      <p className='py-4 text-[0.65rem] md:text-[0.73rem]'>{ans}</p>
    </div>
  )
}

export default Accordion
