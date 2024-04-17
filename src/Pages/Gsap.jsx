import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP, ScrollTrigger)
import '../App.css'
import { indicator, tick, vector } from '../assets'

function Gsap() {

    

    return (

        <div className="wrapper overflow-x-hidden relative py-[10rem]" ref={ref}>
            <div className="container scrollx flex width-[150vw]">
                <svg className='absolute top-[2rem] left-[10vw] w-[50vw] ' viewBox="0 0 900 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
                        fill="#D9D9D9" />
                    <mask id="mask0_0_1" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="900"
                        height="10">
                        <path
                            d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
                            fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_0_1)">
                        <rect className="mask" y="-49" height="99" fill="black" />
                    </g>
                </svg>
                <section className="">
                    <div className="phase ">
                        <ul className='list-none z-40  text-xs flex flex-col relative gap-1 lg:w-[90%] xl:w-[70%] px-12 xs:px-6 sm:px-6 md:px-0 md:mx-auto'>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />community building</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />partnerships and collaborations</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />building CDR</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />completing private sale</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />completing launchpad launch</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />KYC and AUDIT</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />AMA's twitter spaces</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />airdrops</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />Pre-Sale alert</li>
                            <img src={indicator} className="w-8 h-8 absolute left-[rem] top-[12.5rem] z-20" />
                        </ul>
                        <div className="lg:w-[70%] px-12 xs:px-6 sm:px-16 md:px-0 md:mx-auto">

                            <p className='text-[#a1a7aa] text-sm'><span className='text-[#00ace6] font-semibold'>PRE-SALE PHASE:</span> 2024 Q3</p>
                            <p className='text-3xl font-semibold text-white'>Phase 03</p>
                            <p className='text-[#2b3338] text-5xl font-extrabold'>2024</p>
                        </div>
                    </div>
                </section>
                <section className="">
                    <div className="phase ">
                        <ul className='list-none z-40  text-xs flex flex-col relative gap-1 lg:w-[90%] xl:w-[70%] px-12 xs:px-6 sm:px-6 md:px-0 md:mx-auto'>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />community building</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />partnerships and collaborations</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />building CDR</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />completing private sale</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />completing launchpad launch</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />KYC and AUDIT</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />AMA's twitter spaces</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />airdrops</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />Pre-Sale alert</li>
                            <img src={indicator} className="w-8 h-8 absolute left-[rem] top-[12.5rem] z-20" />
                        </ul>
                        <div className="lg:w-[70%] px-12 xs:px-6 sm:px-16 md:px-0 md:mx-auto">

                            <p className='text-[#a1a7aa] text-sm'><span className='text-[#00ace6] font-semibold'>PRE-SALE PHASE:</span> 2024 Q3</p>
                            <p className='text-3xl font-semibold text-white'>Phase 03</p>
                            <p className='text-[#2b3338] text-5xl font-extrabold'>2024</p>
                        </div>
                    </div>
                </section>
                <section className="">
                    <div className="phase ">
                        <ul className='list-none z-40  text-xs flex flex-col relative gap-1 lg:w-[90%] xl:w-[70%] px-12 xs:px-6 sm:px-6 md:px-0 md:mx-auto'>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />community building</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />partnerships and collaborations</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />building CDR</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />completing private sale</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />completing launchpad launch</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />KYC and AUDIT</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />AMA's twitter spaces</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />airdrops</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />Pre-Sale alert</li>
                            <img src={indicator} className="w-8 h-8 absolute left-[rem] top-[12.5rem] z-20" />
                        </ul>
                        <div className="lg:w-[70%] px-12 xs:px-6 sm:px-16 md:px-0 md:mx-auto">

                            <p className='text-[#a1a7aa] text-sm'><span className='text-[#00ace6] font-semibold'>PRE-SALE PHASE:</span> 2024 Q3</p>
                            <p className='text-3xl font-semibold text-white'>Phase 03</p>
                            <p className='text-[#2b3338] text-5xl font-extrabold'>2024</p>
                        </div>
                    </div>
                </section>
                <section className="">
                    <div className="phase ">
                        <ul className='list-none z-40  text-xs flex flex-col relative gap-1 lg:w-[90%] xl:w-[70%] px-12 xs:px-6 sm:px-6 md:px-0 md:mx-auto'>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />community building</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />partnerships and collaborations</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />building CDR</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />completing private sale</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />completing launchpad launch</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />KYC and AUDIT</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />AMA's twitter spaces</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />airdrops</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />Pre-Sale alert</li>
                            <img src={indicator} className="w-8 h-8 absolute left-[rem] top-[12.5rem] z-20" />
                        </ul>
                        <div className="lg:w-[70%] px-12 xs:px-6 sm:px-16 md:px-0 md:mx-auto">

                            <p className='text-[#a1a7aa] text-sm'><span className='text-[#00ace6] font-semibold'>PRE-SALE PHASE:</span> 2024 Q3</p>
                            <p className='text-3xl font-semibold text-white'>Phase 03</p>
                            <p className='text-[#2b3338] text-5xl font-extrabold'>2024</p>
                        </div>
                    </div>
                </section>
                <section className="">
                    <div className="phase ">
                        <ul className='list-none z-40  text-xs flex flex-col relative gap-1 lg:w-[90%] xl:w-[70%] px-12 xs:px-6 sm:px-6 md:px-0 md:mx-auto'>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />community building</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />partnerships and collaborations</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />building CDR</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />completing private sale</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />completing launchpad launch</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />KYC and AUDIT</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />AMA's twitter spaces</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />airdrops</li>
                            <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />Pre-Sale alert</li>
                            <img src={indicator} className="w-8 h-8 absolute left-[rem] top-[12.5rem] z-20" />
                        </ul>
                        <div className="lg:w-[70%] px-12 xs:px-6 sm:px-16 md:px-0 md:mx-auto">

                            <p className='text-[#a1a7aa] text-sm'><span className='text-[#00ace6] font-semibold'>PRE-SALE PHASE:</span> 2024 Q3</p>
                            <p className='text-3xl font-semibold text-white'>Phase 03</p>
                            <p className='text-[#2b3338] text-5xl font-extrabold'>2024</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Gsap
