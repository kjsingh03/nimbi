import React, { useEffect, useRef } from 'react'
import './App.css'
import { Navbar, IntroCard, AuthorCard } from './components'
import { hero, svg1, svg2, svg3, author1, author2, author3, author4, author5, sec1, ellipse, goldWolf, bigEllipse, discord, icon, telegram, x, github, telegramIcon, discordIcon, twitterIcon, xIcon, vector, tick, mask } from './assets'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP, ScrollTrigger)

function App() {

  const main = useRef()
  const collection = useRef()
  const width = window.innerWidth

  useGSAP(() => {
    const boxes = gsap.utils.toArray('.phase');
    boxes.forEach((box, index) => {
      gsap.from(box, {
        opacity: 0,
        duration: 1,
        delay: 0.75 * index * 0.5,
        scrollTrigger: {
          trigger: box,
          start: `${width < 1024 ? "bottom 90%" : "bottom 100%"}`,
          end: 'top 20%'
        },
      });
    });

    const sections = gsap.utils.toArray(".container section");

    gsap.from(sections, {
      opacity: 0
    });

    gsap.to(sections, {
      xPercent: -100 * (sections.length - (width > 1024 ? 3 : 2)),
      ease: "none",
      scrollTrigger: {
        trigger: ".roadmap-container",
        pin: true,
        scrub: 1,
        end: "+=300",
      }
    });

    gsap.to('.mask', {
      width: "100%",
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top left",
        end: "bottom 90%",
        scrub: 1
      }
    });

    if (width > 1280) {
      gsap.to('.collectionLeft', { x: -800, duration: 2, scrollTrigger: { trigger: '.collectionLeft', start: "bottom 75%", end: "start -50%", scrub: true, } })
      gsap.to('.collectionRight', { x: 875, duration: 2, scrollTrigger: { trigger: '.collectionRight', start: "bottom 75%", end: "start -50%", scrub: true } })
    }

  }, { dependencies: [width], scope: main });

  return (
    <div className=''>

      <Navbar />
      <div className="z-0 capitalize" ref={main}>

        <div className="w-[90%] lg:w-[80%] mx-auto h-[45vw] lg:h-[80vh] ">
          <Swiper
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-navigation-size": "15px",
            }}
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              // disableOnInteraction: true,
            }}
            speed={1200}
            loop={true}
            navigation={true}
            modules={[Autoplay, Navigation, Pagination]}
            pagination={{
              dynamicBullets: false,
            }}
            className="mySwiper relative h-full"
          >
            <SwiperSlide>
              <img src={hero} className="w-full h-full object-bottom" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hero} className="w-full h-full object-bottom" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hero} className="w-full h-full object-bottom" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hero} className="w-full h-full object-bottom" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hero} className="w-full h-full object-bottom" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="flex md:flex-row flex-col items-center justify-center border-t border-b border-[#767f84] bg-[#1c2327]">
          <IntroCard img={svg1} title="Buy-Back System" desc="Nimbi uses a smart contract to purchase $NIMBI tokens from public exchanges on a daily basis. These purchases are financed through a portion of the revenue. During this buying process the $NIMBI price goes automatically up." />
          <IntroCard img={svg2} title="Automatic Token Burn" desc="The smart contract automatically burns half of the purchased $NIMBI tokens each day. This process reduces the circulating $NIMBI supply, which makes the remaining tokens more valuable." />
          <IntroCard img={svg3} title="Daily Profits" desc="The other half of the tokens obtained through the buyback process will be automatically transferred to the Nimbi Staking Pool. This staking pool then distributes rewards daily to $NIMBI holders based on the number of tokens they hold, generating daily profits for them." />
        </div>

        <div className="bg-[url(./assets/whaleLeft.png)] bg-right-top bg-no-repeat bg-contain">

          <div className="overflow-hidden">
            <div className="flex xl:flex-row flex-col justify-between w-[80%] xl:w-[90%] 2xl:w-[80%] mx-auto pt-16 md:pt-[8rem] h-[128rem] xs:h-[73rem] sm:h-[78rem] md:h-[66rem] lg:h-[auto] bg-red-600">
              <div className="collectionLeft flex flex-col gap-12 xl:w-[50%]">
                <div className="relative">
                  <div className="btn bg-[#5c666c] w-max font-semibold text-[0.9rem] z-10"><p>Collection</p></div>
                  <img src={ellipse} className='absolute -top-6 left-[4rem] w-[5rem] -z-0' alt="" />
                </div>
                <div className="flex flex-col gap-6">
                  <p className='text-2xl sm:text-5xl xl:text-[4rem] leading-tight font-bold uppercase text-[#5c666c]'>Discover Our Exclusive NFT Collection</p>
                  <p className='text-lg sm:text-lg font-medium'>Discover Our Exclusive NFT Collection.</p>
                  <p className='text-[0.6rem] sm:text-xs w-[70%]'>Explore our curated selection of digital artworks, each a unique masterpiece created by talented artists from around the world. From stunning visual designs to thought-provoking concepts, our NFTs offer a glimpse into the vibrant world of digital art.</p>
                  <p className='btn w-max'>Explore the Collection</p>
                </div>
              </div>
              <div className="collectionRight grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-5 py-6 xl:py-0">
                <AuthorCard />
                <AuthorCard img={author1} />
                <AuthorCard img={author2} />
                <AuthorCard img={author3} />
                <AuthorCard img={author4} />
                <AuthorCard img={author5} />
              </div>
            </div>
          </div>
          <div className="roadmap-container bg-[url(./assets/Roadmap.png),url(./assets/bigEllipse.png),url(./assets/mountain.png)] bg-bottom-bottom-center bg-no-repeat-no-repeat-repeat bg-[contain,contain,cover] xl:bg-[contain,contain,contain] flex flex-col gap-6 sm:gap-12 pt-16 sm:pt-8 xl:pt-[6rem]">

            <div className="flex flex-col gap-4 sm:gap-12 w-[80%] mx-auto">

              <div className="relative">
                <div className="btn bg-[#5c666c] w-max font-semibold text-[0.9rem] z-10"><p>Roadmap</p></div>
                <img src={ellipse} className='absolute -top-6 left-[4rem] w-[5rem] -z-0' alt="" />
              </div>

              <p className='text-[0.6rem] sm:text-[0.8rem] w-[70%]'>We follow these roadmap for launching the Nimbi ecosystem. We may experience certain setbacks while developing the whole Nimbi ecosystem, but our team has a right attitude to stick to the course, no matter what!
              </p>
            </div>

            <div className="wrapper">
              <div className="container scrollx">
                {/* <svg viewBox="0 0 900 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
                    fill="#D9D9D9" />
                  <mask id="mask0_0_1" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="900"
                    height="10">
                    <path
                      d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
                      fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_0_1)">
                    <rect className="mask" y="-49" height="99" fill="#33bdeb" />
                  </g>
                </svg> */}
                {/* <img src={mask} alt="" /> */}
                {/* <section className='absolute -top-10'>
                  <div className="w-[120rem] relative">
                    <img src={mask} className='absolute top-[13rem] w-[10rem]' alt="" />
                  </div>
                </section> */}
                <section>
                  <div className="phase">
                    <ul className='list-none text-xs flex flex-col gap-1 lg:w-[90%] xl:w-[70%] px-12 xs:px-6 sm:px-6 md:px-0 md:mx-auto'>
                      <li className='flex gap-3'><img className='w-4 h-4' src={tick} alt="" />Launch Website</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={tick} alt="" />Market Strategy Planning</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={tick} alt="" />White Paper creation</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={tick} alt="" />Market research</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={tick} alt="" />feasability analysis</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={tick} alt="" />competitor analysis</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={tick} alt="" />tokenomics development</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={tick} alt="" />smart contract development</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={tick} alt="" />secure initial funding</li>
                    </ul>
                    <div className="w-[105rem] relative">
                      <img src={mask} className='absolute -top-12 left-[37rem] w-full' alt="" />
                    </div>
                    <div className="lg:w-[70%] px-12 xs:px-6 sm:px-16 md:px-0 md:mx-auto">
                      <p className='text-[#a1a7aa] text-sm'><span className='text-[#00ace6] font-semibold'>Conception PHASE:</span> 2023 Q1</p>
                      <p className='text-3xl font-semibold'>01</p>
                      <p className='text-[#2b3338] text-5xl font-extrabold'>2023</p>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="phase">

                    <ul className='list-none  text-xs flex flex-col gap-1 lg:w-[90%] xl:w-[70%] px-12 xs:px-6 sm:px-6 md:px-0 md:mx-auto'>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />community building</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />partnerships and collaborations</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />building CDR</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />completing private sale</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />completing launchpad launch</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />KYC and AUDIT</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />AMA's twitter spaces</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />airdrops</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />Pre-Sale alert</li>
                    </ul>
                    <hr className='bg-[#33bdeb] block' />
                    <div className="lg:w-[70%] px-12 xs:px-6 sm:px-16 md:px-0 md:mx-auto">
                      <p className='text-[#a1a7aa] text-sm'><span className='text-[#00ace6] font-semibold'>PRE-SALE PHASE:</span> 2024 Q3</p>
                      <p className='text-3xl font-semibold'>03</p>
                      <p className='text-[#2b3338] text-5xl font-extrabold'>2024</p>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="phase">

                    <ul className='list-none  text-xs flex flex-col gap-1 lg:w-[90%] xl:w-[70%] px-12 xs:px-6 sm:px-6 md:px-0 md:mx-auto'>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />community building</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />partnerships and collaborations</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />building CDR</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />completing private sale</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />completing launchpad launch</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />KYC and AUDIT</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />AMA's twitter spaces</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />airdrops</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />Pre-Sale alert</li>
                    </ul>
                    <hr className='bg-[#33bdeb] block' />
                    <div className="lg:w-[70%] px-12 xs:px-6 sm:px-16 md:px-0 md:mx-auto">
                      <p className='text-[#a1a7aa] text-sm'><span className='text-[#00ace6] font-semibold'>PRE-SALE PHASE:</span> 2024 Q3</p>
                      <p className='text-3xl font-semibold'>04</p>
                      <p className='text-[#2b3338] text-5xl font-extrabold'>2024</p>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="phase">

                    <ul className='list-none  text-xs flex flex-col gap-1 lg:w-[90%] xl:w-[70%] px-12 xs:px-6 sm:px-6 md:px-0 md:mx-auto'>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />community building</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />partnerships and collaborations</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />building CDR</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />completing private sale</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />completing launchpad launch</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />KYC and AUDIT</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />AMA's twitter spaces</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />airdrops</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />Pre-Sale alert</li>
                    </ul>
                    <hr className='bg-[#33bdeb] block' />
                    <div className="lg:w-[70%] px-12 xs:px-6 sm:px-16 md:px-0 md:mx-auto">
                      <p className='text-[#a1a7aa] text-sm'><span className='text-[#00ace6] font-semibold'>PRE-SALE PHASE:</span> 2024 Q3</p>
                      <p className='text-3xl font-semibold'>05</p>
                      <p className='text-[#2b3338] text-5xl font-extrabold'>2025</p>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="phase">

                    <ul className='list-none text-xs flex flex-col gap-1 lg:w-[90%] xl:w-[70%] px-12 xs:px-6 sm:px-6 md:px-0 md:mx-auto'>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />community building</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />partnerships and collaborations</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />building CDR</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />completing private sale</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />completing launchpad launch</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />KYC and AUDIT</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />AMA's twitter spaces</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />airdrops</li>
                      <li className='flex gap-3'><img className='w-4 h-4' src={vector} alt="" />Pre-Sale alert</li>
                    </ul>
                    <hr className='bg-[#33bdeb] block' />
                    <div className="w-[70%] lg:w-[50%] px-12 xs:px-6 sm:px-16 md:px-0 md:mx-auto">
                      <p className='text-[#a1a7aa] text-sm'><span className='text-[#00ace6] font-semibold'>PRE-SALE PHASE:</span> 2024 Q3</p>
                      <p className='text-3xl font-semibold'>06</p>
                      <p className='text-[#2b3338] text-5xl font-extrabold'>2026</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        <div className="py-12">
          <img src={sec1} alt="" />
        </div>

        <div className="bg-[url(./assets/wolfMask.png)] bg-center bg-no-repeat bg-contain">
          <div className="flex mx-auto w-[80%] items-center justify-between lg:flex-row gap-4 flex-col py-10 ">
            <div className="">
              <div className="relative">
                <div className="btn bg-[#5c666c] w-max font-semibold text-[0.9rem]">Supporting dapps</div>
                <img src={ellipse} className='absolute -top-6 left-[7rem] w-[5rem]' alt="" />
              </div>
              <p className='text-[#a1a7aa] text-2xl md:text-4xl xl:text-[2.7rem] font-bold py-4 md:py-12 leading-snug'>NIMBI VIP LOYALTY WOLF PACK</p>
            </div>
            <p className='sm:w-[90%] lg:w-[60%] text-[0.65rem] md:text-xs'>👋 Say goodbye to rigged games and hello to fairness and transparency! 🔍🚫 No more wondering if the odds are stacked against you, because with Crypto Lotto, everything is open source! 📜💻 We've taken the power from the greedy hands of the centralized lotto gods and put it back into the hands of the people! 💪💰 Want to win big while knowing you're not being hoodwinked? Look no further! 🌟 Participate in our decentralized lottery and enjoy the thrill of a fair game. #NoMoreRiggedGames Play Crypto Lotto today and experience the excitement of a true equal opportunity lottery! 🎊💸💪
              nimbi knows you should only play the open sourced, decentralized and transparent lotto. convert your crypto dust to nimbi token, become part of the wolfpack and use all of our crypto dust to stand strong together.</p>
          </div>
          <div className="border-b border-[#767f84]">
          </div>
          <div className="flex lg:flex-row flex-col-reverse mx-auto w-[80%] lg:text-left items-center justify-between py-10">
            <p className='sm:w-[90%] lg:w-[45%] text-[0.65rem] md:text-xs'>👋 Say goodbye to rigged games and hello to fairness and transparency! 🔍🚫 No more wondering if the odds are stacked against you, because with Crypto Lotto, everything is open source! 📜💻 We've taken the power from the greedy hands of the centralized lotto gods and put it back into the hands of the people! 💪💰 Want to win big while knowing you're not being hoodwinked? Look no further! 🌟 Participate in our decentralized lottery and enjoy the thrill of a fair game. #NoMoreRiggedGames Play Crypto Lotto today and experience the excitement of a true equal opportunity lottery! 🎊💸💪
              nimbi knows you should only play the open sourced, decentralized and transparent lotto. convert your crypto dust to nimbi token, become part of the wolfpack and use all of our crypto dust to stand strong together.</p>
            <div className="lg:w-[45%]">
              <p className='text-[#a1a7aa] text-2xl md:text-4xl xl:text-[2.7rem] font-bold pb-4 md:pb-12 leading-snug'>Open-Source Decentralized Lottery</p>
              <p className='text-sm md:text-base xl:text-lg font-semibold text-white lg:pb-0 pb-6'>Introducing Crypto Lotto, the web 3 Dapp 🎉 that puts all those centralized lotto's to shame!</p>
            </div>
          </div>
          <div className="border-b w-[80%] border-[#767f84]">
          </div>
        </div>

        <div className="bg-[url(./assets/sec2.png)] w-full h-[30rem] xl:h-[55rem] mt-16 xl:bg-center bg-right bg-no-repeat bg-cover">
          <div className="flex flex-col pt-4 xl:pt-[12rem] pl-16 xl:pl-[8rem] w-[90%] lg:w-[60%] xl:w-[43%] gap-6 items-center justify-center text-white xl:text-[#151b1e]">
            <p className='text-2xl xl:text-[3.4rem] font-bold uppercase leading-snug'>Web3 Crypto Dust Runner Game</p>
            <p className='text-sm xl:text-lg font-medium tracking-tighter'>Introducing Crypto Dust Runner, the web 3 game that's here to bring the heat to those corporate whales invading our precious crypto space! 🌬️🐺</p>
            <p className='text-xs font-medium hidden xl:block'>👋 In this epic quest, you'll join forces with Nimbi, the fearless white wolf, as he races through a treacherous frozen gulch, fueled by the magnificent power of crypto dust! 💪✨ His mission? To collect as much of this precious resource as possible and transform into a legendary force against those pesky corporate giants. 😎🐋Picture this: you're in control of the nimble Nimbi, dodging obstacles, jumping over icy chasms, and racing against time ⏰ to reach power-up spots that will elevate your game to a whole new level! 💯✨ Discover abandoned crypto mines that will boost Nimbi's dust collection abilities, allowing him to dominate the leaderboard like a true crypto champ! 🏆💰</p>
            <div className="w-full text-left">
              <p className="btn w-max text-left">Launch APP</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1c2327] flex lg:flex-row gap-4 flex-col items-center justify-center lg:gap-12 pt-16 pb-8 ">
          <div className="w-[20rem] lg:w-[27rem] relative">
            <img src={goldWolf} className='w-full h-full object-fill' alt="" />
            <img src={bigEllipse} className='absolute top-0 lg:-right-[15rem] w-[30rem]' alt="" />
          </div>
          <div className="flex flex-col w-[80%] lg:text-start lg:w-[40%] gap-6 justify-center pb-10  text-[#a1a7aa]">
            <p className='text-xl sm:text-5xl lg:text-[3.4rem] leading-tight font-extrabold uppercase'>KAZI token </p>
            <p className='text-sm sm:text-lg font-medium text-white'>Your Bridge to Streamlined Crypto Conversion! 🌉💱</p>
            <p className='text-[0.6rem] sm:text-xs '>KAZI Token stands as a beacon of efficiency in the world of cryptocurrency. As an ERC-20 token, it serves as the perfect conduit for users looking to convert their wallet crypto dust into tangible value. Whether you're a seasoned investor or just dipping your toes into the crypto waters, KAZI Token offers a seamless and accessible pathway to transform those fractions of cryptocurrency left lingering in your wallet into meaningful assets.
              With KAZI Token, say goodbye to the frustration of unused cryptocurrency fragments and hello to a practical solution for maximizing your digital assets. Join the movement towards streamlined crypto conversion today with KAZI Token – where every fragment counts towards your financial success. 💼🚀</p>
            <div className="w-full lg:text-left">
              <p className="btn w-max lg:text-left px-8">Buy KAZI</p>
            </div>
          </div>
        </div>

        <div className="bg-[url(./assets/whaleRight.png)] w-full h-[66rem] sm:h-[58rem] md:h-[53rem] lg:pt-16 bg-center bg-no-repeat bg-cover lg:bg-contain flex flex-col items-center gap-16 justify-center relative">
          <div className="flex items-center justify-center">
            <div className="bg-[#1c2327] bg-[url(./assets/logoMask.png)] bg-no-repeat bg-cover md:bg-contain flex md:flex-row gap-4 flex-col items-center px-[2rem] lg:px-[8rem] xl:px-[15rem] justify-between py-8">
              <div className="flex flex-col gap-6 md:w-[50%] text-center md:text-left">
                <p className='text-4xl leading-tight font-semibold'>Join our community </p>
                <p className='text-xs'>Join us as we celebrate the launch of our project by offering exclusive rewards to our early supporters. By participating in our ecosystem, you'll have the opportunity to receive free token airdrops and access to exciting perks. Don't miss out on this chance to be part of our growing community!</p>
              </div>
              <div className="w-[90%] sm:w-[70%] md:w-[40%]">
                <div className="flex items-center justify-between gap-4 cursor-pointer hover:bg-[#242d32] rounded-md px-4 py-2">
                  <div className="flex items-center justify-between gap-4 ">
                    <img src={discord} alt="" className='w-10' />
                    <div className="">
                      <p className='font-bold text-sm'>Discord</p>
                      <p className='text-xs'>Get Involved</p>
                    </div>
                  </div>
                  <img src={icon} alt="" />
                </div>
                <div className="flex items-center justify-between gap-4 cursor-pointer hover:bg-[#242d32] rounded-md px-4 py-2">
                  <div className="flex items-center justify-between gap-4 ">
                    <img src={telegram} alt="" className='w-10' />
                    <div className="">
                      <p className='font-bold text-sm'>telegram</p>
                      <p className='text-xs'>join discussion</p>
                    </div>
                  </div>
                  <img src={icon} alt="" />
                </div>
                <div className="flex items-center justify-between gap-4 cursor-pointer hover:bg-[#242d32] rounded-md px-4 py-2">
                  <div className="flex items-center justify-between gap-4 ">
                    <img src={x} alt="" className='w-10' />
                    <div className="">
                      <p className='font-bold text-sm'>x</p>
                      <p className='text-xs'>read the latest</p>
                    </div>
                  </div>
                  <img src={icon} alt="" />
                </div>
                <div className="flex items-center justify-between gap-4 cursor-pointer hover:bg-[#242d32] rounded-md px-4 py-2">
                  <div className="flex items-center justify-between gap-4 ">
                    <img src={github} alt="" className='w-10' />
                    <div className="">
                      <p className='font-bold text-sm'>github</p>
                      <p className='text-xs'>build with us</p>
                    </div>
                  </div>
                  <img src={icon} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-[90%] lg:md:w-[70%] xl:w-[50%] px-16 md:px-0 md:items-center text-center">
            <p className='text-xl sm:text-4xl leading-tight font-semibold uppercase'>Whitepaper </p>
            <p className='text-xs'>Explore the Nimbi whitepaper and get an in-depth breakdown of the unique benefits, innovative features, and overall vision of the NIMBI ecosystem and its native token. This clear, concise, and expertly crafted informational report will help you understand exactly what sets NIMBI apart from other crypto projects.<br /><br />Dive into our educational white paper and find out why taking this journey with us is an absolute no-brainer!</p>
            <div className="btn txt-[#00ace6] border border-[#00ace6] bg-transparent text-[#00ace6] ">Access the whitepaper</div>
            <div className="w-full flex justify-end">
              <img src={icon} className=' absolute right-24 w-8 bg-[#43545e] px-3 -rotate-90 py-2.5 cursor-pointer' alt="" />
            </div>
          </div>
        </div>

        <div className="text-[0.6rem] flex flex-col gap-4 bg-[#1c2327] px-[2rem] lg:px-[4rem] xl:px-[8rem] py-8 border-t border-[#767f84]md:">
          <div className="flex md:flex-row flex-col md:gap-0 gap-2 items-center justify-between">
            <div className=" flex flex-col md:items-start items-center text-center md:text-left w-full gap-4 sm:gap-2 md:w-[40%] xl:w-[30%]">
              <p className='text-xs'>Register here</p>
              <div className=" flex sm:flex-row flex-col items-center  gap-2 sm:gap-4 w-full">
                <input type="text" placeholder='Email' className='bg-transparent p-2 border border-[#767f84] w-full' />
                <div className="btn px-6 w-full sm:w-[8rem] text-center text-[0.6rem]">Sign up</div>
              </div>
              <p className='text-[#a1a7aa]'>your email addresses will only be used forairdrop notifications and won't be shared with third parties</p>
            </div>
            <ul className="list-none flex sm:gap-8 items-center sm:flex-row gap-4 flex-col">
              <li>Terms and conditions</li>
              <li>privacy policy</li>
              <li>contact us</li>
              <li>see our whitepaper</li>
            </ul>
          </div>
          <div className="flex items-center sm:flex-row gap-4 flex-col pt-4 justify-between border-t border-[#767f84]">
            <div className="flex items-center gap-4">
              <p className='text-[#a1a7aa]'>our community</p>
              <ul className="list-none flex gap-2 items-center">
                <li><img src={telegramIcon} className='w-5 rounded-sm' alt="" /></li>
                <li><img src={discordIcon} className='w-5 rounded-sm' alt="" /></li>
                <li><img src={twitterIcon} className='w-5 rounded-sm' alt="" /></li>
                <li><img src={xIcon} className='w-5 rounded-sm' alt="" /></li>
              </ul>
            </div>
            <p className='normal-case'>Copyright &copy; 2024 NIMBI.COM | All rights reserved</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App
