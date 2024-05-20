import React, { useEffect, useRef } from 'react'
import '../App.css'
import { AnimationCard, IntroCard, NFTCard, Navbar } from '../components'
import { hero, svg1, svg2, svg3, author1, author2, author3, author4, author5, sec1, ellipse, goldWolf, bigEllipse, discord, icon, telegram, x, github, vector, tick, mask, mountain, indicator, round, animation, whaleLeft, roadmap, hero1, hero2, mountainThumbnail, logoMask, mountainCover } from '../assets'
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
      gsap.to('.collectionLeft', { x: -1500, duration: 2, scrollTrigger: { trigger: '.collectionLeft', start: width > 1536 ? "bottom 83%" : "bottom 98%", end: "top -300%", scrub: true, } })
      gsap.to('.collectionRight', { x: 1500, duration: 2, scrollTrigger: { trigger: '.collectionRight', start: width > 1536 ? "bottom 83%" : "bottom 98%", end: "top -150%", scrub: true } })
      gsap.to('.collectiontop', { x: -1500, duration: 2, scrollTrigger: { trigger: '.collectionRight', start: width > 1536 ? "bottom 83%" : "bottom 98%", end: "top -300%", scrub: true } })
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
          end: width < 1720 ? "bottom -10%" : "bottom 25%",
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
          start: `top 60%`,
          end: `top -80%`,
          scrub: 1
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
              start: `top ${60}%`,
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

      <div className="z-0 capitalize pt-[3.6rem] xl:pt-[4.4rem] overflow-x-hidden " ref={main}>

        <div className="relative w-[90%] mx-auto h-[35vw] md:w-[81%] 4xl:w-[1506px] 4xl:h-[694px] carousel">
          <img src={mountainThumbnail} className='absolute bottom-0 -left-48 w-[55rem] ' alt="" />
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
              <img src={hero} className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hero1} className="w-full h-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={hero2} className="w-full h-full object-cover" />
            </SwiperSlide>

          </Swiper>
        </div>

        <div className="flex md:flex-row flex-col items-center justify-center border-t border-b border-[#767f84] bg-[#1c2327]">
          <IntroCard img={svg1} title="Buy-Back System" desc="Nimbi uses a smart contract to purchase $NIMBI tokens from public exchanges on a daily basis. These purchases are financed through a portion of the revenue. During this buying process the $NIMBI price goes automatically up." />
          <IntroCard img={svg2} title="Automatic Token Burn" desc="The smart contract automatically burns half of the purchased $NIMBI tokens each day. This process reduces the circulating $NIMBI supply, which makes the remaining tokens more valuable." />
          <IntroCard img={svg3} title="Daily Profits" desc="The other half of the tokens obtained through the buyback process will be automatically transferred to the Nimbi Staking Pool. This staking pool then distributes rewards daily to $NIMBI holders based on the number of tokens they hold, generating daily profits for them." />
        </div>

        <div className="overflow-x-hidden z-20">

          <div className="w-[90%] lg:w-[80%] 4xl:w-[1506px] mx-auto pt-[5rem] xl:pt-[9rem] h-[138rem] xs:h-[84rem] md:h-[70rem] lg:h-[80rem] xl:h-[49rem] 3xl:h-[53rem] z-0">
            <div className="collectiontop relative mb-8 3xl:mb-6">
              <div className="btn bg-[#5c666c] w-max font-semibold py-[5px] px-[10px] z-10 text-sm 3xl:text-lg"><p>Collection</p></div>
              <img src={ellipse} className='absolute -top-6 3xl:-top-8 left-[3.5rem] w-[4.875rem] 3xl:w-[6.375rem] -z-0' alt="" />
            </div>

            <div className="flex xl:flex-row flex-col justify-between relative gap-10 xl:gap-0">
              <div className="collectionLeft flex flex-col justify-end w-full xl:w-[45%] 4xl:w-[580px] 4xl:h-[648px]">
                <div className="flex flex-col gap-[38px] ">
                  <div className="text-[3.25rem] md:text-[4.2rem] 2xl:text-[5rem] 3xl:text-[5rem] font-['Roboto_Condensed'] leading-tight 3xl:leading-[6.5rem] tracking-[0.25px] font-bold uppercase text-[#5c666c]">Discover Our Exclusive NFT Collection</div>
                  <p className="text-2xl font-medium font-['Roboto_Condensed',sans-serif]">Discover Our Exclusive NFT Collection.</p>
                  <p className='text-sm w-[70%]'>Explore our curated selection of digital artworks, each a unique masterpiece created by talented artists from around the world. From stunning visual designs to thought-provoking concepts, our NFTs offer a glimpse into the vibrant world of digital art.</p>
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

          <div className="roadmap-container -z-50 bg-[url(./assets/bigEllipse.png)] sm:bg-[_33rem_33rem] bg-[50rem_1rem] sm:bg-[152vw_6rem] xl:bg-[72vw_6rem] 3xl:bg-[77vw_6rem] bg-no-repeat flex flex-col sm:gap-0 mt-16 pt-[6rem] lg:pt-0 xl:mt-[5rem]">
            <div className="lg:block hidden border-t -translate-x-[55%] relative -z-50 mt-[2rem] pb-[6.5rem] 3xl:pb-[7rem]">
              <img src={whaleLeft} className='whaleLeft absolute top-[303rem] lg:-top-[35.5rem] -right-[70rem] lg:-right-[53rem] 3xl:-right-[65rem] -z-50' alt="" />
            </div>

            <div className="flex flex-col gap-4 sm:gap-16 3xl:gap-[6rem] w-[90%] lg:w-[77.5%] mx-auto">
              <div className="relative">
                <div className="btn bg-[#5c666c] w-max font-semibold py-[5px] px-[10px] z-10 text-sm 3xl:text-lg"><p>roadmap</p></div>
                <img src={ellipse} className='absolute -top-6 3xl:-top-8 left-[3.5rem] w-[4.875rem] 3xl:w-[6.375rem] -z-0' alt="" />
              </div>

              <p className='text-xs md:text-sm 3xl:text-lg xs:w-[70%] pt-6 sm:pt-2'>We follow these roadmap for launching the Nimbi ecosystem. We may experience certain setbacks while developing the whole Nimbi ecosystem, but our team has a right attitude to stick to the course, no matter what!
              </p>

              <div className="relative">
                <img src={roadmap} className='roadmap absolute top-[2rem] md:top-[2rem] xl:-top-[4rem] -right-[0] 3xl:right- 5xl:right-48 -z-40' alt="" />
              </div>
            </div>

            <div className="wrapper">

              <section className='md:static relative w-screen md:h-0'>
                <div className="w-[100rem] md:w-[250rem] relative">
                  <img src={mountain} className='mountain absolute opacity-60 h-[45rem] md:h-[75rem] -top-[33rem] xs:-top-[30.5rem] md:-top-[54.75rem] 3xl:-top-[54.75rem] w-[150rem] 3xl:w-[205rem] -left-[30.75rem] xs:-left-[21.5rem] sm:-left-[17rem] md:left-[0rem] -z-50' alt="" />
                </div>
              </section>

              <div className="container scrollx overflow-hidden md:overflow-visible pt-[6rem] mt-[8rem] xs:mt-[12rem] md:mt-0 md:pt-0">
                <AnimationCard title="Pre-Sale Phase" desc="2023 Q1" phase="1" src={tick} icon={round} year="2023" list={["Launch Website", "Market Strategy Planning", "White Paper creation", "Market research", "feasability analysis", "competitor analysis", "tokenomics development", "smart contract development", "secure initial funding"]} />
                <AnimationCard title="Pre-Sale Phase" desc="2024 Q1" phase="2" src={vector} icon={indicator} year="2024" />
                <AnimationCard title="Pre-Sale Phase" desc="2024 Q2" phase="3" src={vector} icon={indicator} year="2024" />
                <AnimationCard title="Pre-Sale Phase" desc="2024 Q3" phase="4" src={vector} icon={indicator} year="2025" />
                <AnimationCard title="Pre-Sale Phase" desc="2024 Q3" phase="5" src={vector} icon={indicator} year="2026" />
              </div>
            </div>
          </div>

        </div>


        <div className="py-12">
          <img src={sec1} alt="" className='w-full' />
        </div>

        <div className="bg-[url(./assets/wolfMask.png)] wolfMask bg-no-repeat xl:h-[954px] overflow-hidden">
          <div className="flex mx-auto w-[90%] lg:w-[80%] 4xl:w-[1502px] justify-between 2xl:flex-row gap-6 3xl:gap-[0px] flex-col pt-8">
            <div className="flex flex-col gap-8 w-full 2xl:w-[725px]">
              <div className="relative">
                <div className="btn bg-[#5c666c] w-max font-semibold text-sm 3xl:text-lg py-[5px] px-[10px]">Supporting dapps</div>
                <img src={ellipse} className='absolute -top-8 left-[6rem] 3xl:left-[8rem] w-[6.375rem]' alt="" />
              </div>
              <p className="text-[#a1a7aa] text-[3rem] md:text-[4.5rem] font-['Roboto_Condensed'] leading-[5rem] 2xl:leading-[5.5rem] tracking-[0.25px] font-bold uppercase">NIMBI The Leader of the Pack</p>
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
              <p className="text-[#a1a7aa] text-[3rem] md:text-[4.5rem] font-['Roboto_Condensed'] leading-[5rem] 2xl:leading-[5.5rem] tracking-[0.25px] font-bold uppercase pb-4">Open-Source Decentralized Lottery</p>
              <p className="text-2xl font-['Roboto_Condensed'] font-medium text-white 2xl:pb-0 pb-8">Introducing Crypto Lotto, the web 3 Dapp that puts all those centralized lotto's to shame</p>
            </div>
          </div>
          <div className="xs:border-b -translate-x-[25%] pb-16 xs:pb-[7rem] xl:pb-[6.5rem] 3xl:pb-[7rem]">
          </div>
        </div>

        <div className="relative w-full h-[90rem] sm:h-[92rem] md:h-[70rem] lg:h-[74rem] xl:h-[70rem] 3xl:h-[1080px] 5xl:h-[95rem] xs:pt-16">

          <div className="bg-[url(./assets/sec2.png)]  relative w-full h-[35rem] xs:h-[50rem] sm:h-[50rem] md:h-full xl:bg-cover xl:bg-center bg-[-36rem_0rem] xs:bg-[-45rem_0rem] sm:bg-[-39rem_-0.5rem] md:bg-right bg-no-repeat bg-cover sm:pb-[4rem] md:pb-0">
          </div>

          <div className="sm:h-[42rem] lg:h-[46rem] xl:h-[50rem] flex flex-col -translate-y-[3rem] xs:-translate-y-[5rem] sm:translate-y-0 sm:absolute bottom-0 xl:bottom-28 md:top-28 lg:top-[18rem] xl:top-[12rem] 3xl:top-[15rem] pl-8 pr-8 pt-12 pb-12 xs:pr-12 xs:pl-10 md:pr-0 md:pt-[rem] lg:pt-[0rem] 3xl:pl-[13rem] xl:pb-[8rem] xl:pl-[10rem] w-full md:w-[63%] lg:w-[60%] 3xl:w-[50%] gap-6 xl:gap-12 items-center md:items-start justify-around lg:justify-center text-[#151b1e] bg-white md:bg-transparent">
            <p className="text-[3rem] sm:text-[4.5rem] 3xl:text-[4.5rem] font-bold uppercase leading-tight font-['Roboto_Condensed',sans-serif] xl:w-[80%] 3xl:w-full">Web3 Crypto Dust Runner Game</p>
            <p className='text-base xl:text-lg font-medium tracking-tighter md:w-[73%] lg:w-[70%] 3xl:w-[85%]'>In the DeFi industry, crypto dust refers to small amounts of cryptocurrency either left over from transactions, or valueless remaining assets.</p>
            <p className='text-base font-medium block md:w-[73%] lg:w-[70%] 3xl:w-[90%]'>In the dedicated Web3 Nimbi ecosystem game, Crypto Dust Runner, Crypto Dust represents a fundamental in-game resource. It's a symbolic representation of the small, seemingly insignificant particles that, when accumulated, can lead to significant power and change—much like how small contributions in blockchain and community efforts can lead to substantial impacts. The gameplay involves players controlling Nimbi to collect Crypto Dust throughout their journey up a vast mountain that ends, ultimately, in a challenging boss fight. This dust gathered along the way not only powers Nimbi but also serves as a currency within the game, convertible into Kazi tokens through in-game mechanics. </p>
            <div className="w-full text-left">
              <p className="btn w-[12rem] text-base text-center">Launch App</p>
            </div>
          </div>
        </div>

        <div className="bg-[#1c2327] flex lg:flex-row gap-4 flex-col lg:items-center justify-center lg:gap-12 pt-[6rem] md:pt-[76px] pb-[5rem] md:pb-[6rem]">
          <div className="w-[24rem] xs:w-[32rem] lg:w-[36rem] relative">
            <img src={goldWolf} className='-translate-x-4 md:translate-x-0 w-full h-full object-cover z-20' alt="" />
            <img src={bigEllipse} className='absolute top-2 left-10 lg:left-auto lg:top-0 lg:-right-[19rem] w-[20rem] xs:w-[34.625rem] z-20' alt="" />
          </div>
          <div className="flex flex-col w-[90%] mx-auto lg:mx-0 lg:text-start lg:w-[40%] gap-6 justify-between md:justify-center md:pb-10 xs:h-[447px] md:h-auto text-[#a1a7aa]">
            <p className="text-[3rem] xs:text-[3.625rem] 2xl:text-[5rem] leading-tight 2xl:leading-[6.5rem] tracking-[0.25px] font-bold uppercase font-['Roboto_Condensed',sans-serif]">KAZI token </p>
            <p className='text-sm sm:text-2xl font-medium font-["Roboto_Condensed",sans-serif] text-white'>The Mediator and Peacemaker</p>
            <p className='text-base font-["Roboto",sans-serif]'>Kazi brings a different energy to the project. A six-year-old Aussie Husky, also a rescue, Kazi brings his experiences from the sweltering South to the cooler climates of the Rocky Mountains. His natural inclination to mediate and maintain peace, demonstrated by his behavior of breaking up fights at dog parks, is mirrored in the digital world.
              In Crypto Dust Runner, Kazi's role transcends mere play. He is envisioned as a mediator within the game's community, potentially influencing gameplay dynamics where cooperation among players is crucial. His presence in the game and the ecosystem symbolizes the project's commitment to fostering a cooperative and harmonious community, reflecting his peacemaking nature</p>
            <div className="btn text-center text-base w-[11.125rem] h-[44px] z-30">buy kazi</div>
          </div>
        </div>

        <div className="bg-[url(./assets/whaleRight.png)] w-full h-[77rem] sm:h-[85rem] lg:h-[77.9rem] lg:pt-[11rem] bg-[-18rem_14rem] lg:bg-[-5rem_-3rem] 3xl:bg-[0rem_-2rem] bg-[_100rem_80rem] lg:bg-[_100rem_95rem] 3xl:bg-[_120rem_85rem] bg-no-repeat flex flex-col items-center gap-10 xs:gap-[90px] justify-end relative">
          <div className="flex items-center justify-center bg-[#1c2327] w-full">
            <div className="bg-[#1c2327] w-full flex lg:flex-row gap-6 lg:gap-4 flex-col items-center px-5 xs:px-10 lg:px-[12rem] xl:px-[12rem] py-10 xs:py-[7rem] lg:h-[411px] xs:h-[757px] 2xl:px-[18rem] 3xl:px-[24rem] justify-between lg:py-16">
              <img src={logoMask} className='absolute w-32 h-32 xs:w-48 xs:h-48 lg:w-[340px] lg:h-[340px] top-64 xs:top-32 left-60 lg:top-[23.75rem] lg:left-[20rem] object-cover opacity-25 -translate-x-44' alt="" />
              <div className="flex flex-col gap-6 lg:w-[50%] text-left w-full 3xl:w-[561px]">
                <p className="text-[3.125rem] leading-tight font-semibold font-['Roboto_Condensed',sans-serif]">Join our community </p>
                <p className='text-sm'>Join us as we celebrate the launch of our project by offering exclusive rewards to our early supporters. By participating in our ecosystem, you'll have the opportunity to receive free token airdrops and access to exciting perks. Don't miss out on this chance to be part of our growing community!</p>
              </div>
              <div className="w-full xs:w-full lg:w-[40%] flex flex-col gap-4 3xl:w-[513px]">
                <div className="flex items-center justify-between gap-4 cursor-pointer bg-[#242d32] rounded-md px-4 py-2">
                  <div className="flex items-center justify-between gap-4 ">
                    <img src={discord} alt="" className='w-10' />
                    <div className="">
                      <p className='font-semibold text-sm'>Discord</p>
                      <p className='text-xs'>Get Involved</p>
                    </div>
                  </div>
                  <img src={icon} alt="" />
                </div>
                <div className="flex items-center justify-between gap-4 cursor-pointer hover:bg-[#242d32] rounded-md px-4 py-2">
                  <div className="flex items-center justify-between gap-4 ">
                    <img src={telegram} alt="" className='w-10' />
                    <div className="">
                      <p className='font-semibold text-sm'>telegram</p>
                      <p className='text-xs'>join discussion</p>
                    </div>
                  </div>
                  <img src={icon} alt="" />
                </div>
                <div className="flex items-center justify-between gap-4 cursor-pointer hover:bg-[#242d32] rounded-md px-4 py-2">
                  <div className="flex items-center justify-between gap-4 ">
                    <img src={x} alt="" className='w-10' />
                    <div className="">
                      <p className='font-semibold text-sm'>x</p>
                      <p className='text-xs'>read the latest</p>
                    </div>
                  </div>
                  <img src={icon} alt="" />
                </div>
                <div className="flex items-center justify-between gap-4 cursor-pointer hover:bg-[#242d32] rounded-md px-4 py-2">
                  <div className="flex items-center justify-between gap-4 ">
                    <img src={github} alt="" className='w-10' />
                    <div className="">
                      <p className='font-semibold text-sm'>github</p>
                      <p className='text-xs'>build with us</p>
                    </div>
                  </div>
                  <img src={icon} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5 justify-between w-[90%] 3xl:w-[50%] xs:h-[312px] md:px-0 items-center text-center font-normal text-[#f8f8f8] font-['Roboto',sans-serif]">
            <p className="text-[3rem] xs:text-[2.5rem] leading-tight font-semibold uppercase font-['Roboto_Condensed',sans-serif]">Whitepaper </p>
            <p className='text-base'>Explore the Nimbi whitepaper and get an in-depth breakdown of the unique benefits, innovative features, and overall vision of the NIMBI ecosystem and its native token. This clear, concise, and expertly crafted informational report will help you understand exactly what sets NIMBI apart from other crypto projects.<br /><br />Dive into our educational white paper and find out why taking this journey with us is an absolute no-brainer!</p>
            <div className="btn border border-[#00ace6] font-['Inter'] text-base bg-transparent text-[#00ace6] hover:text-[#c4c0c8] w-[219px] h-11 text-center">Access the whitepaper</div>
          </div>
          <div className="w-full flex justify-end" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
            <img src={icon} className='absolute right-2 md:right-24 bottom-10 md:bottom-12 w-11 h-11 bg-[#43545e] px-3 -rotate-90 py-2.5 cursor-pointer' alt="" />
          </div>
        </div>

        <Footer />

      </div>
    </>
  )
}

export default Home
