import React from 'react'
import { W, ada, atom, avax, binance, blockto, bnb, brave, btc, coinbase, cross, doge, ethereum, flash, icp, math, metamask, opera, polygon, safepal, sch, shibh, stx, tp, trust, uni, usdc, wallet98, wbtc, xrp } from '../assets'
import Footer from '../components/Footer/Footer'
import '../App.css'

function Wallet() {

  const connectModal = (e) => {

    const query = document.querySelector('.connectModal')
    
    query.style.display='flex'
    
  }

  const closeModal =()=>{
    document.querySelector('.connectModal').style.display='none'
  }

  return (
    <div className=''>
      <div className="flex flex-col items-center gap-12 w-full px-[2rem] md:px-[5rem] xl:px-[11rem] mx-auto capitalize py-[6rem] bg-[url(./assets/mountain.png)] bg-bottom min-h-screen bg-no-repeat font-['Roboto_Condensed',sans-serif]">

        <div className="flex flex-col items-center justify-center gap-1 lg:w-[75%] text-center">
          <p className='text-3xl font-semibold'>Wallet</p>
        </div>

       

       


      </div>
    </div>
  )
}

export default Wallet
