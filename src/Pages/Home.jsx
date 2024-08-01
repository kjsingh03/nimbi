import React, { useEffect, useRef } from 'react'
import '../App.css'
import { AnimationCard, CommunityCard, Ethos, IntroCard, NFTCard, Navbar } from '../components'
import { hero, play, collect, profit, author1, author2, author3, author4, author5, sec1, ellipse, goldWolf, bigEllipse, discord, icon, telegram, x, github, vector, tick, mask, mountain, indicator, round, animation, whaleLeft, roadmap, hero1, hero2, logoMask, mountainCover, whitepaper, sec3Bottom, introCard1, introCard2, introCard3, instagram, youtube, nimbi_hero, mountain_back, black_dog, our, ethos, eth_white, eth_black, ecosystem, mobile2, mobile1, hero_mountain, dualtoken, dolphin, dog_shade, circle_graph, tokenDolphin, fox, puppy, chain, bluePen, foxHead } from '../assets'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP, ScrollTrigger)
import Footer from '../components/Footer/Footer';

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
      gsap.to('.collectionLeft', { x: -1500, duration: 2, scrollTrigger: { trigger: '.collectionLeft', start: width >= 1720 ? "bottom 82%" : "bottom 99.5%", end: "top -300%", scrub: true } })
      gsap.to('.collectionRight', { x: 1500, duration: 2, scrollTrigger: { trigger: '.collectionRight', start: width >= 1720 ? "bottom 82%" : "bottom 87%", end: "top -150%", scrub: true } })
      gsap.to('.collectiontop', { x: -1500, duration: 2, scrollTrigger: { trigger: '.collectionRight', start: width >= 1720 ? "bottom 82%" : "bottom 87.5%", end: "top -300%", scrub: true } })
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

        <div className="w-screen bg-[#1C2327] overflow-hidden">
          <div className="relative mx-auto h-[814px] sm:h-[734px] xl:h-[45vw] 2xl:h-[35vw] flex justify-center items-center xl:w-[81%] 4xl:w-[1506px] 4xl:h-[694px] carousel ">
            <img src={hero_mountain} className='absolute bottom-0 left-[50%] translate-x-[-50%] max-w-[100%] w-[44.5rem] z-[1]' alt="" />
            <div className="h-auto flex-col justify-start items-center gap-[29px] px-4 inline-flex relative z-[10]">
              <img src={nimbi_hero} alt="Nimbi Hero Image" />
              <div className="text-center text-white sm:text-6xl text-[50px] font-medium font-roboto leading-[60.48px]">Turn Play Into Profits<br />Unite the world with crypto dust</div>
              <div className="text-center max-w-[661px] text-white text-2xl font-normal font-['Roboto'] leading-[30px]">Play to earn crypto dust, collect exclusive digital wolf NFTs, and join the world’s biggest online Wolfpack.</div>
              <div className="btn">Join The Wolfpack</div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center justify-center border-t border-b border-[#767f84] bg-[#1c2327]">
          <IntroCard title="Play" desc="Earn crypto dust playing games online with other Wolfpack members. Unlock daily rewards and compete for the top leaderboard spots to win bonus rewards. " img={play} />
          <IntroCard title="Collect" desc="Build your personal wolfpack with a unique NFT art collection featuring man’s best friend. Gain exclusive assets to upgrade your in-game experience." img={collect} />
          <IntroCard title="Profit" desc="What separates $NIMBI and $KAZI from meme coins? A dual-token system with robust fundamentals. With many ways to earn dust and convert into tokens, NIMBI and KAZI " img={profit} />
        </div>



        {/* Our Ethos Section Start */}
        <div className="w-screen h-auto bg-[#A1A7AA] relative flex justify-center overflow-hidden">
          <div className="absolute sm:top-[290px] sm:left-[50%] sm:h-full h-[108px] -left-[396px] sm:-translate-x-[50%] sm:w-screen min-w-[910px] top-[132px] z-[1]">
            <img src={mountain_back} className="w-full" alt="Back side Mountain" />
          </div>
          <div className="z-[10] relative flex justify-between 2xl:w-[1506px] items-center lg:gap-[100px] gap-5 lg:flex-row flex-col-reverse">
            <div className=" h-fit">
              <div className="xs:max-w-[501px] w-full h-auto px-[45px] pt-[110px] pb-[42px] bg-[#1c2327] border-b border-[#767f84] flex-col justify-start items-start gap-[107px] inline-flex">
                <div className="self-stretch flex-col justify-start fade-in items-start gap-[19px] flex">
                  <div className="text-center text-white text-4xl font-medium font-roboto capitalize leading-loose">Unity</div>
                  <div className="self-stretch text-[#ebeced] text-base font-normal font-['Roboto'] leading-normal">We believe in people over profits and politics. We won’t be divided by the interests of elites any longer. Our mission is to take back control from the tech giants and put the power and profit back into the hands of the community. We’re growing the biggest wolfpack on the planet—are you on board?</div>
                </div>
                <div className="self-stretch flex-col justify-start fade-in items-start gap-[19px] flex">
                  <div className="text-center text-white text-4xl font-medium font-roboto capitalize leading-loose">Resilience</div>
                  <div className="self-stretch text-[#ebeced] text-base font-normal font-['Roboto'] leading-normal">There are enough useless Web3 projects and shitcoins out there already. We’re building useful decentralized applications </div>
                </div>
                <div className="self-stretch sm:pb-[150px] pb-[50px] fade-in flex-col justify-start items-start gap-[19px] flex">
                  <div className="text-center text-white text-4xl font-medium font-roboto capitalize leading-loose">Empowerment</div>
                  <div className="self-stretch text-[#ebeced] text-base font-normal font-['Roboto'] leading-normal">There are enough useless Web3 projects and shitcoins out there already. We’re building useful decentralized applications </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative z-[5] w-fit pt-[50px]">
                <img src={black_dog} className="max-w-full sm:w-full sm:h-full w-[234px] h-[258px]" alt="Black Dog" />
                <div className="absolute z-[11] sm:bottom-[140px] bottom-[70px] sm:-left-[57px] -left-10">
                  <img src={our} className="sm:w-full sm:h-full w-[141px] h-[59px]" alt="Our" />
                </div>
                <div className="absolute z-[10] sm:bottom-[44px] bottom-5 -right-5">
                  <img src={ethos} className="sm:w-full sm:h-full w-[181px] h-[45px]" alt="Ethos" />
                </div>
              </div>
              <div className="max-w-[830px] sm:pt-[46px] z-[10] px-8 bg-[#A1A7AA] relative sm:-top-[46px] text-black text-base font-normal font-['Roboto'] leading-normal">Growing up on a reservation in Colorado, Nimbi the wolfdog learned to fend for himself, fighting for scraps. It’s not easy surviving on your own, but Nimbi did. He was eventually rescued by his owner Dack who founded the Nimbi ecosystem in his name. <br /><br />Though today he lives an ideal life in a cabin home in the Colorado mountains, he kept the resilience he earned as a pup. Nimbi is built on these principles. <br /><br />Just as seemingly insignificant leftover scraps can feed a wolf, so too can crypto dust grow into substantial wealth. When a community of decentralized minded people leverage their crypto dust together—they can create incredible change. <br /><br />Our mission is to unite humanity with the power of crypto dust to create a fairer, transparent and prosperous Web3. An empowered world. You with us?<br /></div>
            </div>
          </div>
        </div>
        {/* Our Ethos Section End */}

        {/* Build Your Wolfpack Section Start */}
        <div className="w-screen overflow-hidden bg-[#1C2327]">
          <div className="w-[90%] lg:w-[80%] 4xl:w-[1506px] mx-auto py-[5rem] xl:pt-[9rem] h-fit z-0">
            <div className="collectiontop relative mb-8 3xl:mb-6">
              <div className="bg-[#5c666c] w-max font-semibold py-[5px] px-[10px] z-10 text-sm 3xl:text-lg"><p>Collection</p></div>
              <img src={ellipse} className='absolute -top-6 3xl:-top-8 left-[3.5rem] w-[4.875rem] 3xl:w-[6.375rem] -z-0' alt="" />
            </div>

            <div className="flex xl:flex-row flex-col justify-between relative gap-10 xl:gap-0 pt-[11px]">
              <div className="flex flex-col h-auto w-full xl:w-[40%] 2xl:w-[580px]">
                <div className="flex flex-col gap-[38px] ">
                  <div className="text-[3.25rem] md:text-[4.2rem] 2xl:text-[5rem] 3xl:text-[5rem] font-['Roboto_Condensed'] leading-tight 3xl:leading-[6.5rem] tracking-[0.25px] font-bold uppercase text-[#5c666c]">build your  Wolfpack</div>
                  <p className="text-2xl font-medium font-['Roboto_Condensed',sans-serif]">10,000 unique collectible wolves strong. </p>
                  <p className='text-sm md:w-[70%]'>Start your personal wolfpack with 3D collectible NFTs and howl at the moon.
                    <br /><br />
                    Members who hold 1 $NIMBI token will get an exclusive digital Wolf NFT minted with proof of ownership from one of the original 10,000 on the ERC-20 protocol.
                    <br /><br />
                    Collect, trade and grow your own Wolfpack. </p>
                  <p className='btn w-fit text-sm text-center rounded-[4px] py-2.5 px-[14px]'>Explore the wolves</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 xs:grid-cols-2 justify-center gap-5 py-6 xl:py-0 w-full xl:w-[60%] h-fit z-0">
                <NFTCard img={author1} clas="sm:opacity-0" icon={eth_white} />
                <NFTCard img={author1} icon={eth_white} />
                <NFTCard img={author2} icon={eth_white} />
                <NFTCard img={author3} icon={eth_white} />
                <NFTCard img={author4} icon={eth_white} />
                <NFTCard img={author5} icon={eth_black} />
              </div>
            </div>
          </div>
        </div>
        {/* Build Your Wolfpack Section End */}


        {/* Turn in game OwnerShip Section End */}
        <div className="flex flex-col gap-[56px] py-12 lg:pb-16 xl:pb-12 bg-[#1C2327]">
          <div className="flex-col px-4 xs:px-8 justify-start items-center gap-[54px] inline-flex">
            <div className="text-center text-[#a1a7aa] sm:text-[80px] text-[60px] font-medium font-roboto sm:leading-[93px] leading-[77px]">True in-game ownership</div>
            <div className="max-w-[700px] text-center text-[#ebeced] text-base font-normal font-['Roboto'] leading-normal">Each Wolf NFT also unlocks in-game perks in Crypto Dust Runner. Own, trade and even sell your in-game assets. You own them.</div>
          </div>
          <div className="bg-[url(./assets/msec1.png)] sm:bg-[url(./assets/sec1.png)] w-full bg-contain md:bg-contain bg-no-repeat h-[23rem] xxs:h-[100vw] sm:h-[38vw] ">
          </div>
        </div>
        {/* Turn in game OwnerShip Section End */}

        {/* Inside Nimbi Ecosystem Section Start */}
        <div className="w-screen overflow-hidden bg-[#1C2327]">

          <div className="w-full sm:min-h-[974px] sm:py-0 pt-[46px] pb-[57px] px-4 xs:px-8 sm:pt-[34px] bg-[#1c2327] flex-col justify-center items-center gap-[51px] inline-flex">
            <div className="self-stretch h-auto flex-col justify-start items-center gap-[11px] flex">
              <div className="justify-start items-center inline-flex relative">
                <div className="relative z-[10] px-2.5 py-[5px] bg-[#5c666c] justify-center items-center gap-2.5 flex">
                  <div className="text-center text-white text-lg font-bold font-['Inter'] leading-7">Decentralized Utility</div>
                </div>
                <div className="w-[102px] h-[102px] absolute z-[1] -right-[55px]">
                  <img src={ellipse} alt="Ellipse" />
                </div>
              </div>
              <div className="self-stretch text-center text-white text-[60px] sm:text-[100px] leading-normal font-medium font-roboto uppercase  ">Inside the Nimbi ecosystem</div>
            </div>
            <img className="max-w-[549px] w-full h-full max-h-[310px] shadow" src={ecosystem} />
          </div>
        </div>
        {/* Inside Nimbi Ecosystem OwnerShip Section End */}


        {/* Crypto dust converter Section Start */}
        <div className="w-screen overflow-hidden bg-[#1C2327]">

          <div className="w-screen h-[1px] bg-[#767F84]"></div>
          <div className="py-[76px] px-[32px] xs:px-[48px] flex justify-center">

            <div className="h-auto justify-start lg:flex-row flex-col-reverse items-center gap-6 inline-flex">
              <div className="lg:max-w-[647px] flex-col justify-center items-start inline-flex">
                <div className="self-stretch flex-col justify-start items-center gap-[33px] flex">
                  <div className="self-stretch text-[#a1a7aa] text-[60px] sm:text-[80px] font-medium font-roboto sm:leading-[80px] leading-normal">Crypto Dust Converter</div>
                  <div className="self-stretch text-white text-2xl font-medium font-['Roboto'] capitalize leading-normal">The blockchain’s trash, your treasure </div>
                </div>
                <br />
                <div className="max-w-[600px]">
                  <span className="text-[#ebeced] text-base font-bold font-['Roboto'] leading-normal">Transform crypto dust into $KAZI tokens. Get rewarded for in-game efforts with valuable assets. <br /></span><span className="text-[#ebeced] text-base font-normal font-['Roboto'] leading-normal"><br />Crypto Dust Converter lets you seamlessly convert even the tiniest amount of crypto dust into $KAZI tokens. No more crypto dust sitting in your wallet collecting dust. Swap your $KAZI for in-game perks and bonuses or convert it to $NIMBI for more access. It’s in your hands.</span>
                </div>
              </div>
              <img className="lg:max-w-[506px] lg:max-h-[557px] w-full h-full" src={mobile2} />
            </div>
          </div>
          <div className="w-screen h-[1px] bg-[#767F84]"></div>
        </div>
        {/* Crypto dust converter Section End */}

        {/* DE-FI Lottery Section Start */}
        <div className="w-screen overflow-hidden bg-[#1C2327]">

          <div className="pt-[76px] pb-[51px] px-[32px] xs:px-[48px] flex justify-center">
            <div className="justify-start items-start lg:items-center gap-[49px] lg:flex-row flex-col inline-flex">
              <img className="lg:max-w-[438px] aspect-[506/557]" src={mobile1} alt='Mobile Image' />
              <div className="lg:max-w-[730px] w-full flex-col justify-start items-start gap-6 inline-flex">
                <div className="flex-col justify-start items-start gap-[21px] flex">
                  <div className="self-stretch text-[#a1a7aa] text-[60px] sm:text-[80px] font-medium font-roboto sm:leading-[93px] leading-normal">De-fi Lottery</div>
                  <div className="max-w-[665px] text-white text-2xl font-medium font-roboto capitalize leading-loose">Convert crypto dust. Earn $KAZI. Win big. </div>
                </div>
                <div className="h-[72px] flex-col justify-start items-start gap-[19px] flex">
                  <div className="self-stretch text-[#EBECED] text-base font-normal font-['Roboto'] leading-normal">Play the lottery with your $KAZI for a chance to win big. State-of-the-art smart contracts protect and verify transactions ensuring a fair and transparent draw. Lottery ticket holders can also win an upgrade to the VIP Wolfpack.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
        {/* DE-FI Lottery Section End */}


        {/* <div className="bg-[url(./assets/wolfMask.png)] wolfMask bg-no-repeat xl:h-[954px] overflow-hidden">
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
        </div> */}

        {/* Earn Tokens Section Start */}
        <div className="h-[105rem] xxs:h-[92rem] xs:h-[100rem] sm:h-[108rem] relative md:h-auto">

          <div className="flex flex-col justify-end items-center md:justify-center bg-[url(./assets/msec3.png)] xs:bg-[url(./assets/tsec3.png)] md:bg-[url(./assets/sec3.png)] w-[full] bg-transparent h-full lg:h-[70vw] 2xl:h-[53.25vw] lg:bg-center bg-top xs:bg-right bg-no-repeat bg-cover 2xl:bg-contain sm:pb-[4rem] md:pb-0">
            <div className="w-full md:w-[80%] mx-auto ">
              <div className="pb-[6rem] xxs:pb-[5rem] xs:pb-[7rem] sm:pb-[4.5rem] md:pt-[96px] px-4 xxs:px-4 sm:px-10 md:px-0 flex flex-col md:w-[75%] xl:w-[65%] 3xl:w-[50%] gap-6 xl:gap-9 items-center md:items-start justify-around lg:justify-center text-[#151b1e] md:max-w-[588px] xl:max-w-[unset]">
                <div className="">
                  <p className="sm:text-[84px] text-[60px] leading-normal font-bold uppercase sm:leading-[85px] font-['Roboto_Condensed',sans-serif] xl:w-[80%] 3xl:w-full">Earn Tokens by playing</p>
                  <p className='text-2xl pt-[21px] font-semibold tracking-tighter w-full xl:w-[60%] 2xl:w-[70%] 3xl:w-[85%]'>In the DeFi industry, crypto dust refers to small amounts of cryptocurrency either left over from transactions, or valueless remaining assets.</p>
                </div>
                <p className='text-base font-medium block w-full xl:w-[70%] 3xl:w-[90%]'>
                  Crypto Dust Runner is a play-to-earn multiplayer game putting you on a quest to gather crypto dust for your wallet with your wolfpack. Follow Nimbi as he guides you through a pristine landscape with the ultimate goal of uniting all the wolves.
                  <br />
                  <br />
                  Sign up to beta test the game
                </p>
                <div className="w-full text-left">
                  <p className="btn">Sign Up For Beta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Earn Tokens Section End */}


        {/* Dual Tokens Section Start */}
        <div className="w-screen flex-col justify-start lg:pt-[120px] pt-[48px] lg:pb-[116px] sm:pb-[124px] pb-[57px] sm:px-[48px] px-[21px] items-center gap-[120px] inline-flex bg-[#242D32] relative overflow-hidden">
          <img src={dolphin} alt="Dolphin" className="max-w-[100%] absolute z-[1]" />
          <div className="flex-col justify-start items-center gap-[77px] flex relative z-[10]">
            <div className="text-center text-[#a1a7aa] text-4xl font-medium font-['Inter'] leading-normal">Building the world’s biggest Wolfpack on the Eth blockchain<br /></div>
            <div className="max-w-[558.77px] relative">
              <img src={dualtoken} alt="dualtoken" className="max-w-full" />
              <div className="max-w-[501.32px] left-[57.45px] top-[50.37px] absolute">
                <div className="max-w-[333.69px] left-[167.63px] top-[0.79px] absolute">
                </div>
                <div className="max-w-[333.69px] left-0 top-0 absolute shadow justify-center items-center inline-flex">
                  <div className="max-w-[333.69px] relative">
                    <div className="max-w-[333.69px] left-0 top-0 absolute">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-center gap-[39px] flex max-w-[1171px]">
              <div className="self-stretch text-center text-[#a1a7aa] sm:text-[80px] text-[60px] font-medium font-roboto sm:leading-[93px] leading-normal">Dual-Token Liquidity System</div>
              <div className="self-stretch text-center text-[#ebeced] text-base font-normal font-['Roboto'] leading-normal">From a 3D online multiplayer play-to-earn game to crypto lottery and airdrops, the Nimbi ecosystem supports a strong pack of dApps powered by $NIMBI and $KAZI. Nimbi and Kazi are fraternal twins who support each other. $NIMBI is capped at 10,000 tokens giving you access to Crypto Dust Runner, in-game assets and a unique NFT art collection.</div>
            </div>
          </div>
          <div className="self-stretch py-[54px] flex-col justify-start items-center gap-[68px] flex relative z-[10]">
            <div className="flex-col justify-center items-start gap-[19px] flex">
              <div className="max-w-72  text-white text-6xl font-medium font-roboto sm:leading-[93px] leading-normal">$Nimbi </div>
              <div className="text-white text-2xl font-medium font-roboto capitalize leading-loose">The leader of the pack</div>
              <div className="max-w-[614px] text-[#ebeced] text-sm font-normal font-['Roboto'] leading-normal">And your guide to untold riches in Crypto Dust Runner. An absolute unit of a Wolfdog, Nimbi is both the heart of the Nimbi Wolfpack and the dev’s Wolfdog companion rescued as a pup from the wilds of Colorado.<br /><br />The $NIMBI token gives you access to Crypto Dust Runner as long as you hold at least 0.1 in your wallet. Full token holders will gain 1 of 10,000 exclusive NFT digital art pieces they can collect and trade. Built on the ERC-404 framework.<br /><br />His alter-ego Mr. Nimbus guides players into the mountains and beyond on their quest for crypto dust.</div>

              <div className="btn">Buy $NIMBI</div>

            </div>
            <div className="flex-col justify-center items-start gap-4 flex">
              <div className="flex-col justify-start items-start gap-[21px] flex">
                <div className="max-w-[260px] text-white text-6xl font-medium font-roboto leading-[93px]">$KAZI </div>
                <div className="text-white text-2xl font-medium font-roboto capitalize leading-loose">The backbone of the NIMBI ecosystem</div>
              </div>
              <div className="self-stretch flex-col justify-start items-start gap-[19px] flex">
                <div className="max-w-[603px] text-[#ebeced] text-sm font-normal font-['Roboto'] leading-normal">And your new best friend. $KAZI lets you transform your otherwise wasted leftover crypto dust into $KAZI token which you can stake for more coins, play the lottery, and access dApps that give you the power to shape the community.<br /><br />Convert $KAZI to $NIMBI to gain access to exclusive digital art NFTs and in-game assets to set you apart from the rest of the pack. $KAZI token gives you access to all of Nimbi’s decentralized features letting you earn tokens. Play the Crypto Lottery with your $KAZI to win big. <br /><br />Members can also use their tokens to vote on community initiatives like donating to worthy causes through DAOs. Built on the ERC-20 framework.</div>
                <div className="xs:w-[178px] w-full grow shrink basis-0 px-3.5 py-2.5 bg-gradient-to-br from-[#d9cb00] to-[#ff8717] rounded justify-center items-start gap-2.5 inline-flex">
                  <div className="px-1 justify-start items-start gap-2.5 flex">
                    <div className="text-center text-white text-base font-medium font-['Inter'] leading-normal">Buy $KAZI</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Dual Tokens Section End */}

        <div className="py-[112px] xs:px-[69px] px-4 flex justify-center relative overflow-hidden max-w-screen bg-[#1C2327]">
          <img src={dog_shade} alt="dog_shade" className="absolute z-[1] w-[562px] xl:right-[44px] right-[unset] left-0 xl:left-[unset] xl:top-[80px] top-[447px]" />
          <div className="grid max-w-[1494px] gap-[76px] grid-cols-1 relative z-[10]">
            <div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-[auto]  gap-[76px]">
              <div className="flex flex-col gap-[24px] ">
                <div className="flex flex-col gap-[20px] ">
                  <div className="text-[#a1a7aa] text-[42px] xs:text-6xl font-medium font-roboto uppercase leading-[60px]">Strong Fund<span className="xs:hidden"> </span>ament<span className="sm:hidden xs:block"> </span>als</div>
                  <div className="text-white text-2xl font-medium font-roboto capitalize leading-loose">A symbiotic system that maximizes utility and liquidity</div>

                </div>
                <div className="text-[#ebeced] text-base font-normal font-['Roboto'] leading-normal">$NIMBI and $KAZI are two separate coins that offer their own unique utility in a dual-token system. Together they empower one another and are built in a way that ensures a steady demand for both tokens. <br /><br />With many ways to earn crypto dust and tokens via quests and airdrops in the Nimbi ecosystem, $NIMBI and $KAZI grow stronger together.</div>

              </div>
              <div className="flex flex-col gap-[24px] ">
                <div className="flex flex-col gap-[20px] ">
                  <div className="text-[#a1a7aa] text-[42px] xs:text-6xl font-medium font-roboto uppercase leading-[60px]">Every dog has its Dao</div>
                  <div className="text-white text-2xl font-medium font-roboto capitalize leading-loose">Contribute crypto dust to decide on Nimbi’s destiny. </div>

                </div>
                <div className="text-[#ebeced] text-base font-normal font-['Roboto'] leading-normal">Nimbi is the only top dog. Everyone else is equal. Through Decentralized Autonomous Organizations (DAOs) you get to take ownership of community decisions and make choices that directly impact the direction of the project. <br /><br />Wolfpack members vote on community projects to shape the future of the ecosystem. If only all voting worked this way.</div>

              </div>
            </div>
            <div className="w-full h-[1px] bg-[#5C666C]"></div>
            <div className="grid lg:grid-cols-2 grid-cols-1 grid-rows-[auto]  gap-[76px]">
              <div className="flex flex-col gap-[24px] ">
                <div className="flex flex-col gap-[20px] ">
                  <div className="text-[#a1a7aa] text-[42px] xs:text-6xl font-medium font-roboto uppercase leading-[60px]">Rewards. Every day.</div>
                  <div className="text-white text-2xl font-medium font-roboto capitalize leading-loose">Many ways to earn</div>

                </div>
                <div className="text-[#ebeced] text-base font-normal font-['Roboto'] leading-normal">Get rewarded daily when you complete challenges in-game, our Telegram and Discord channels, and howl on social media. We believe our community should grow and so should their wallets.</div>

              </div>
              <div className="flex flex-col gap-[24px] ">
                <div className="flex flex-col gap-[20px] ">
                  <div className="text-[#a1a7aa] text-[42px] xs:text-6xl font-medium font-roboto uppercase leading-[60px]">Put power back into the commu<span className="sm:hidden xs:block"> </span>nity’s paws</div>
                  <div className="text-white text-2xl font-medium font-roboto capitalize leading-loose">Wolves together strong</div>

                </div>
                <div className="text-[#ebeced] text-base font-normal font-['Roboto'] leading-normal">Chew on this: rising costs of essentials, subscriptions where you don’t own anything and get gouged for every click and corporate scavengers who have their grubby paws all over your news feed. Fake news and AI-generated crap pushed by profit-powered algorithms hungry for infinite growth. It’s time to bite back. <br /><br />YOU own the Nimbi ecosystem. Use the power of your dust to contribute to initiatives through DAOs to decide what the project should focus on and where we go next.</div>

              </div>
            </div>
          </div>
        </div>


        {/* Token Allocation Section Start */}
        <div className="flex justify-center w-screen py-[28px] lg:py-[112px] sm:pb-0 pb-20 relative bg-[#242D32]">
          <img src={tokenDolphin} alt="tokenDolphin" className="absolute z-[1] lg:w-auto w-[70%] right-0 lg:bottom-0 bottom-[200px]" />
          <div className="max-w-[1406px] flex-col justify-start items-start gap-[55px] inline-flex relative z-[10]">
            <div className="collectionLeft self-stretch px-4  flex-col justify-start items-center gap-[87px] flex">
              <div className="flex-col justify-start items-center gap-5 flex">
                <div className="justify-start h-[102px] items-center inline-flex relative">
                  <div className="relative z-[10]  px-2.5 py-[5px] bg-[#5c666c] justify-center items-center gap-2.5 flex">
                    <div className="text-center text-white text-lg font-bold font-['Inter'] leading-7">Tokenomics</div>
                  </div>
                  <div className="w-[102px] h-[102px] absolute z-[1] -right-[55px]">
                    <img src={ellipse} alt="Ellipse" />
                  </div>
                </div>
                <div className="self-stretch flex-col justify-start items-center gap-[33px] flex">
                  <div className="text-[#a1a7aa] text-center sm:text-[80px] text-[60px] font-medium font-roboto sm:leading-[80px] leading-normal">TOKEN ALLOCAT<span className="xs:hidden block"> </span>ION</div>
                  <div className="max-w-[665px] text-center text-white text-2xl font-medium font-roboto capitalize leading-loose">In Dust We Trust</div>
                </div>
                <div className="max-w-[705px] text-center text-[#ebeced] text-base font-normal font-['Roboto'] capitalize leading-normal">$NIMBI is an ecosystem for decentralized-minded people. We reward our members first, not Wall Street. Loyal Wolfpack members get airdrops for being early supporters and earn tokens playing Crypto Dust Runner,  completing daily quests and finishing at the top of the leaderboard. </div>
              </div>
              <div className="justify-start items-center xl:flex-row flex-col inline-flex">
                <div className="justify-start items-center relative top-[60px] xs:top-[80px] xl:top-[unset] xl:left-[60px] flex xl:flex-row flex-col">
                  <div className="xl:max-w-[395px] xs:max-w-[345px] max-w-[226px] min-h[316px] flex-col justify-center items-start gap-2.5 inline-flex">
                    <div className=" pr-4 min-h-[75px] xs:pb-0 pb-3 w-full bg-[#2d353a] rounded-tl rounded-bl xl:border-t-0 border-t-4 xl:border-l-4 border-[#7444ff] backdrop-blur-[7px] justify-between items-center xs:gap-3.5 gap-5 xs:flex-row flex-col inline-flex">
                      <div className=" pr-6 justify-start items-center gap-[21px] flex">
                        <div className="self-stretch justify-start items-center gap-2.5 flex" />
                        <div className="grow shrink basis-0 flex-col justify-center items-start inline-flex">
                          <div className="  justify-start items-center gap-[13px] inline-flex">
                            <div className="text-white xs:text-[32px] text-[24px] font-medium font-['Roboto'] capitalize leading-9">15%</div>
                            <div className="text-white xs:text-lg font-semibold font-['Inter'] capitalize leading-tight text-[15px]">Rewards Staking/Airdrops</div>
                          </div>
                          <div className="self-stretch text-[#ebeced] text-xs font-light font-['Roboto'] capitalize leading-none">to get on major exchanges</div>
                        </div>
                      </div>
                      <div className="xs:flex-col justify-start items-end gap-[5px] inline-flex">
                        <div className="text-[#ebeced] text-xs font-normal font-['Inter'] uppercase leading-tight">Tokens</div>
                        <div className="text-[#ebeced] text-xs font-normal font-['Inter'] capitalize leading-tight">1,500N</div>
                      </div>
                    </div>
                    <div className="pr-4 min-h-[75px] xs:pb-0 pb-3 w-full bg-[#2d353a] rounded-tl rounded-bl border-t-4 xl:border-l-4 border-[#c2f947] backdrop-blur-[7px] justify-between items-center xs:gap-3.5 gap-5 xs:flex-row flex-col inline-flex  xl:border-t-0">
                      <div className="pr-6 justify-start items-center gap-[21px] flex">
                        <div className="self-stretch justify-start items-center gap-2.5 flex" />
                        <div className="grow shrink basis-0 flex-col justify-center items-start inline-flex">
                          <div className="  justify-start items-center gap-[13px] inline-flex">
                            <div className="text-white xs:text-[32px] text-[24px] font-medium font-['Roboto'] capitalize leading-9">10%</div>
                            <div className="text-white xs:text-lg font-semibold font-['Inter'] capitalize leading-tight text-[15px]">Marketing</div>
                          </div>
                          <div className="self-stretch text-[#ebeced] text-xs font-light font-['Roboto'] capitalize leading-none">to get on major exchanges</div>
                        </div>
                      </div>
                      <div className="xs:flex-col flex-row justify-start items-end gap-[5px] inline-flex">
                        <div className="text-[#ebeced] text-xs font-normal font-['Inter'] uppercase leading-tight">Tokens</div>
                        <div className="text-[#ebeced] text-xs font-normal font-['Inter'] capitalize leading-tight">1,000N</div>
                      </div>
                    </div>
                    <div className="pr-4 min-h-[75px] xs:pb-0 pb-3 w-full bg-[#2d353a] rounded-tl rounded-bl border-t-4 xl:border-l-4 border-[#8e8e8e] backdrop-blur-[7px] justify-between items-center xs:gap-3.5 gap-5 xs:flex-row flex-col inline-flex  xl:border-t-0">
                      <div className="pr-6 justify-start items-center gap-[21px] flex">
                        <div className="self-stretch justify-start items-center gap-2.5 flex" />
                        <div className="grow shrink basis-0 flex-col justify-center items-start inline-flex">
                          <div className="  justify-start items-center gap-[13px] inline-flex">
                            <div className="text-white xs:text-[32px] text-[24px] font-medium font-['Roboto'] capitalize leading-9">10%</div>
                            <div className="text-white xs:text-lg font-semibold font-['Inter'] capitalize leading-tight text-[15px]">Team</div>
                          </div>
                          <div className="self-stretch text-[#ebeced] text-xs font-light font-['Roboto'] capitalize leading-none">reward the community with airdrops for early support.</div>
                        </div>
                      </div>
                      <div className="xs:flex-col flex-row justify-start items-end gap-[5px] inline-flex">
                        <div className="text-[#ebeced] text-xs font-normal font-['Inter'] uppercase leading-tight">Tokens</div>
                        <div className="text-[#ebeced] text-xs font-normal font-['Inter'] capitalize leading-tight">1,000N</div>
                      </div>
                    </div>
                  </div>
                  <div className="xs:max-w-[395px] max-w-[255px] min-h[316px] flex-col justify-center items-start gap-2.5 hidden xl:inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="107" height="112" viewBox="0 0 107 112" fill="none">
                      <path d="M107 0.816406C69 33.3164 25.3333 36.4621 0.5 37.8164V111.816H52.5C62.9 48.4337 89.5 19.2138 107 0.816406Z" fill="#2D353A" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="51" height="75" viewBox="0 0 51 75" fill="none">
                      <path d="M50.5 0.816406H0.5V74.8164H50.5C45.5 56.8164 46.5 17.8164 50.5 0.816406Z" fill="#2D353A" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="107" height="112" viewBox="0 0 107 112" fill="none">
                      <path d="M106.5 111.816C68.6784 79.3164 25.2167 76.1707 0.5 74.8164V0.816406H52.2559C62.607 64.1991 89.0822 93.419 106.5 111.816Z" fill="#2D353A" />
                    </svg>
                  </div>
                  <div className="xs:max-w-[395px] max-w-[255px] min-h[316px] xl:hidden flex-row justify-center items-start gap-2.5 inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="xs:block hidden" height="104" viewBox="0 0 389 104" fill="none">
                      <path d="M22 -3.20404e-05C22 40.5 15.5 67.5 -0.000305176 103.5C52.5 42.5 119 11.9481 195.5 11.9481C281.585 12.8047 342.5 47.5 388.5 103.5C378.5 82.5 366.667 25.8333 367 -1.87959e-06L22 -3.20404e-05Z" fill="#2D353A" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="xs:hidden" width="256" height="68" viewBox="0 0 256 68" fill="none">
                      <path d="M14.7754 2.47097e-05C14.7754 26.6087 10.9239 44.3478 0.75 68C35.2096 27.9227 78.8583 7.84997 129.071 7.84997C185.574 8.41276 225.557 31.2077 255.75 68C249.186 54.2029 240.775 26 240.775 2.15791e-05L14.7754 2.47097e-05Z" fill="#2D353A" />
                    </svg>
                  </div>
                  <div className="relative">
                  </div>
                </div>
                <img src={circle_graph} alt="circle_graph" className="max-w-[488px] w-[100%]" />
                <div className="justify-start items-center relative bottom-[60px] xs:bottom-[80px] xl:bottom-[unset] xl:right-[60px] flex xl:flex-row flex-col">
                  <div className="max-w-[395px] min-h[316px] flex-col justify-center items-end gap-2.5 hidden xl:inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" width="107" height="112" viewBox="0 0 107 112" fill="none">
                      <path d="M0.5 0.816397C38.3216 33.3164 81.7833 36.4621 106.5 37.8164L106.5 111.816L54.7441 111.816C44.393 48.4337 17.9178 19.2138 0.5 0.816397Z" fill="#2D353A" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="51" height="75" viewBox="0 0 51 75" fill="none">
                      <path d="M0.5 74.8164L50.5 74.8164L50.5 0.816406L0.500006 0.816402C5.5 18.8164 4.5 57.8164 0.5 74.8164Z" fill="#2D353A" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="107" height="112" viewBox="0 0 107 112" fill="none">
                      <path d="M0 111.816C38 79.3164 81.6667 76.1707 106.5 74.8164L106.5 0.816406L54.5 0.816402C44.1 64.1991 17.5 93.419 0 111.816Z" fill="#2D353A" />
                    </svg>
                  </div>
                  <div className="max-w-[395px] min-h[316px] xl:hidden flex-row justify-center items-start gap-2.5 inline-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="xs:block hidden" width="389" height="104" viewBox="0 0 389 104" fill="none">
                      <path d="M367 104C367 63.5 373.5 36.5 389 0.5C336.5 61.5 270 92.0519 193.5 92.0519C107.415 91.1953 46.5 56.5 0.5 0.5C10.5 21.5 22.3333 78.1667 22 104H367Z" fill="#2D353A" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="xs:hidden" width="256" height="68" viewBox="0 0 256 68" fill="none">
                      <path d="M240.775 68C240.775 41.3913 245.601 23.6522 255.775 0C221.316 40.0773 177.667 60.15 127.455 60.15C70.9514 59.5873 30.9684 36.7923 0.775391 0C7.33909 13.7971 14.7754 43 14.7754 68H240.775Z" fill="#2D353A" />
                    </svg>
                  </div>
                  <div className="xl:max-w-[379px] xs:max-w-[345px] max-w-[226px] min-h[316px] flex-col justify-center items-start gap-2.5 inline-flex">
                    <div className=" pr-4 xs:pr-[4px] xs:pt-0 pt-2 xl:h-[75px] min-h-[75px] w-full bg-[#2d353a] rounded-tl rounded-bl xl:border-b-0  border-b-4 xs:pb-0 xl:border-r-4 border-[#00A3FF] backdrop-blur-[7px] justify-between items-center  xs:gap-3.5 gap-5  xs:flex-row flex-col  inline-flex pb-4 pl-4">
                      <div className=" xs:pr-6 justify-start items-center gap-[21px] flex">

                        <div className="grow shrink basis-0 flex-col w-full xs:justify-center items-start inline-flex">
                          <div className="  justify-start items-center gap-[13px] inline-flex">
                            <div className="text-white xs:text-[32px] text-[24px] font-medium font-['Roboto'] capitalize leading-9">35%</div>
                            <div className="text-white xs:text-lg font-semibold font-['Inter'] capitalize leading-tight text-[15px]">Presale</div>
                          </div>
                          <div className="self-stretch text-[#ebeced] text-xs font-light font-['Roboto'] capitalize leading-none"> nimbi token will be sold to public (1,000-3,500 wallet holders)</div>
                        </div>
                      </div>
                      <div className="xs:flex-col justify-start items-end gap-[5px] inline-flex">
                        <div className="text-[#ebeced] text-xs font-normal font-['Inter'] uppercase leading-tight">Tokens</div>
                        <div className="text-[#ebeced] text-xs font-normal font-['Inter'] capitalize leading-tight">3,500N</div>
                      </div>
                    </div>
                    <div className="pr-4 xs:pr-[4px] xs:pt-0 pt-2 xl:h-[75px] min-h-[75px] w-full bg-[#2d353a] rounded-tl rounded-bl xl:border-b-0  border-b-4 xs:pb-0 xl:border-r-4 border-[#00FFD1] backdrop-blur-[7px] justify-between items-center xs:gap-3.5 gap-5  xs:flex-row flex-col  inline-flex pb-4 pl-4">
                      <div className="pr-6 justify-start items-center gap-[21px] flex">

                        <div className="grow shrink basis-0 flex-col justify-center items-start inline-flex">
                          <div className="  justify-start items-center gap-[13px] inline-flex">
                            <div className="text-white xs:text-[32px] text-[24px] font-medium font-['Roboto'] capitalize leading-9">15%</div>
                            <div className="text-white xs:text-lg font-semibold font-['Inter'] capitalize leading-tight text-[15px]">Private Investors</div>
                          </div>
                          <div className="self-stretch text-[#ebeced] text-xs font-light font-['Roboto'] capitalize leading-none">Reward the community with airdrops for early support.</div>
                        </div>
                      </div>
                      <div className="xs:flex-col justify-start items-end gap-[5px] inline-flex">
                        <div className="text-[#ebeced] text-xs font-normal font-['Inter'] uppercase leading-tight">Tokens</div>
                        <div className="text-[#ebeced] text-xs font-normal font-['Inter'] capitalize leading-tight">1,500N</div>
                      </div>
                    </div>
                    <div className="pr-4 xs:pr-[4px] xs:pt-0 pt-2 xl:h-[75px] min-h-[75px] w-full bg-[#2d353a] rounded-tl rounded-bl xl:border-b-0  border-b-4 xs:pb-0 xl:border-r-4 border-[#FD8A16] backdrop-blur-[7px] justify-between items-center xs:gap-3.5 gap-5  xs:flex-row flex-col  inline-flex pb-4 pl-4">
                      <div className="pr-6 justify-start items-center gap-[21px] flex">

                        <div className="grow shrink basis-0 flex-col justify-center items-start inline-flex">
                          <div className="  justify-start items-center gap-[13px] inline-flex">
                            <div className="text-white xs:text-[32px] text-[24px] font-medium font-['Roboto'] capitalize leading-9">15%</div>
                            <div className="text-white xs:text-lg font-semibold font-['Inter'] capitalize leading-tight text-[15px]">Exchange Listing</div>
                          </div>
                          <div className="self-stretch text-[#ebeced] text-xs font-light font-['Roboto'] capitalize leading-none">Reward the community with airdrops for early support.</div>
                        </div>
                      </div>
                      <div className="xs:flex-col justify-start items-end gap-[5px] inline-flex">
                        <div className="text-[#ebeced] text-xs font-normal font-['Inter'] uppercase leading-tight">Tokens</div>
                        <div className="text-[#ebeced] text-xs font-normal font-['Inter'] capitalize leading-tight">1,500N</div>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                  </div>
                </div>
              </div>
            </div>
            <div className="collectionRight grid lg:pt-[56px] w-full gap-y-[100px] lg:grid-cols-4 sm:grid-cols-2">
              <div className="">
                <div className="text-center text-white sm:text-[64px] text-[54px] font-bold font-['Cousine'] leading-[72px]">$NIMBI</div>
                <div className="text-center text-[#00ace6] text-2xl font-normal font-['Roboto'] leading-loose">Ticker</div>
              </div>
              <div className="">
                <div className="text-center text-white sm:text-[64px] text-[54px] font-bold font-['Cousine'] leading-[72px]">$25M</div>
                <div className="text-center text-[#00ace6] text-2xl font-normal font-['Roboto'] leading-loose">Circulating Supply</div>
              </div>
              <div className="">
                <div className="text-center text-white sm:text-[64px] text-[54px] font-bold font-['Cousine'] leading-[72px]">$300,000</div>
                <div className="text-center text-[#00ace6] text-2xl font-normal font-['Roboto'] leading-loose">Total Supply</div>
              </div>
              <div className="">
                <div className="text-center text-white sm:text-[64px] text-[54px] font-bold font-['Cousine'] leading-[72px]">7K+</div>
                <div className="text-center text-[#00ace6] text-2xl font-normal font-['Roboto'] leading-loose">Members</div>
              </div>
            </div>
          </div>
        </div>
        {/* Token Allocation Section End */}



        {/* Animation Section Start */}
        <div className="overflow-x-hidden z-20">
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
                <AnimationCard zIndex={90} title="Pre-Sale Phase" desc="2024 Q1" phase="2" status='incompleted' src={tick} icon={indicator} year="2024" list={["Community Building", "Partnerships and Collaborations", "Beta Lunch Web3 Video Game", "Create 10,000 NFT 3D Art Collection for erc-404", "Completing Private Sale", "Airdrop", "Crypto Dust Converter", "Main Web-page Development", "Pre-Sale start"]} />
                <AnimationCard zIndex={80} title="Pre-Sale Phase" desc="2024 Q2" phase="3" status='incompleted' src={vector} icon={indicator} year="2024" list={["Kazi Mediation", "Crypto Dust Lotto", "Nimbi VIP Wolfpack", "test smart contract and deploy dapps", "launch beta version for CDR", "start v2 of Crypto Dust Runner"]} />
                <AnimationCard zIndex={70} title="Pre-Sale Phase" desc="2024 Q3" phase="4" status='incompleted' src={vector} icon={indicator} year="2025" />
                <AnimationCard zIndex={60} title="Pre-Sale Phase" desc="2024 Q3" phase="5" status='incompleted' src={vector} icon={indicator} year="2026" />
              </div>
            </div>
          </div>
        </div>
        {/* Animation Section End */}


        {/*  */}
        <div className="grid w-screen grid-cols-1 gap-[70px] sm:gap-[120px]">
          <div className="w-screen overflow-hidden pt-[80px] sm:pt-[206px]">
            <div className="flex-col justify-start items-center gap-[76px] flex">
              <div className="text-center text-[#a1a7aa] text-[60px] leading-normal sm:text-[80px] font-medium font-roboto sm:leading-[80px]">Sink your fangs into these</div>
              <div className="self-stretch bg-[#1c2327] border-t border-b border-[#767f84] flex-col justify-start items-center flex">
                <div className="max-w-[1504px] w-full grid xl:grid-cols-3 grid-cols-1 justify-center">
                  <div className="flex justify-center">
                    <div className="grow shrink xl:mx-0 max-w-[501px] basis-0 px-[13px] py-[42px] bg-[#1c2327] xl:border-t-0 border-t border-l border-r border-[#767f84] flex-col justify-start items-center gap-4 inline-flex">
                      <img className="h-[92px]" src={fox} alt='fox' />
                      <div className="self-stretch flex-col justify-start items-center gap-2 flex">
                        <div className="text-center text-white text-xl font-bold font-['Inter'] leading-7">WOLFPACK OWNED</div>
                        <div className="max-w-[353px] text-center text-[#c0c4c6] text-sm font-normal font-['Roboto'] leading-tight">Have your say in the game’s development by voting via DAOs to decide how it unfolds.</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">

                    <div className="grow shrink xl:mx-0 max-w-[501px] basis-0 px-[13px] py-[42px] bg-[#1c2327] xl:border-t-0 border-t xl:border-l-0 border-l border-r xl:border-r-0 border-[#767f84] flex-col justify-start items-center gap-4 inline-flex">
                      <img className="w-[90px] h-[94px]" src={chain} alt='chain' />
                      <div className="self-stretch h-[117px] flex-col justify-start items-center gap-2 flex">
                        <div className="text-center text-white text-xl font-bold font-['Inter'] leading-7">SMARTER CONTRACTS</div>
                        <div className="w-[368px] text-center text-[#c0c4c6] text-sm font-normal font-['Roboto'] leading-tight">The Nimbi ecosystem leverages the blockchain so players can verify the fairness of game mechanics and transactions, transparently.<br /></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">

                    <div className="grow shrink xl:mx-0 max-w-[501px] basis-0 px-[13px] py-[42px] bg-[#1c2327] xl:border-t-0 border-t border-l border-r border-[#767f84] flex-col justify-start items-center gap-4 inline-flex">
                      <img className="w-[90px] h-[94px]" src={puppy} alt='puppy' />
                      <div className="h-[77px] flex-col justify-start items-center gap-2 flex">
                        <div className="text-center text-white text-xl font-bold font-['Inter'] leading-7">PUPPY POWER</div>
                        <div className="w-[387px] text-center text-[#c0c4c6] text-sm font-normal font-['Roboto'] leading-tight">Enter a new era of Wolfdog coins championed by two lovable mascots, Nimbi and Kazi. </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full flex flex-col items-center gap-10 xs:gap-[90px] justify-end relative">
              <div className="flex items-center justify-center w-full">
                <div className="w-full flex lg:flex-row gap-6 lg:gap-4 flex-col items-center px-5 xs:px-10 lg:px-[3.25rem] xl:px-[12rem] py-10 xs:py-[7rem] 2xl:px-[18rem] 3xl:px-[24rem] justify-between lg:py-16">
                  <div className="flex flex-col gap-[19px] lg:w-[50%] text-left min-h-[342px] justify-center w-full 3xl:w-[561px] relative">
                    <img src={logoMask} className='top-0 left-0 z-[1] sm:absolute opacity-50' alt="logoMask" />
                    <div className="relative z-[10] w-fit flex flex-col gap-[19px] items-center sm:ml-auto">
                      <p className="text-[36px] sm:text-[3.125rem] leading-tight font-semibold font-['Roboto_Condensed',sans-serif] ">Join the big dogs</p>
                      <p className='text-[21px] sm:text-[30px]'>🐺Become a Nimbi Wolf 🐺</p>
                    </div>
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
            </div>
          </div>
          <div className="w-screen px-8 py-[79px] bg-white flex-col justify-start items-center gap-5 inline-flex">
            <img className="w-[242px] h-[242px]" src={bluePen} alt="bluePen" />
            <div className="text-black text-6xl font-medium font-roboto leading-[60px]">Whitepaper</div>
            <div className="max-w-[1032px] text-center text-black text-base font-normal font-['Roboto'] capitalize leading-normal">Explore the Nimbi whitepaper and get an in-depth breakdown of the unique benefits, innovative features, and overall vision of the NIMBI ecosystem and its native token. This clear, concise, and expertly crafted informational report will help you understand exactly what sets NIMBI apart from other crypto projects.<br /><br />Dive into our educational white paper and find out why taking this journey with us is an absolute no-brainer!</div>
            <div className="px-3.5 py-2.5 hover:bg-[#242d32] duration-300 cursor-pointer bg-[#33bdeb] xs:w-fit w-full rounded justify-center items-start gap-2.5 inline-flex">
              <div className="px-1 justify-start items-start gap-2.5 flex">
                <div className="text-center text-white text-base font-medium font-['Inter'] leading-normal">Access The Whitepaper</div>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="min-h-[400px] max-w-[1200px] xs:px-8 px-4 flex-col justify-start items-start gap-[30px] inline-flex">
              <div className="justify-start h-[102px] items-center inline-flex relative">
                <div className="relative z-[10]  px-2.5 py-[5px] bg-[#5c666c] justify-center items-center gap-2.5 flex">
                  <div className="text-center text-white text-lg font-bold font-['Inter'] leading-7">Wolfperks</div>
                </div>
                <div className="w-[102px] h-[102px] absolute z-[1] -right-[55px]">
                  <img src={ellipse} alt="Ellipse" />
                </div>
              </div>
              <div className="justify-center items-center inline-flex lg:flex-row flex-col">
                <img className="w-[289px] h-[268px]" src={foxHead} alt="foxHead" />
                <div className="flex-col justify-start items-start gap-[47px] inline-flex">
                  <div className="text-[#a1a7aa] text-6xl font-medium font-roboto leading-[80px]">VIP Wolfpack for $NIMBI owners.</div>
                  <ul className="pl-4 text-white text-base font-normal font-['Roboto'] leading-[35px] list-disc list">
                    <li>
                      Private community with Devs, Alphas and team members.
                    </li>
                    <li>
                      Privileged news about updates and upcoming NFT/Gaming releases.
                    </li>
                    <li>
                      Additional benefits through roadmap activations.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-8 py-11 bg-[#242d32] border-t border-[#767f84] flex-col justify-start items-center gap-[43px] inline-flex">
            <div className="flex-col justify-start items-center gap-[21px] flex">
              <div className="max-w-[343px] text-center text-white text-6xl font-medium font-roboto leading-[93px]">The problem</div>
              <div className="text-white text-2xl font-medium font-roboto capitalize leading-loose">And how we can solve it</div>
            </div>
            <div className="self-stretch flex-col justify-start items-center gap-[19px] flex">
              <div className="max-w-[722px] text-center text-white text-base font-normal font-['Roboto'] leading-normal">The web is dominated by a handful of corporations that collect your data and sell your attention to the highest bidder. These same companies profiting from your attention also control your access to the platform and decide what content you see. Your personal feed, search results and recommendations are all expertly engineered to farm your attention span to maximize revenue for shareholders.<br /><br />They say “crypto is a scam”<br /><br />They say Web3 is a pipe dream<br /><br />They say the blockchain has no real utility.<br /><br />Of course they do—because whenever you’re not on these platforms, you’re not earning them advertising dollars. You don’t have a say in how they run their platform. You don’t even have a say in what you see on your feed. Of course, they’d want you to think a decentralized internet is a big joke. Becoming a billionaire is no laughing matter.<br /><br />Community has always been at the heart of the internet, but that’s being compromised by a few key players. With Nimbi, you always have a say.<br /><br />It’s a dog eat dog world. Whose Wolfpack do you want to be part of?<br /></div>
            </div>
          </div>

        </div>
        <Footer />

      </div >
    </>
  )
}

export default Home
