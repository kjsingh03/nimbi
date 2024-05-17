import React from 'react'
import { discordIcon, telegramIcon, twitterIcon, xIcon } from '../../assets'

function Footer({ path = "/" }) {
  return (
    <div className="capitalize text-xs flex flex-col gap-4 bg-[#1c2327] px-[2rem] lg:px-[4rem] xl:px-[8rem] py-8 border-t border-[#767f84]">
      {
        path === "/" &&
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-4 items-center justify-between w-full 3xl:w-[90%] mx-auto">
          <div className=" flex flex-col lg:items-start items-center text-center lg:text-left w-full gap-4 sm:gap-6 lg:w-[40%] xl:w-[30%]">
            <div className="flex flex-col gap-2">
              <p className=" font-['Inter'] text-sm">Register here</p>
              <div className=" flex sm:flex-row flex-col items-center  gap-2 sm:gap-4 w-full">
                <input type="text" placeholder='Email' className='bg-transparent p-2 text-sm border border-[#767f84] w-full' />
                <div className="btn px-6 w-full sm:w-[10rem] text-center font-['Inter'] text-sm">Sign up</div>
              </div>
            </div>
            <p className='text-[#a1a7aa]'>your email addresses will only be used forairdrop notifications and won't be shared with third parties</p>
          </div>
          <ul className="list-none flex sm:gap-8 items-center sm:flex-row gap-4 flex-col">
            <li className='hover:underline hover:text-[#00ACE6] cursor-pointer'>Terms and conditions</li>
            <li className='hover:underline hover:text-[#00ACE6] cursor-pointer'>privacy policy</li>
            <li className='hover:underline hover:text-[#00ACE6] cursor-pointer'>contact us</li>
            <li className='hover:underline hover:text-[#00ACE6] cursor-pointer'>see our whitepaper</li>
          </ul>
        </div>
      }
      <div className={`flex items-center sm:flex-row gap-4 flex-col  justify-between ${path === "/" ? 'pt-4 border-t border-[#767f84]' : ""}  w-full 3xl:w-[90%] mx-auto`}>
        <div className="flex items-center gap-4">
          <p className='text-[#a1a7aa] font-["Roboto"]'>our community</p>
          <ul className="list-none flex gap-2 items-center">
            <li><img src={telegramIcon} className='w-5 rounded-sm cursor-pointer' alt="" /></li>
            <li><img src={discordIcon} className='w-5 rounded-sm cursor-pointer' alt="" /></li>
            <li><img src={twitterIcon} className='w-5 rounded-sm cursor-pointer' alt="" /></li>
            <li><img src={xIcon} className='w-5 rounded-sm cursor-pointer' alt="" /></li>
          </ul>
        </div>
        <p className='normal-case font-["Roboto"]'>Copyright &copy; 2024 NIMBI.COM | All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
