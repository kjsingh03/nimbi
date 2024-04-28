import React from 'react'
import { leftWolf, rightWolf } from '../assets'
import Footer from '../components/Footer/Footer'
import '../App.css'

function Wallet() {
  return (
    <div className=''>
      <div className="flex flex-col items-center justify-center gap-12 w-full px-[2rem] md:px-[5rem] xl:px-[11rem] mx-auto capitalize py-16 bg-[url(./assets/mountain.png)] bg-bottom min-h-screen bg-no-repeat font-['Roboto_Condensed',sans-serif]">

        <div className="flex flex-col items-center justify-center gap-1 lg:w-[75%] text-center">
          <p className='text-3xl font-semibold'>crypto dust converter</p>
          <p className='text-sm text-center text-[#A1A7AA]  '>convert small token amounts</p>
        </div>

        


      </div>
      <Footer path='/wallet' />
    </div>
  )
}

export default Wallet
