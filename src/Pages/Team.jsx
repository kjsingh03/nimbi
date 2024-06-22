import React, { useState } from 'react'
import Footer from '../components/Footer/Footer'
import { cross, ellipse, team1, team2, team3, team4, team5, team6, team7, team8, telegram } from '../assets'
import { TeamCard } from '../components'
import { card1, card2, card3, card4, card5, card6, card7, card8 } from '../assets'
import '../App.css'

function Team() {

  const [modal, setModal] = useState({})

  const handleClick = ({ img, position, title, desc, id }) => {

    document.querySelector(`.modal`).classList.add('active')

    document.querySelector(`.team-page`).classList.add('fixed')

    setModal({ img, position, title, desc, id })

    const query = document.querySelector(`.modal-card`)

    setTimeout(() => {
      document.addEventListener('click', (e) => {
        if (!query.contains(e.target)) {
          closeModal()
        }
      }, 50)

    })
  }

  const closeModal = () => {
    document.querySelector(`.modal`)?.classList.remove('active')
    setModal({})
    document.querySelector(`.team-page`).classList.remove('fixed')

  }

  return (
    <>
      <div className='w-[90%] xlg:w-[80%] 4xl:w-[1506px] mx-auto'>
        <div className="team-page pb-52 flex flex-col justify-center gap-20 w-full px-0 mx-auto capitalize py-16 bg-[url(./assets/whaleLeft.png),url(./assets/mountain.png),url('./assets/bigEllipse.png')] team bg-no-repeat font-['Inter',sans-serif]">

          <div className="w-full border-b border-b-[#c4c0c8] py-6 font-['Roboto_Condensed',sans-serif]">
            <p className='uppercase text-[70px] font-semibold text-left py-3'>The people behind the scenes</p>
            <p className='text-[16px] text-center md:text-left py-3'>Decentralized Collaboration is at the heart of our mission. We are proud to partner with industry leaders, innovators, and like-minded projects to drive forward our vision of a decentralized future. Together, we're building bridges, fostering innovation, and creating opportunities for growth and advancement in the blockchain space.</p>
          </div>

          <div className="flex flex-col gap-20">
            <div className="relative w-max">
              <div className="btn bg-[#5c666c] px-2 py-1 w-max font-bold text-base uppercase z-10"><p>our team</p></div>
              <img src={ellipse} className='absolute -top-9 -right-12 w-[6.375rem] -z-0' alt="" />
            </div>

            {/* <div id={modal.id} className="modal hidden h-screen w-full fixed top-0 left-0 z-30 items-center justify-center bg-black/40">
            <div className='modal-card team relative capitalize z-40 h-[20rem] w-[20rem] md:h-[25rem] md:w-[25rem] lg:h-[26rem] xl:h-[26rem] 3xl:h-[41rem] lg:w-[26rem] xl:w-[26rem] 3xl:w-[60rem] mx-auto flex flex-col gap-2 bg-[#334047] border border-[#5c666c] p-2 '>
              <div className="xs:h-[16rem] xl:h-[18rem] 3xl:h-[31rem]">
                <img src={modal.img} alt="" className='w-full h-full object-cover' />
              </div>
              <div className="absolute w-10 h-10 right-3 top-3 ">
                <img src={telegram} alt="" className='w-full h-full object-cover' />
              </div>
              <div className="absolute w-10 h-10 left-3 top-3 cursor-pointer hover:opacity-100 opacity-50">
                <img onClick={closeModal} src={cross} alt="" className='w-full h-full object-cover' />
              </div>
              <p className="uppercase font-semibold text-[#00ace6] text-[0.83rem]">{modal.position}</p>
              <p className="text-white underline text-2xl font-semibold cursor-pointer">{modal.title}</p>
              <p className="text-[#e4e5e6] text-[0.67rem] font-light">{modal.desc}</p>
            </div>
          </div> */}

            <div className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 gap-6 lg:gap-4">
              <TeamCard handleClick={handleClick} id="teamCard1" img={team1} position="CEO and Founder" title="Dack Thomas" desc="Dack leads Nimbi with strategic vision, driving innovation and growth within the token development project." />
              <TeamCard handleClick={handleClick} id="teamCard2" img={team2} position="chief technical officer" title="Narek Terteryan" desc="Narek oversees technical strategy and development, ensuring innovative, secure, and scalable infrastructure." />
              <TeamCard handleClick={handleClick} id="teamCard3" img={team3} position="Web & Smart Contract developer" title="Alex Schilling" desc="Alex develops secure smart contracts and web interfaces, ensuring seamless user interactions within Nimbi." />
              <TeamCard handleClick={handleClick} id="teamCard4" img={team4} position="Smart contract dev and auditor" title="Mujahid Ali" desc="Ali writes and audits smart contracts, ensuring security and reliability through rigorous testing." />
              <TeamCard handleClick={handleClick} id="teamCard5" img={team5} position="Blockchain / Full-Stack Developer" title="Tony Gonzales" desc="Tony builds and maintains blockchain infrastructure and user-facing applications, ensuring efficiency and security." />
              <TeamCard handleClick={handleClick} id="teamCard6" img={team6} position="UI/UX designer " title="Hovhannes Yeganyan" desc="Hovo designs intuitive and visually appealing user interfaces to enhance user satisfaction and engagement." />
              <TeamCard handleClick={handleClick} id="teamCard7" img={team7} position="web3 game developER" title="Brian Tyner" desc="Brian creates engaging Web3 games, integrating blockchain technology for innovative and secure gaming experiences." />
              <TeamCard handleClick={handleClick} id="teamCard8" img={team8} position="UX Writer/Content Strategist" title="Dean Eskich" desc="Dean crafts clear, user-friendly content and guides, ensuring a cohesive and seamless user experience." />
            </div>




          </div>
        </div>
      </div>
        <Footer path='/about' />
    </>
  )
}

export default Team
