import React from 'react'
import { ellipse, round } from '../../assets'

function AnimationCard({ title, desc, phase, year, src, icon, list = ["community building", "partnerships and collaborations", "building CDR", "completing private sale", "completing launchpad launch", "KYC and AUDIT", "AMA's twitter spaces", "airdrops", "Pre-Sale alert"] }) {
    return (
        <section>
            <div className="phase ">
                <ul className='list-none z-40 text-xs xs:text-sm 3xl:text-lg flex flex-col relative gap-2 3xl:gap-4 lg:w-[90%]  px-12 xs:px-6 sm:px-6 md:px-0 md:mx-auto'>
                    {
                        list?.map((li, index) => (
                            <li className='flex gap-3 items-center'><img className='w-4 h-4' src={src} alt="" />{li}</li>
                        ))
                    }
                    {
                        phase === "1" &&
                        <>
                            <img src={round} className="w-8 h-8 absolute -top-[8.5rem] -left-2 xs:-left-10 md:left-[0rem] md:top-[17rem] 3xl:top-[25.5rem] z-40 " />
                            <img src={ellipse} className="w-16 h-16 xs:w-[5rem] xs:h-[5rem] absolute -left-[1.6rem] -top-[9.5rem] xs:-left-[4.1rem] xs:-top-[9.9rem] md:-left-[1.6rem] 3xl:top-[24rem]" />
                            <svg className={`w-[75rem] rotate-90 md:rotate-0 absolute -top-[47rem] md:top-[15.7rem] 3xl:top-[24.25rem] -left-[37.05rem] xs:-left-[39.15rem] md:-left-[75rem] z-10`} viewBox="0 0 1920 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter='url(#filter1_d_1261_1133)'>
                                    <rect className='z-10' width='100%' y="55" height="150" fill="#33BDEB" />
                                </g>
                                <filter id="filter1_d_1261_1133" x="0" y="33" height="24.0001" filterUnits="userSpaceOnUse" style={{ colorInterpolation: "sRGB" }}>
                                    <feFlood style={{ floodOpacity: 0 }} result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.64 0 0 0 0 1 0 0 0 1 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1261_1133" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1261_1133" result="shape" />
                                </filter>
                            </svg>
                            <svg className={`block w-[395rem] rotate-90 absolute -top-[23rem] -left-[200.05rem] xs:-left-[202.125rem] md:rotate-0 md:top-[9.1rem] 3xl:top-[17.67rem]`} viewBox="0 0 1920 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter='url(#filter0_d_230_5849)'>
                                    <rect className='z-10' y="42.5" height="0.25" width="5000" fill="#767F84" />
                                </g>
                                <filter id="filter0_d_230_5849" filterUnits="userSpaceOnUse" style={{ colorInterpolation: "sRGB" }}>
                                    <feFlood style={{ floodOpacity: 0 }} result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset />
                                    <feGaussianBlur stdDeviation="1" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.64 0 0 0 0 1 0 0 0 1 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_230_5843" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_230_5843" result="shape" />
                                </filter>
                            </svg>
                        </>
                    }
                    {
                        phase !== "1" &&
                        <>
                            <img src={icon} className="w-8 h-8 absolute -top-[8.5rem] -left-0 xs:-left-8 md:left-[0rem] md:top-[17rem] 3xl:top-[25.5rem] z-40 " />
                            <svg className={`w-[75rem] rotate-90 md:rotate-0 absolute -top-[46.75rem] md:top-[15.7rem] 3xl:top-[24.25rem] -left-[36.5rem] xs:-left-[38.5rem] md:-left-[75rem] z-10`} viewBox="0 0 1920 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter='url(#filter1_d_1261_1133)'>
                                    <rect className='z-10' width='100%' y="55" height="150" fill="#33BDEB" />
                                </g>
                            </svg>
                        </>
                    }

                </ul>
                <div className="lg:w-full pl-5rem  mx-auto px-0 xs:px-0 flex flex-col 3xl:gap-3 pb-0 py-6 sm:px-0 md:px-12">
                    <p className='text-[#a1a7aa] text-base uppercase '><span className='text-[#00ace6] font-semibold'>{title}{desc ? ":" : ''}</span> {desc}</p>
                    <p className='text-[37px] font-semibold text-white'>phase 0{phase}</p>
                    <p className='text-[#2b3338] text-[64px] font-extrabold -translate-y-3 '>{year}</p>
                </div>
            </div>
        </section>
    )
}

export default AnimationCard
