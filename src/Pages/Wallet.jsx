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
          <p className='text-3xl font-semibold'>crypto dust converter</p>
          <p className='text-sm text-center text-[#A1A7AA]  '>convert small token amounts</p>
        </div>

        <div className="bg-[#2e3a41] border border-[#5c666c] flex flex-col gap-2 p-3 rounded-md">

          <div className="grid grid-cols-4 place-items-center gap-x-12 gap-y-6 bg-[#242d32] p-4 rounded-lg h-[20rem] overflow-y-auto">
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={polygon} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>Matic</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={xrp} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>xrp</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={doge} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>doge</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={usdc} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>usdc</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={ada} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>ada</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={btc} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>btc</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={icp} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>icp</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={shibh} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>shib</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={stx} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>stx</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={avax} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>avax</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={bnb} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>bnb</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={atom} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>atom</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={wbtc} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>wbtc</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={uni} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>uni</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={sch} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>sch</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={ethereum} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>eth</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={polygon} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>Matic</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={xrp} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>xrp</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={doge} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>doge</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={usdc} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>usdc</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={ada} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>ada</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={btc} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>btc</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={icp} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>icp</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={shibh} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>shib</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={stx} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>stx</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={avax} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>avax</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={bnb} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>bnb</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={atom} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>atom</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={wbtc} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>wbtc</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={uni} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>uni</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={sch} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>sch</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem]">
                <img src={ethereum} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-sm'>eth</p>
            </div>
          </div>

          <button onClick={connectModal} className='btn w-full text-base text-center flex items-center gap-1 justify-center'>
            <div className="w-[1.5rem]">
              <img src={flash} className='w-full h-full object-cover' alt="" />
            </div>
            <p>Connect wallet</p>
          </button>
        </div>

        <div className="connectModal fixed top-0 backdrop-blur-[1.5px] h-screen w-screen z-[100] hidden justify-center items-center ">
          <div className="bg-[#2e3a41] mt-[6rem] flex flex-col gap-2 w-[20.75rem] border border-[#5c666c] px-4 rounded-lg">
            <div className="flex justify-between items-center border-b border-b-[#5c666c] py-4">
              <div className="flex gap-2 items-center">
                <div className="w-5">
                  <img src={flash} className='w-full h-full object-cover' alt="" />
                </div>
                <p className='text-lg'>Connect wallet</p>
              </div>
              <div onClick={closeModal} className="w-6 cursor-pointer">
                <img src={cross} className='w-full h-full object-cover' alt="" />
              </div>
            </div>
            <div className="grid grid-cols-4 place-items-center gap-x-2 gap-y-6 rounded-lg p-4">
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] rounded-lg overflow-hidden">
                <img src={wallet98} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-xs'>98 wallet</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] rounded-lg overflow-hidden">
                <img src={binance} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-xs'>binance</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] rounded-lg overflow-hidden">
                <img src={tp} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-xs'>tp wallet</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] rounded-lg overflow-hidden">
                <img src={metamask} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-xs'>metamask</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] rounded-lg overflow-hidden">
                <img src={coinbase} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-xs'>coinbase</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] rounded-lg overflow-hidden">
                <img src={trust} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-xs'>trust</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] rounded-lg overflow-hidden">
                <img src={blockto} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-xs'>blockto</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] rounded-lg overflow-hidden">
                <img src={brave} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-xs'>brave</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] rounded-lg overflow-hidden">
                <img src={math} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-xs'>math</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] rounded-lg overflow-hidden">
                <img src={opera} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-xs'>opera</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] rounded-lg overflow-hidden">
                <img src={safepal} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-xs'>safepal</p>
            </div>
            <div className="flex flex-col gap-1 items-center text-center">
              <div className="w-[2rem] h-[2rem] rounded-lg overflow-hidden">
                <img src={W} className='w-full h-full object-cover' alt="" />
              </div>
              <p className='uppercase text-xs'>wallet connect</p>
            </div>
            
            
          </div>
          </div>
        </div>


      </div>
      <Footer path='/wallet' />
    </div>
  )
}

export default Wallet
