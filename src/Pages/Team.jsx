import React from 'react'
import Footer from '../components/Footer/Footer'
import { ellipse } from '../assets'
import { TeamCard } from '../components'
import { card1,card2,card3,card4,card5,card6,card7,card8 } from '../assets'

function Team() {
  return (
    <>
      <div className="flex flex-col justify-center gap-12 w-full px-[3rem] md:px-[5rem] xl:px-[11rem] mx-auto capitalize py-16 bg-[url(./assets/whaleLeft.png),url(./assets/mountain.png),url('./assets/bigEllipse.png')] team bg-no-repeat font-['Inter',sans-serif]">

        <div className="w-full border-b border-b-[#c4c0c8] py-6 font-['Roboto_Condensed',sans-serif]">
          <p className='uppercase text-3xl font-semibold text-left py-3'>The people behind the scenes</p>
          <p className='text-[0.65rem] md:text-[0.83rem] text-center md:text-left py-3'>Decentralized Collaboration is at the heart of our mission. We are proud to partner with industry leaders, innovators, and like-minded projects to drive forward our vision of a decentralized future. Together, we're building bridges, fostering innovation, and creating opportunities for growth and advancement in the blockchain space.</p>
        </div>

        <div className="flex flex-col gap-16">
          <div className="relative w-max">
            <div className="btn bg-[#5c666c] px-2 py-1 w-max font-bold text-base uppercase z-10"><p>Founders</p></div>
            <img src={ellipse} className='absolute -top-6 -right-10 w-[5rem] -z-0' alt="" />
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            <TeamCard img={card8} position="ceo and founder" title="dack thomas" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
            <TeamCard img={card8} position="ceo and founder" title="dack thomas" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
            <TeamCard img={card8} position="ceo and founder" title="dack thomas" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
            <TeamCard img={card8} position="ceo and founder" title="dack thomas" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
          </div>

          <div className="relative w-max">
            <div className="btn bg-[#5c666c] px-2 py-1 w-max font-bold text-base uppercase z-10"><p>Game design team</p></div>
            <img src={ellipse} className='absolute -top-6 -right-10 w-[5rem] -z-0' alt="" />
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            <TeamCard img={card7} position="backend dev" title="nimbi token" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
            <TeamCard img={card2} position="ui/ux" title="nimbi token" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
            <TeamCard img={card3} position="technical officer" title="nimbi token" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
            <TeamCard img={card3} position="technical officer" title="nimbi token" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
          </div>

          <div className="relative w-max">
            <div className="btn bg-[#5c666c] px-2 py-1 w-max font-bold text-base uppercase z-10"><p>Web3 dev team</p></div>
            <img src={ellipse} className='absolute -top-6 -right-10 w-[5rem] -z-0' alt="" />
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            <TeamCard img={card4} position="smart contract dev" title="nimbi token" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
            <TeamCard img={card5} position="marketing" title="nimbi token" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
            <TeamCard img={card6} position="frontend dev" title="nimbi token" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
            <TeamCard img={card6} position="frontend dev" title="nimbi token" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
          </div>

          <div className="relative w-max">
            <div className="btn bg-[#5c666c] px-2 py-1 w-max font-bold text-base uppercase z-10"><p>marketing</p></div>
            <img src={ellipse} className='absolute -top-6 -right-10 w-[5rem] -z-0' alt="" />
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            <TeamCard img={card7} position="backend dev" title="nimbi token" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
            <TeamCard img={card2} position="ui/ux" title="nimbi token" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
            <TeamCard img={card1} position="community moderation" title="nimbi token" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
            <TeamCard img={card1} position="community moderation" title="nimbi token" desc="Building the Nimbi community day in, day out. Shaping NIMBI’s vision into reality a step at a time. Visionary behind the project" />
          </div>

          
        </div>


      </div>
      <Footer path='/about' />
    </>
  )
}

export default Team
