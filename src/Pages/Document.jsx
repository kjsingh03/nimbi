import React from 'react'
import Footer from '../components/Footer/Footer'
import { icon, leftArrow, rightArrow } from '../assets'

function Document() {
  return (
    <>
      <div className='flex capitalize pt-16 sm:flex-row flex-col'>

        <div className="sm:w-[33%] flex flex-col gap-4 items-center sm:items-end min-h-screen border-r border-r-[#c4c0c8] py-6">
          <div className="w-[90%] xl:w-[75%] flex flex-col gap-2 px-2">
            <p className='uppercase text-left font-semibold'>overview</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between bg-[#28343b] rounded-lg py-2 px-4 cursor-pointer">
                <p className=''>launchpad</p>
                <img src={icon} className='w-3 h-3 rotate-90' alt="" />
              </div>
              <ul className='pl-8 text-[0.65rem] md:text-[0.83rem]'>
                <li className='hover:bg-[#28343b] py-3 px-2 rounded-lg cursor-pointer'>The current state of project launches on solana</li>
                <li className='hover:bg-[#28343b] py-3 px-2 rounded-lg cursor-pointer bg-[#28343b]'>nimbi launchpad</li>
                <li className='hover:bg-[#28343b] py-3 px-2 rounded-lg cursor-pointer'>user flow for solster launchpad</li>
              </ul>
            </div>
          </div>
          <div className="w-[90%] xl:w-[75%] flex flex-col gap-2 px-2">
            <p className='uppercase text-left font-semibold'>tokenomics</p>
            <div className="flex flex-col gap-2">

              <ul className='pl-8 text-[0.65rem] md:text-[0.83rem]'>
                <li className='hover:bg-[#28343b] py-3 px-2 rounded-lg cursor-pointer'>token economics</li>
                <li className='hover:bg-[#28343b] py-3 px-2 rounded-lg cursor-pointer'>token burn</li>
                <li className='hover:bg-[#28343b] py-3 px-2 rounded-lg cursor-pointer'>user flow for solster launchpad</li>
              </ul>
            </div>
          </div>
          <div className="w-[90%] xl:w-[75%] flex flex-col gap-2 px-2">
            <p className='uppercase text-left font-semibold'>roadmap</p>
            <div className="flex flex-col gap-2">

              <ul className='pl-8 text-[0.65rem] md:text-[0.83rem]'>
                <li className='hover:bg-[#28343b] py-3 px-2 rounded-lg cursor-pointer'>road to nimbi success</li>
                <li className='hover:bg-[#28343b] py-3 px-2 rounded-lg cursor-pointer'>chapter name</li>
              </ul>
            </div>
          </div>
          <div className="w-[90%] xl:w-[75%] flex flex-col gap-2 px-2">
            <p className='uppercase text-left font-semibold'>testnet launch</p>
            <div className="flex flex-col gap-2">

              <ul className='pl-8 text-[0.65rem] md:text-[0.83rem]'>
                <li className='hover:bg-[#28343b] py-3 px-2 rounded-lg cursor-pointer'>how to receive testnet tokens</li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" px-[3rem] md:px-[3rem] sm:w-[67%] md:w-[67%] pb-4 capitalize bg-[url('./assets/mountain.png')] bg-cover bg-right-bottom bg-no-repeat font-['Inter',sans-serif]">

          <div className="flex flex-col gap-10">
            <div className="w-full border-b border-b-[#c4c0c8] py-6 font-['Roboto',sans-serif]">
              <p className='uppercase text-3xl font-semibold text-left py-3'>Nimbi Launchpad</p>
            </div>

            <div className='text-[0.65rem] md:text-[0.83rem] leading-loose'>
              <p>IDO Launchpad for Decentralized Fundraising<br />
                Conventional launchpads rely on first come and first clicks. Unlike them, our launchpad is fair and equitable for all and yet rewards token holders.<br />
                The Solster launchpad doesn’t have high financial barriers to get into the market. It also doesn’t have whitelist spots based on first form fillers.<br />
                The Nimbi launchpad fundraising will follow the trilogy system marked in three rounds. The system ensures guaranteed fund allocation to the participants based on the quality of Solster Tokens they own.<br />
                Take a look at our trilogy system for fund allocation:<br />
                Round 1:<br />
                This round will have<br />
                All token holders in the pool fulfilling the base requirements of staked STR tokens.<br />
                STR Token Holders can contribute based on<br />
                <ul className='list-disc px-8'>
                  <li>The staked quantity of STR tokens.</li>
                  <li>The weight of their pool.</li>
                  <li>KYC</li>
                </ul>
                Each fundraising would last over a six-hour period and will be allocated through an initial distribution offering (IDO) for new projects.<br />
                Round 2:<br />
                It is optional. This round will have<br />
                <ul className='list-disc px-8'>
                  <li>All token holders who have STR tokens in their wallets irrespective of staking</li>
                  <li>KYC</li>
                  <li>Whitelisting</li>
                </ul>
                All users will be allotted six hours to buy tokens. It’s the same time frame when they can contribute to the given IDO projects. All users will get confirmed allocation based on their eligibility.<br />
                Round 3:<br />
                The third round will only take place if IDO projects have any unsold/spare tokens in Round 2. The round is open for everyone and no criteria of staked STR token applies here.<br />
                The only criteria the users need to meet is whitelisting criteria.<br />
                Note: IDO projects will determine international regulations, KYC, and other sales requirements.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-2">
              <div className="flex items-center gap-1 lg:gap-7 border border-[#334047] bg-transparent hover:bg-[#28343b66] cursor-pointer py-3 px-4 rounded-lg w-full">
                <img src={leftArrow} alt="" className='w-4 h-3' />
                <div className="flex flex-col gap-2">
                  <p className='text-[0.6rem] md:text-xs'>Previous</p>
                  <p className='text-[0.6rem] md:text-xs lg:text-sm font-semibold md:w-[95%]'>the current state of project launches on solana</p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-1 lg:gap-7 border border-[#334047] bg-transparent hover:bg-[#28343b66] cursor-pointer py-3 px-4 rounded-lg w-full">
                <div className="flex flex-col gap-2 text-right ">
                  <p className='text-[0.6rem] md:text-xs text-[#00ace6]'>Next</p>
                  <p className='text-[0.6rem] md:text-xs lg:text-sm font-semibold md:w-[95%]'>user flow for solester launchpad</p>
                </div>
                <img src={rightArrow} alt="" className='w-4 h-3' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer path='/documents' />
    </>
  )
}

export default Document
