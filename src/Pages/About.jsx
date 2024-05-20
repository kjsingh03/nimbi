import React from 'react'
import { rightWolf } from '../assets'
import Footer from '../components/Footer/Footer'
import '../App.css'

function About() {
  return (
    <div className=''>
      <div className="flex flex-col items-center justify-center gap-[48px] w-full px-[2rem] md:px-[5rem] xl:px-[11rem] mx-auto capitalize py-16 bg-[url(./assets/whaleLeft.png),url(./assets/mountain.png)] about bg-no-repeat font-['Roboto_Condensed',sans-serif]">

        <div className="w-full border-b border-b-[#c4c0c8] py-6">
          <p className='uppercase text-[44px] font-semibold text-left py-3'>About us</p>
        </div>

        <div className="flex flex-col items-center gap-[100px]">

          <div className="flex flex-col items-center justify-center gap-6 lg:w-[75%] text-center">
            <p className='text-[40px] font-semibold'>What Is Nimbi Token?</p>
            <p className='text-[24px] font-medium tracking-tight'>Come Join The Nimbi Vip Loyalty Program And Help Unite The Nimbi Wolfpack Team.</p>
            <p className='text-[16px] font-["Roboto"] text-[#ebeced] text-center'>Nimbi Token Is A Groundbreaking decentralized eco-system merging unity and blockchain technology together as d-power. Operating on the erc-404 token protocol, early adopters to the nimbi community will receive airdrops and become a nimbi wolfpack vip partner. As an early adopter you will become part of the wolfpack and enjoy these perks for free. This will give you free access and be the first to play a web3 decentralized game(Crypto Dust Runner) that is currently in development. you will also be able to convert your crypto dust to the nimbi ecosystem that gives you even more power. The ecosystem will also support the Decentralized Lotto with your old crypto dust. hold on to your nimbi token as long as you can because even more dapps are in development to support the nimbi ecosystem.</p>
          </div>

          <div className="flex justify-center gap-4 lg:gap-8 items-center flex-col lg:flex-row-reverse ">
            <div className="rounded-lg overflow-hidden xs:w-[70%] md:w-[50%] mx-auto">
              <img src={rightWolf} alt="" className='w-full h-full object-cover' />
            </div>
            <div className="flex flex-col gap-4 lg:gap-8 py-6 lg:w-[50%] text-center lg:text-start">
              <p className='text-[40px] font-semibold'>NIMBI</p>
              <p className='text-[16px] font-["Roboto"] text-[#ebeced]'>Nimbi, a character with dual existences. In one he is a central figure in the associated Web3 video game Crypto Dust Runner and an artistic representation in the NFT Nimbi Art Collection. The ERC-404 Nimbi Token also bears his name, enhancing his integral role within the ecosystem. In this capacity Nimbi is on a quest to gather members for his Wolfpack, leading them on adventures across the virtual landscape.<br />
                In the other, Nimbi is Mr. Nimbus—a two-year-old White Wolf rescued as a puppy from a reservation. Known as a Res-Wolf Dog, Nimbi's early life on the reservation introduced him to the harsh realities and the concept of "Crypto Dust," a metaphor for the scraps and remnants he survived on. Now thriving in the Rocky Mountains, he embodies resilience and leadership, characteristics that translate into his digital persona where he guides players to the apex of mountains and beyond in Crypto Dust Runner.
              </p>
            </div>
          </div>

          <div className="flex justify-center gap-4 lg:gap-8 items-center flex-col lg:flex-row ">
            <div className="rounded-lg overflow-hidden xs:w-[70%] md:w-[50%] mx-auto">
              <img src={rightWolf} alt="" className='w-full h-full object-cover' />
            </div>
            <div className="flex flex-col gap-4 lg:gap-8 py-6 lg:w-[50%] text-center lg:text-start">
              <p className='text-[40px] font-semibold'>KAZI</p>
              <p className='text-[16px] font-["Roboto"] text-[#ebeced]'>Kazi brings a different energy to the project. A six-year-old Aussie Husky, also a rescue, Kazi brings his experiences from the sweltering South to the cooler climates of the Rocky Mountains. His natural inclination to mediate and maintain peace, demonstrated by his behavior of breaking up fights at dog parks, is mirrored in the digital world.<br />
                In Crypto Dust Runner, Kazi's role transcends mere play. He is envisioned as a mediator within the game's community, potentially influencing gameplay dynamics where cooperation among players is crucial. His presence in the game and the ecosystem symbolizes the project's commitment to fostering a cooperative and harmonious community, reflecting his peacemaking nature</p>
            </div>
          </div>

        </div>


      </div>
      <Footer path='/about' />
    </div>
  )
}

export default About
