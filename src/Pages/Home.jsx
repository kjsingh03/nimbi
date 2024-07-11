import React, { useEffect, useRef } from 'react'
import '../App.css'
import { AnimationCard, CommunityCard, IntroCard, NFTCard, Navbar } from '../components'
import { hero, svg1, svg2, svg3, author1, author2, author3, author4, author5, sec1, ellipse, goldWolf, bigEllipse, discord, icon, telegram, x, github, vector, tick, mask, mountain, indicator, round, animation, whaleLeft, roadmap, hero1, hero2, mountainThumbnail, logoMask, mountainCover, whitepaper, sec3Bottom, introCard1, introCard2, introCard3, instagram, youtube } from '../assets'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP, ScrollTrigger)
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';

function Home() {

  const main = useRef()
  const width = window.innerWidth

  useGSAP(() => {

    const sections = gsap.utils.toArray(".container section");
    const mask = document.querySelector(".mask");

    var xPercent = 0, from = 0, to = 0, sectionStart = 0;

    if (width >= 1720) { xPercent = -100 * (sections.length - 3); sectionStart = 13.5 }
    else if (width >= 1024) { xPercent = -100 * (sections.length - 3); sectionStart = 12.5 }
    else if (width > 768) { xPercent = -100 * (sections.length - 2); sectionStart = 12.5 }

    if (width > 1280) {
      gsap.to('.collectionLeft', { x: -1500, duration: 2, scrollTrigger: { trigger: '.collectionLeft', start: width >= 1720 ? "bottom 91%" : "bottom 99.5%", end: "top -300%", scrub: true, } })
      gsap.to('.collectionRight', { x: 1500, duration: 2, scrollTrigger: { trigger: '.collectionRight', start: width >= 1720 ? "bottom 91%" : "bottom 87%", end: "top -150%", scrub: true } })
      gsap.to('.collectiontop', { x: -1500, duration: 2, scrollTrigger: { trigger: '.collectionRight', start: width >= 1720 ? "bottom 91%" : "bottom 87.5%", end: "top -300%", scrub: true } })
    }

    if (width > 768) {

      let scrollTween = gsap.to(sections, {
        xPercent: xPercent,
        ease: "none",
        duration: 3,
        scrollTrigger: {
          trigger: ".roadmap-container",
          pin: true,
          scrub: 1,
          end: "+=800",
          // markers: true,
        }
      });

      sections.forEach((section, index) => {
        if (index !== 0) {
          gsap.from(section, {
            x: 0,
            opacity: 0,
            duration: 0.75,
            delay: index * 1 / 12,
            scrollTrigger: {
              trigger: section,
              containerAnimation: scrollTween,
              start: `left ${index * sectionStart + 33}%`,
              // markers: 1,
            }
          });
        }
      });

      gsap.from('.whaleLeft', {
        x: 250,
        duration: 4.5,
        scrollTrigger: {
          trigger: '.roadmap-container',
          start: `top 35%`,
          end: `top -100%`,
          scrub: 1,
          // markers: 1
        }
      });

      gsap.to('.mountain', {
        x: -750,
        ease: "none",
        scrollTrigger: {
          trigger: ".roadmap-container",
          start: "top 0%",
          end: width < 1720 ? "bottom 15%" : "bottom 25%",
          scrub: 1,
          // markers:1
        }
      });

      gsap.from('.roadmap', {
        y: 300,
        opacity: 0,
        duration: 4.5,
        scrollTrigger: {
          trigger: '.roadmap-container',
          start: `top ${width > 1720 ? '60%' : '90%'}`,
          end: `top -80%`,
          scrub: 1,
          // markers: 1
        }
      });

    }
    else {
      sections.forEach((section, index) => {
        if (index !== 0) {
          gsap.from(section, {
            y: 20,
            opacity: 0,
            duration: 0.75,
            delay: index * 1 / 32,
            scrollTrigger: {
              trigger: section,
              start: `top ${45}%`,
              // markers: 1
            }
          });
        }
      });
    }

    // gsap.fromTo(mask, {
    //   width: from
    // }, {
    //   width: to,
    //   ease: width > 1720 ? "slow(0.1,0.2,false)" : "power4.in",
    //   scrollTrigger: {
    //     trigger: ".roadmap-container",
    //     start: width > 1720 ? "top -12%" : "top 310%",
    //     end: width > 1720 ? "bottom 64%" : "bottom -4%",
    //     scrub: 1,
    //     // markers: 1
    //   }
    // });

  }, { dependencies: [width], scope: main });

  return (
    <>

      <Navbar />

      <div className="z-0 capitalize pt-[4.3rem] xl:pt-[4.4rem] overflow-x-hidden " ref={main}>

        <div className="relative mx-auto h-[670px] sm:h-[734px] xl:h-[45vw] 2xl:h-[35vw] xl:w-[81%] 4xl:w-[1506px] 4xl:h-[694px] carousel">
          <img src={mountainThumbnail} className='absolute bottom-0 -left-[5rem] w-[44.5rem] ' alt="" />
          <Swiper
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-navigation-size": "25px",
              "--swiper-pagination-color": "#ffffff",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "8.6px",
              "--swiper-pagination-bullet-horizontal-gap": "3.5px"
            }}
            spaceBetween={30}
            autoplay={{
              delay: 7000,
              // disableOnInteraction: true,
            }}
            speed={1200}
            loop={true}
            navigation={true}
            modules={[Autoplay, Navigation, Pagination]}
            pagination={{
              dynamicBullets: false,
            }}
            className="mySwiper relative h-full w-full"
          >
            <SwiperSlide>
              <div className="flex xl:flex-row flex-col-reverse justify-end xl:justify-between gap-7 xl:gap-8 h-full">
                <div className="w-[90%] mx-auto flex flex-col justify-center gap-2 xl:gap-6 xl:w-[44.75%]">
                  <h1 className='text-[3rem] md:text-[4.5rem] 3xl:text-[5rem] font-["Roboto_Condensed"] leading-[60px] md:leading-[72px] 3xl:leading-[93px] tracking-[0.25px] font-bold uppercase '>unite humanity with just your <span className='text-[#33bdeb]'>Crypto Dust</span></h1>
                  <p className='text-base font-["Roboto"]'>join Nimbi's wolfpack and make change together and have fun along the way</p>
                </div>
                <div className="h-[210px] xxs:h-[250px] xs:h-[325px] sm:h-[420px] md:h-[480px] xl:h-full xl:w-[55.25%]">
                  <img src={hero} className="w-full h-full object-cover" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex xl:flex-row flex-col-reverse justify-end xl:justify-between gap-7 xl:gap-8 h-full">
                <div className="w-[90%] mx-auto flex flex-col justify-center gap-2 xl:gap-6 xl:w-[44.75%]">
                  <h1 className='text-[3rem] xl:text-[4.5rem] 3xl:text-[5rem] font-["Roboto_Condensed"] leading-[60px] md:leading-[72px] 3xl:leading-[93px] tracking-[0.25px] font-bold uppercase '>Open-Source Decentralized  <span className='text-[#33bdeb]'>Lottery</span></h1>
                  <p className='text-base font-["Roboto"]'> Say goodbye to rigged games and hello to fairness and transparency! No more wondering if the odds are stacked against you, because with Crypto Lotto, everything is open source!</p>
                </div>
                <div className="h-[210px] xxs:h-[250px] xs:h-[325px] sm:h-[420px] md:h-[480px] xl:h-full xl:w-[55.25%]">
                  <img src={hero1} className="w-full h-full object-cover" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex xl:flex-row flex-col-reverse justify-end xl:justify-between gap-7 xl:gap-8 h-full">
                <div className="w-[90%] mx-auto flex flex-col justify-center gap-2 xl:gap-6 xl:w-[44.75%]">
                  <h1 className='text-[3rem] xl:text-[4.5rem] 3xl:text-[5rem] font-["Roboto_Condensed"] leading-[60px] md:leading-[72px] 3xl:leading-[93px] tracking-[0.25px] font-bold uppercase '>Web3 Crypto Dust Runner <span className='text-[#33bdeb]'>Game</span></h1>
                  <p className='text-base font-["Roboto"]'>In this epic quest, you'll join forces with Nimbi, the fearless white wolf, as he races through a treacherous frozen gulch, fueled by the magnificent power of crypto dust!His mission? To collect as much of this precious resource as possible and transform into a legendary force against those pesky corporate giants. </p>
                </div>
                <div className="h-[210px] xxs:h-[250px] xs:h-[325px] sm:h-[420px] md:h-[480px] xl:h-full xl:w-[55.25%]">
                  <img src={hero2} className="w-full h-full object-cover" />
                </div>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>

        <div className="flex md:flex-row flex-col items-center justify-center border-t border-b border-[#767f84] bg-[#1c2327]">
          <IntroCard img={introCard1} />
          <IntroCard img={introCard2} />
          <IntroCard img={introCard3} />
        </div>

        <div className="overflow-x-hidden z-20">

          <div className="w-[90%] lg:w-[80%] 4xl:w-[1506px] mx-auto pt-[5rem] xl:pt-[9rem] h-[151rem] xxs:h-[141rem] xs:h-[88rem] sm:h-[81rem] md:h-[70rem] xl:h-[49rem] 3xl:h-[53rem] z-0">
            <div className="collectiontop relative mb-8 3xl:mb-6">
              <div className="btn bg-[#5c666c] w-max font-semibold py-[5px] px-[10px] z-10 text-sm 3xl:text-lg"><p>Collection</p></div>
              <img src={ellipse} className='absolute -top-6 3xl:-top-8 left-[3.5rem] w-[4.875rem] 3xl:w-[6.375rem] -z-0' alt="" />
            </div>

            <div className="flex xl:flex-row flex-col justify-between relative gap-10 xl:gap-0">
              <div className="collectionLeft flex flex-col h-[680px] xxs:h-auto justify-end w-full xl:w-[45%] 4xl:w-[580px] 4xl:h-[648px]">
                <div className="flex flex-col gap-[38px] ">
                  <div className="text-[3.25rem] md:text-[4.2rem] 2xl:text-[5rem] 3xl:text-[5rem] font-['Roboto_Condensed'] leading-tight 3xl:leading-[6.5rem] tracking-[0.25px] font-bold uppercase text-[#5c666c]">Discover Our Exclusive NFT Collection</div>
                  <p className="text-2xl font-medium font-['Roboto_Condensed',sans-serif]">Discover Our Exclusive NFT Collection.</p>
                  <p className='text-sm md:w-[70%]'>Explore our curated selection of digital artworks, each a unique masterpiece created by talented artists from around the world. From stunning visual designs to thought-provoking concepts, our NFTs offer a glimpse into the vibrant world of digital art.</p>
                  <p className='btn w-[16rem] text-sm text-center'>Explore the Collection</p>
                </div>
              </div>
              <div className="collectionRight grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-5 py-6 xl:py-0 w-full xl:w-[60%] h-max 4xl:w-[898px] 4xl:h-[648px] z-0">
                <NFTCard />
                <NFTCard img={author1} />
                <NFTCard img={author2} />
                <NFTCard img={author3} />
                <NFTCard img={author4} />
                <NFTCard img={author5} />
              </div>
            </div>
          </div>

          <div className="roadmap-container -z-50 bg-[url(./assets/bigEllipse.png)] sm:bg-[_33rem_33rem] bg-[50rem_1rem] sm:bg-[152vw_6rem] xl:bg-[72vw_6rem] 3xl:bg-[77vw_6rem] bg-no-repeat flex flex-col sm:gap-0 mt-16 pt-0 md:pt-[6rem] lg:pt-0 xl:mt-[5rem]">
            <div className="lg:block hidden border-t -translate-x-[55%] relative -z-50 mt-[2rem] pb-[5.5rem] 3xl:pb-[7rem]">
              <img src={whaleLeft} className='whaleLeft absolute top-[303rem] lg:-top-[35.5rem] -right-[70rem] lg:-right-[53rem] 3xl:-right-[65rem] -z-50' alt="" />
            </div>

            <div className="flex flex-col gap-4 sm:gap-16 3xl:gap-[6rem] w-[90%] lg:w-[77.5%] mx-auto">
              <div className="relative">
                <div className="btn bg-[#5c666c] w-max font-semibold py-[5px] px-[10px] z-10 text-sm 3xl:text-lg"><p>roadmap</p></div>
                <img src={ellipse} className='absolute -top-6 3xl:-top-8 left-[3.5rem] w-[4.875rem] 3xl:w-[6.375rem] -z-0' alt="" />
              </div>

              <p className='text-xs md:text-sm 3xl:text-lg md:w-[70%] pt-6 sm:pt-2'>We follow these roadmap for launching the Nimbi ecosystem. We may experience certain setbacks while developing the whole Nimbi ecosystem, but our team has a right attitude to stick to the course, no matter what!
              </p>

              <div className="relative">
                <img src={roadmap} className='roadmap absolute top-[2rem] md:top-[2rem] xl:-top-[4rem] -right-[0] 3xl:right- 5xl:right-48 -z-40' alt="" />
              </div>
            </div>

            <div className="wrapper 3xl:mt-16">

              <section className='md:static relative w-screen md:h-0'>
                <div className="w-[100rem] md:w-[250rem] relative">
                  <img src={mountain} className='mountain absolute opacity-100 h-[45rem] md:h-[18rem] 3xl:h-[19rem] -top-[13rem] xs:-top-[12.5rem] md:top-[2.15rem] 3xl:top-[1.25rem] w-[175rem] 3xl:w-[205rem] -left-[25.5rem] xs:-left-[21.5rem] sm:-left-[12.5rem] md:left-[0rem] -z-30' alt="" />
                </div>
              </section>

              <div className="container scrollx overflow-hidden md:overflow-visible pt-[6rem] mt-[8rem] xs:mt-[12rem] md:mt-0 md:pt-0">
                <AnimationCard zIndex={60} title="Pre-Sale Phase" desc="2023 Q1" phase="1" status='completed' src={tick} icon={round} year="2023" list={["Idea Concept", "WhitePaper Creation", "Marketing Strategy Planning", "Start Development Web3 Video Game", "Kazi Smart Contract Development", "Nimbi Smart Contract Development", "Social Media Partnerships", "tokenomics development", "securing initial funding"]} />
                <AnimationCard zIndex={90} title="Pre-Sale Phase" desc="2024 Q1" phase="2" status='incompleted' src={tick} icon={indicator} year="2024" list={["Community Building", "Partnerships and Collaborations", "Beta Lunch Web3 Video Game", "Create 10,000 NFT 3D Art Collection for erc-404", "Completing Private Sale", "Airdrop", "Crypto Dust Converter", "Main Web-page Development", "Pre-Sale start"]}  />
                <AnimationCard zIndex={80} title="Pre-Sale Phase" desc="2024 Q2" phase="3" status='incompleted' src={vector} icon={indicator} year="2024" list={["Kazi Mediation", "Crypto Dust Lotto", "Nimbi VIP Wolfpack", "test smart contract and deploy dapps", "launch beta version for CDR", "start v2 of Crypto Dust Runner"]}  />
                <AnimationCard zIndex={70} title="Pre-Sale Phase" desc="2024 Q3" phase="4" status='incompleted' src={vector} icon={indicator} year="2025"   />
                <AnimationCard zIndex={60} title="Pre-Sale Phase" desc="2024 Q3" phase="5" status='incompleted' src={vector} icon={indicator} year="2026"   />
              </div>
            </div>
          </div>

        </div>


        <div className="my-12 lg:mb-16 xl:mb-12  bg-[url(./assets/msec1.svg)] sm:bg-[url(./assets/sec1.png)] w-full bg-contain md:bg-contain bg-no-repeat h-[23rem] xxs:h-[100vw] sm:h-[38vw] ">
        </div>

        <div className="bg-[url(./assets/wolfMask.png)] wolfMask bg-no-repeat xl:h-[954px] overflow-hidden">
          <div className="flex mx-auto w-[90%] lg:w-[80%] 4xl:w-[1502px] justify-between 2xl:flex-row gap-6 3xl:gap-[0px] flex-col pt-8">
            <div className="flex flex-col gap-8 w-full 2xl:w-[725px]">
              <div className="relative">
                <div className="btn bg-[#5c666c] w-max font-semibold text-sm 3xl:text-lg py-[5px] px-[10px]">Supporting dapps</div>
                <img src={ellipse} className='absolute -top-8 left-[6rem] 3xl:left-[8rem] w-[6.375rem]' alt="" />
              </div>
              <p className="text-[#a1a7aa] text-[2.5rem] xxs:text-5xl xl:text-[4.5rem] font-['Roboto_Condensed'] leading-[3rem] xxs:leading-[3.5rem] md:leading-[5rem] 2xl:leading-[5.5rem] tracking-[0.25px] font-bold uppercase pt-6 2xl:pt-0">NIMBI The Leader of the Pack</p>
            </div>
            <p className='md:w-[90% 2xl:w-[45%] font-["Roboto"] leading-6 text-base'>Nimbi, a character with dual existences. In one he is a central figure in the associated Web3 video game Crypto Dust Runner and an artistic representation in the NFT Nimbi Art Collection. The ERC-404 Nimbi Token also bears his name, enhancing his integral role within the ecosystem. In this capacity Nimbi is on a quest to gather members for his Wolfpack, leading them on adventures across the virtual landscape.
              In the other, Nimbi is Mr. Nimbus—a two-year-old White Wolf rescued as a puppy from a reservation. Known as a Res-Wolf Dog, Nimbi's early life on the reservation introduced him to the harsh realities and the concept of "Crypto Dust," a metaphor for the scraps and remnants he survived on. Now thriving in the Rocky Mountains, he embodies resilience and leadership, characteristics that translate into his digital persona where he guides players to the apex of mountains and beyond in Crypto Dust Runner.</p>
          </div>
          <div className="border-b border-[#767f84] my-16 md:my-[68px] 3xl:my-[100px]">
          </div>
          <div className="flex 2xl:flex-row flex-col-reverse gap-4 2xl:gap-[77px] mx-auto w-[90%] lg:w-[80%] 4xl:w-[1502px] 2xl:text-left items-center justify-between">
            <p className='md:w-[90% 2xl:w-[45%] font-["Roboto"] leading-6 text-base'>As the name suggests, Crypto Dust Lotto introduces a new approach to traditional lotteries. Players can purchase lottery tickets with Kazi Tokens, promoting accessibility and making it easy for borderless participation. Players are protected by the transparent and immutable smart contracts that govern the lottery process, ensuring fair and tamper-proof draws.

              What sets Crypto Dust Lotto apart is its integration with the broader Nimbi ecosystem, allowing winners to (beyond prizes) level up and become part of the Nimbi VIP program, which has its own special VIP perks. </p>
            <div className="2xl:w-[45%] flex flex-col gap-6 md:gap-0">
              <p className="text-[#a1a7aa] text-[2.5rem] xxs:text-5xl md:text-[4.5rem] font-['Roboto_Condensed'] leading-[3rem] xxs:leading-[3.5rem] md:leading-[5rem] 2xl:leading-[5.5rem] tracking-[0.25px] font-bold uppercase pb-4">Open-Source Decentralized Lottery</p>
              <p className="text-2xl font-['Roboto_Condensed'] font-medium text-white 2xl:pb-0 pb-8">Introducing Crypto Lotto, the web 3 Dapp that puts all those centralized lotto's to shame</p>
            </div>
          </div>
          <div className="xs:border-b -translate-x-[25%] pb-16 xs:pb-[7rem] xl:pb-[6.5rem] 3xl:pb-[7rem]">
          </div>
        </div>

        <div className="h-[105rem] xxs:h-[92rem] xs:h-[100rem] sm:h-[108rem] relative md:h-auto">

          <div className="flex flex-col justify-end md:justify-center bg-[url(./assets/msec3.png)] xs:bg-[url(./assets/tsec3.png)] md:bg-[url(./assets/sec3.png)] w-[full] bg-transparent h-full lg:h-[80vw] 2xl:h-[53.25vw] xl:bg-center bg-top xs:bg-right bg-no-repeat bg-cover 2xl:bg-contain sm:pb-[4rem] md:pb-0 xs:mt-[6rem]">
            <div className="w-full md:w-[80%] mx-auto ">
              <div className="pb-[6rem] xxs:pb-[5rem] xs:pb-[7rem] sm:pb-[4.5rem] md:py-12 px-4 xxs:px-4 sm:px-10 md:px-0 flex flex-col md:w-[75%] xl:w-[65%] 3xl:w-[50%] gap-6 xl:gap-12 items-center md:items-start justify-around lg:justify-center text-[#151b1e]">
                <p className="text-[3rem] sm:text-[4.5rem] 3xl:text-[4.5rem] font-bold uppercase leading-tight font-['Roboto_Condensed',sans-serif] xl:w-[80%] 3xl:w-full">Web3 Crypto Dust Runner Game</p>
                <p className='text-2xl font-semibold tracking-tighter w-full xl:w-[60%] 2xl:w-[70%] 3xl:w-[85%]'>In the DeFi industry, crypto dust refers to small amounts of cryptocurrency either left over from transactions, or valueless remaining assets.</p>
                <p className='text-base font-medium block w-full xl:w-[70%] 3xl:w-[90%]'>In the dedicated Web3 Nimbi ecosystem game, Crypto Dust Runner, Crypto Dust represents a fundamental in-game resource. It's a symbolic representation of the small, seemingly insignificant particles that, when accumulated, can lead to significant power and change—much like how small contributions in blockchain and community efforts can lead to substantial impacts. The gameplay involves players controlling Nimbi to collect Crypto Dust throughout their journey up a vast mountain that ends, ultimately, in a challenging boss fight. This dust gathered along the way not only powers Nimbi but also serves as a currency within the game, convertible into Kazi tokens through in-game mechanics. </p>
                <div className="w-full text-left">
                  <p className="btn w-[12rem] text-base text-center">Launch App</p>
                </div>
              </div>
            </div>
          </div>
          <img src={sec3Bottom} className='w-full absolute bottom-0 xs:hidden' alt="" />

        </div>

        <div className="bg-[#1c2327] flex lg:flex-row gap-4 flex-col lg:items-center justify-evenly xl:justify-center xl:gap-12 pt-[6rem] sm:pt-[76px] pb-[5rem] md:pb-[6rem]">
          <div className="w-[22rem] xs:w-[28rem] xl:w-[36rem] relative">
            <img src={goldWolf} className='-translate-x-4 md:translate-x-0 w-full h-full object-cover z-20' alt="" />
            <img src={bigEllipse} className='absolute top-2 left-10 lg:left-auto lg:top-0 lg:-right-[19rem] w-[20rem] xs:w-[34.625rem] z-20' alt="" />
          </div>
          <div className="flex flex-col w-[90%] mx-auto lg:mx-0 lg:text-start lg:w-[40%] gap-6 justify-between md:justify-center md:pb-10 xs:h-[477px] md:h-auto text-[#a1a7aa]">
            <p className="text-[3rem] xs:text-[3.625rem] 2xl:text-[5rem] leading-tight 2xl:leading-[6.5rem] tracking-[0.25px] font-bold uppercase font-['Roboto_Condensed',sans-serif]">KAZI token </p>
            <p className='text-2xl font-medium font-["Roboto_Condensed",sans-serif] text-white'>The Mediator and Peacemaker</p>
            <p className='text-base font-["Roboto",sans-serif]'>Kazi brings a different energy to the project. A six-year-old Aussie Husky, also a rescue, Kazi brings his experiences from the sweltering South to the cooler climates of the Rocky Mountains. His natural inclination to mediate and maintain peace, demonstrated by his behavior of breaking up fights at dog parks, is mirrored in the digital world. In Crypto Dust Runner, Kazi's role transcends mere play. He is envisioned as a mediator within the game's community, potentially influencing gameplay dynamics where cooperation among players is crucial. His presence in the game and the ecosystem symbolizes the project's commitment to fostering a cooperative and harmonious community, reflecting his peacemaking nature</p>
            <div className="btn text-center text-base w-[11.125rem] h-[44px] z-30">buy kazi</div>
          </div>
        </div>

        <div className="bg-[url(./assets/whaleRight.png)] w-full h-[77rem] sm:h-[88rem] lg:h-[77.9rem] lg:pt-[11rem] bg-[-18rem_14rem] lg:bg-[-5rem_-3rem] 3xl:bg-[0rem_-2rem] bg-[_100rem_80rem] lg:bg-[_100rem_95rem] 3xl:bg-[_120rem_85rem] bg-no-repeat flex flex-col items-center gap-10 xs:gap-[90px] justify-end relative">
          <div className="flex items-center justify-center bg-[#1c2327] w-full">
            <div className="bg-[#1c2327] w-full flex lg:flex-row gap-6 lg:gap-4 flex-col items-center px-5 xs:px-10 lg:px-[3.25rem] xl:px-[12rem] py-10 xs:py-[7rem] lg:h-[411px] xs:h-[757px] 2xl:px-[18rem] 3xl:px-[24rem] justify-between lg:py-16 relative">
              <img src={logoMask} className='absolute w-32 h-32 xs:w-48 xs:h-48 lg:w-[340px] lg:h-[340px] top-6 left-52 xs:left-52 lg:top-6 lg:left-[20rem] object-cover opacity-25 -translate-x-44' alt="" />
              <div className="flex flex-col gap-6 lg:w-[50%] text-left w-full 3xl:w-[561px]">
                <p className="text-[3.125rem] leading-tight font-semibold font-['Roboto_Condensed',sans-serif]">Join our community </p>
                <p className='text-sm'>Join us as we celebrate the launch of our project by offering exclusive rewards to our early supporters. By participating in our ecosystem, you'll have the opportunity to receive free token airdrops and access to exciting perks. Don't miss out on this chance to be part of our growing community!</p>
              </div>
              <div className="w-full xs:w-full lg:w-[40%] flex flex-col gap-4 3xl:w-[513px]">
                <CommunityCard link="https://discord.gg/ZP4Jpr2N" img={discord} title="Discord" des="Get Involved" />
                <CommunityCard link="https://t.me/+kCsGgSJcJOM0Nzgx" img={telegram} title="telegram" des="join discussion" />
                <CommunityCard link="https://www.instagram.com/nimbiwolfpack?igsh=MWZheTZ1amxvdm43Mw==" img={instagram} title="instagram" des="join discussion" />
                <CommunityCard link="" img={x} title="x" des="read the latest" />
                <CommunityCard link="https://youtube.com/@nimbitoken?si=cA47JatIiablPCp5" img={youtube} title="youtube" des="check Out our latest videos" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 pb-16 md:pb-0 justify-between w-[90%] 3xl:w-[50%] xs:h-[362px] md:px-0 items-center text-center font-normal text-[#f8f8f8] font-['Roboto',sans-serif]">
            <p className="text-[3rem] xs:text-[2.5rem] leading-tight font-semibold uppercase font-['Roboto_Condensed',sans-serif]">Whitepaper </p>
            <p className='text-base'>Explore the Nimbi whitepaper and get an in-depth breakdown of the unique benefits, innovative features, and overall vision of the NIMBI ecosystem and its native token. This clear, concise, and expertly crafted informational report will help you understand exactly what sets NIMBI apart from other crypto projects.<br /><br />Dive into our educational white paper and find out why taking this journey with us is an absolute no-brainer!</p>
            <a href={whitepaper} target='_blank'>
              <div className="btn border border-[#00ace6] font-['Inter'] text-base bg-transparent text-[#00ace6] hover:text-[#c4c0c8] w-[219px] h-11 text-center">Access the whitepaper</div>
            </a>
          </div>
          <div className="w-full justify-end flex" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
            <img src={icon} className='absolute right-12 md:right-24 -bottom-[25.25rem] sm:bottom-12 w-11 h-11 bg-[#43545e] px-3 -rotate-90 py-2.5 cursor-pointer' alt="" />
          </div>
        </div>

        <Footer />

      </div>
    </>
  )
}

export default Home
