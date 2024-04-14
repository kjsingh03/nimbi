import React, { useEffect, useRef } from 'react'
import './App.css'
import { Navbar, IntroCard, AuthorCard } from './components'
import { hero, svg1, svg2, svg3, author1, author2, author3, author4, author5, sec1, ellipse, goldWolf, bigEllipse, discord, icon, telegram, x, github, telegramIcon, discordIcon, twitterIcon, xIcon, vector, tick, mask, mountain } from './assets'
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
      xPercent: -100 * (sections.length - (width > 1024 ? 4 : 1)),
      ease: "none",
      scrollTrigger: {
        trigger: ".roadmap-container",
        pin: true,
        scrub: 1,
        end: "+=600",
      }
    });

    gsap.to('.mask', {
      width: "100%",
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top left",
        scrub: 1,
      }
    });

    if (width > 1280) {
      gsap.to('.collectionLeft', { x: -800, duration: 2, scrollTrigger: { trigger: '.collectionLeft', start: "bottom 95%", end: "start -50%", scrub: true, } })
      gsap.to('.collectionRight', { x: 875, duration: 2, scrollTrigger: { trigger: '.collectionRight', start: "bottom 95%", end: "start -50%", scrub: true } })
    }

  }, { dependencies: [width], scope: main });

  return (
    <div className=''>

      <Navbar />
      <div className="z-0 capitalize py-12" ref={main}>

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

        <div className="bg-[url(./assets/whaleLeft.png)] whale bg-no-repeat">

          <div className="overflow-hidden">
            <div className="flex xl:flex-row flex-col justify-between w-[80%] xl:w-[90%] 2xl:w-[80%] mx-auto pt-16 md:pt-[8rem] h-[128rem] xs:h-[73rem] sm:h-[78rem] md:h-[66rem] lg:h-[auto]">
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
          <div className="roadmap-container bg-[url(./assets/Roadmap.png),url(./assets/bigEllipse.png)] bg-bottom-bottom-center bg-no-repeat-no-repeat-repeat bg-[contain,contain,cover] xl:bg-[contain,contain,contain] flex flex-col gap-6 sm:gap-12 pt-16 sm:pt-8 xl:pt-[6rem]">

            <div className="flex flex-col gap-4 sm:gap-12 w-[80%] mx-auto">

              <div className="relative">
                <div className="btn bg-[#5c666c] w-max font-semibold text-[0.9rem] z-10"><p>Roadmap</p></div>
                <img src={ellipse} className='absolute -top-6 left-[4rem] w-[5rem] -z-0' alt="" />
              </div>

              <p className='text-[0.6rem] sm:text-[0.8rem] w-[70%]'>We follow these roadmap for launching the Nimbi ecosystem. We may experience certain setbacks while developing the whole Nimbi ecosystem, but our team has a right attitude to stick to the course, no matter what!
              </p>
            </div>

            <div className="wrapper">
              <div className="container scrollx ">
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
                </svg> 
                <img src={mask} alt="" /> 
                <section className='absolute -top-10'>
                  <div className="w-[120rem] relative">
                    <img src={mask} className='absolute top-[13rem] w-[10rem]' alt="" />
                  </div>
                </section>*/}
                <section>
                  <div className="phase">
                    <ul className='list-none z-40 text-xs flex flex-col gap-1 lg:w-[90%] xl:w-[70%] px-12 xs:px-6 sm:px-6 md:px-0 md:mx-auto'>
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
                    <div className="w-[250rem] relative">
                      {/* <img src={mask} className='absolute -top-12 w-[105rem] left-[110rem]  z-50' alt="" /> */}
                      <svg className='absolute -top-12 w-[105rem] left-[110rem] z-50' viewBox="0 0 1920 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="141.001" cy="57.1469" r="40.5" transform="rotate(97.4043 141.001 57.1469)" stroke="#8AD9F4" style={{strokeDasharray:"2 13"}} />
                        <g>
                          {/* <path d="M-400 58.23H1900" stroke="#33BDEB" style={{strokeWidth:3}} /> */}
                          <rect class="mask" y="55" height="5" fill="#33BDEB" />
                        </g>
                        <filter id="filter1_d_1261_1133" className='mask' x="0" y="46.4999" height="23.0001" filterUnits="userSpaceOnUse" style={{colorInterpolation:"sRGB"}}>
                          <feFlood style={{floodOpacity:0}} result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="5" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.64 0 0 0 0 1 0 0 0 1 0" />
                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1261_1133" />
                          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1261_1133" result="shape" />
                        </filter>
                        <rect x="125" y="41.1471" width="32" height="32" rx="16" fill="#00ACE6" />
                        <path d="M135.167 57.1471L139.333 61.3137L146.833 52.9804" stroke="white" style={{strokeLinejoin:"round",strokeWidth:2,strokeLinecap:"round"}}  />
                        <rect x="565" y="41.1471" width="32" height="32" rx="16" fill="#334047" />
                        <path d="M589.055 55.7869C589.083 55.7377 589.103 55.6842 589.114 55.6286L589.739 52.2953C589.778 52.0743 589.729 51.8465 589.601 51.6621C589.472 51.4777 589.276 51.3517 589.055 51.3119C588.834 51.2722 588.606 51.3218 588.422 51.45C588.238 51.5781 588.112 51.7743 588.072 51.9953L587.764 53.6619C587.07 52.3952 586.033 51.3496 584.773 50.6451C583.512 49.9406 582.078 49.6057 580.636 49.6787C579.193 49.7518 577.801 50.2299 576.618 51.0583C575.435 51.8866 574.509 53.0316 573.947 54.3619C573.864 54.5664 573.866 54.7952 573.952 54.9983C574.038 55.2013 574.201 55.3621 574.405 55.4453C574.507 55.4874 574.616 55.5089 574.726 55.5087C574.836 55.5084 574.945 55.4863 575.047 55.4437C575.148 55.4011 575.24 55.3388 575.317 55.2604C575.395 55.182 575.456 55.0891 575.497 54.9869C575.946 53.8843 576.717 52.9432 577.711 52.2873C578.705 51.6314 579.873 51.2914 581.064 51.3119C582.116 51.307 583.152 51.5804 584.065 52.1043C584.978 52.6281 585.736 53.384 586.264 54.2953L584.889 54.0703C584.779 54.0528 584.667 54.057 584.559 54.0827C584.452 54.1084 584.35 54.1551 584.26 54.2201C584.17 54.2851 584.094 54.3671 584.036 54.4615C583.978 54.5559 583.939 54.6608 583.922 54.7703C583.904 54.8797 583.909 54.9915 583.934 55.0993C583.96 55.2071 584.007 55.3088 584.072 55.3986C584.137 55.4884 584.219 55.5644 584.313 55.6225C584.408 55.6805 584.512 55.7194 584.622 55.7369L588.164 56.3286H588.297C588.394 56.3298 588.49 56.3128 588.58 56.2786C588.611 56.267 588.639 56.2501 588.664 56.2286C588.723 56.2064 588.779 56.1755 588.83 56.1369L588.897 56.0536C588.94 56.0132 588.979 55.9685 589.014 55.9203C589.034 55.8781 589.048 55.8332 589.055 55.7869Z" fill="#EBECED" />
                        <path d="M587.572 58.8703C587.47 58.8284 587.36 58.8073 587.25 58.8081C587.139 58.8089 587.03 58.8317 586.928 58.8751C586.827 58.9186 586.735 58.9818 586.658 59.061C586.581 59.1403 586.521 59.2341 586.48 59.3369C586.028 60.428 585.259 61.3584 584.273 62.0076C583.286 62.6569 582.128 62.9951 580.947 62.9786C579.894 62.9835 578.859 62.7102 577.946 62.1863C577.032 61.6624 576.274 60.9066 575.747 59.9953L577.122 60.2203H577.255C577.476 60.238 577.695 60.1671 577.864 60.0233C578.033 59.8796 578.138 59.6746 578.155 59.4536C578.173 59.2326 578.102 59.0136 577.958 58.8448C577.814 58.6761 577.61 58.5713 577.389 58.5536L573.847 57.9786C573.756 57.9619 573.663 57.9619 573.572 57.9786H573.505C573.411 58.0037 573.321 58.043 573.239 58.0953C573.182 58.1387 573.132 58.1891 573.089 58.2453L573.014 58.3286C572.988 58.3788 572.968 58.432 572.955 58.4869C572.926 58.5295 572.906 58.5778 572.897 58.6286L572.272 61.9619C572.245 62.0727 572.241 62.1878 572.261 62.3C572.28 62.4123 572.323 62.5194 572.385 62.6147C572.447 62.71 572.529 62.7914 572.624 62.854C572.719 62.9166 572.826 62.959 572.939 62.9786H573.089C573.286 62.9818 573.478 62.9149 573.631 62.7898C573.783 62.6646 573.886 62.4894 573.922 62.2953L574.23 60.6286C574.923 61.8957 575.959 62.9418 577.219 63.647C578.48 64.3522 579.913 64.6879 581.355 64.6157C582.798 64.5435 584.191 64.0663 585.374 63.2387C586.558 62.4112 587.484 61.2669 588.047 59.9369C588.123 59.7324 588.116 59.506 588.027 59.3065C587.939 59.107 587.775 58.9504 587.572 58.8703Z" fill="#EBECED" />
                        <rect x="1005" y="41.1471" width="32" height="32" rx="16" fill="#334047" />
                        <path d="M1029.06 55.7869C1029.08 55.7377 1029.1 55.6842 1029.11 55.6286L1029.74 52.2953C1029.78 52.0743 1029.73 51.8465 1029.6 51.6621C1029.47 51.4777 1029.28 51.3517 1029.06 51.3119C1028.83 51.2722 1028.61 51.3218 1028.42 51.45C1028.24 51.5781 1028.11 51.7743 1028.07 51.9953L1027.76 53.6619C1027.07 52.3952 1026.03 51.3496 1024.77 50.6451C1023.51 49.9406 1022.08 49.6057 1020.64 49.6787C1019.19 49.7518 1017.8 50.2299 1016.62 51.0583C1015.43 51.8866 1014.51 53.0316 1013.95 54.3619C1013.86 54.5664 1013.87 54.7952 1013.95 54.9983C1014.04 55.2013 1014.2 55.3621 1014.41 55.4453C1014.51 55.4874 1014.62 55.5089 1014.73 55.5087C1014.84 55.5084 1014.95 55.4863 1015.05 55.4437C1015.15 55.4011 1015.24 55.3388 1015.32 55.2604C1015.39 55.182 1015.46 55.0891 1015.5 54.9869C1015.95 53.8843 1016.72 52.9432 1017.71 52.2873C1018.7 51.6314 1019.87 51.2914 1021.06 51.3119C1022.12 51.307 1023.15 51.5804 1024.06 52.1043C1024.98 52.6281 1025.74 53.384 1026.26 54.2953L1024.89 54.0703C1024.78 54.0528 1024.67 54.057 1024.56 54.0827C1024.45 54.1084 1024.35 54.1551 1024.26 54.2201C1024.17 54.2851 1024.09 54.3671 1024.04 54.4615C1023.98 54.5559 1023.94 54.6608 1023.92 54.7703C1023.9 54.8797 1023.91 54.9915 1023.93 55.0993C1023.96 55.2071 1024.01 55.3088 1024.07 55.3986C1024.14 55.4884 1024.22 55.5644 1024.31 55.6225C1024.41 55.6805 1024.51 55.7194 1024.62 55.7369L1028.16 56.3286H1028.3C1028.39 56.3298 1028.49 56.3128 1028.58 56.2786C1028.61 56.267 1028.64 56.2501 1028.66 56.2286C1028.72 56.2064 1028.78 56.1755 1028.83 56.1369L1028.9 56.0536C1028.94 56.0132 1028.98 55.9685 1029.01 55.9203C1029.03 55.8781 1029.05 55.8332 1029.06 55.7869Z" fill="#EBECED" />
                        <path d="M1027.57 58.8703C1027.47 58.8284 1027.36 58.8073 1027.25 58.8081C1027.14 58.8089 1027.03 58.8317 1026.93 58.8751C1026.83 58.9186 1026.73 58.9818 1026.66 59.061C1026.58 59.1403 1026.52 59.2341 1026.48 59.3369C1026.03 60.428 1025.26 61.3584 1024.27 62.0076C1023.29 62.6569 1022.13 62.9951 1020.95 62.9786C1019.89 62.9835 1018.86 62.7102 1017.95 62.1863C1017.03 61.6624 1016.27 60.9066 1015.75 59.9953L1017.12 60.2203H1017.26C1017.48 60.238 1017.7 60.1671 1017.86 60.0233C1018.03 59.8796 1018.14 59.6746 1018.16 59.4536C1018.17 59.2326 1018.1 59.0136 1017.96 58.8448C1017.81 58.6761 1017.61 58.5713 1017.39 58.5536L1013.85 57.9786C1013.76 57.9619 1013.66 57.9619 1013.57 57.9786H1013.51C1013.41 58.0037 1013.32 58.043 1013.24 58.0953C1013.18 58.1387 1013.13 58.1891 1013.09 58.2453L1013.01 58.3286C1012.99 58.3788 1012.97 58.432 1012.96 58.4869C1012.93 58.5295 1012.91 58.5778 1012.9 58.6286L1012.27 61.9619C1012.25 62.0727 1012.24 62.1878 1012.26 62.3C1012.28 62.4123 1012.32 62.5194 1012.38 62.6147C1012.45 62.71 1012.53 62.7914 1012.62 62.854C1012.72 62.9166 1012.83 62.959 1012.94 62.9786H1013.09C1013.29 62.9818 1013.48 62.9149 1013.63 62.7898C1013.78 62.6646 1013.89 62.4894 1013.92 62.2953L1014.23 60.6286C1014.92 61.8957 1015.96 62.9418 1017.22 63.647C1018.48 64.3522 1019.91 64.6879 1021.36 64.6157C1022.8 64.5435 1024.19 64.0663 1025.37 63.2387C1026.56 62.4112 1027.48 61.2669 1028.05 59.9369C1028.12 59.7324 1028.12 59.506 1028.03 59.3065C1027.94 59.107 1027.77 58.9504 1027.57 58.8703Z" fill="#EBECED" />
                        <rect x="1445" y="41.1471" width="32" height="32" rx="16" fill="#334047" />
                        <path d="M1469.06 55.7869C1469.08 55.7377 1469.1 55.6842 1469.11 55.6286L1469.74 52.2953C1469.78 52.0743 1469.73 51.8465 1469.6 51.6621C1469.47 51.4777 1469.28 51.3517 1469.06 51.3119C1468.83 51.2722 1468.61 51.3218 1468.42 51.45C1468.24 51.5781 1468.11 51.7743 1468.07 51.9953L1467.76 53.6619C1467.07 52.3952 1466.03 51.3496 1464.77 50.6451C1463.51 49.9406 1462.08 49.6057 1460.64 49.6787C1459.19 49.7518 1457.8 50.2299 1456.62 51.0583C1455.43 51.8866 1454.51 53.0316 1453.95 54.3619C1453.86 54.5664 1453.87 54.7952 1453.95 54.9983C1454.04 55.2013 1454.2 55.3621 1454.41 55.4453C1454.51 55.4874 1454.62 55.5089 1454.73 55.5087C1454.84 55.5084 1454.95 55.4863 1455.05 55.4437C1455.15 55.4011 1455.24 55.3388 1455.32 55.2604C1455.39 55.182 1455.46 55.0891 1455.5 54.9869C1455.95 53.8843 1456.72 52.9432 1457.71 52.2873C1458.7 51.6314 1459.87 51.2914 1461.06 51.3119C1462.12 51.307 1463.15 51.5804 1464.06 52.1043C1464.98 52.6281 1465.74 53.384 1466.26 54.2953L1464.89 54.0703C1464.78 54.0528 1464.67 54.057 1464.56 54.0827C1464.45 54.1084 1464.35 54.1551 1464.26 54.2201C1464.17 54.2851 1464.09 54.3671 1464.04 54.4615C1463.98 54.5559 1463.94 54.6608 1463.92 54.7703C1463.9 54.8797 1463.91 54.9915 1463.93 55.0993C1463.96 55.2071 1464.01 55.3088 1464.07 55.3986C1464.14 55.4884 1464.22 55.5644 1464.31 55.6225C1464.41 55.6805 1464.51 55.7194 1464.62 55.7369L1468.16 56.3286H1468.3C1468.39 56.3298 1468.49 56.3128 1468.58 56.2786C1468.61 56.267 1468.64 56.2501 1468.66 56.2286C1468.72 56.2064 1468.78 56.1755 1468.83 56.1369L1468.9 56.0536C1468.94 56.0132 1468.98 55.9685 1469.01 55.9203C1469.03 55.8781 1469.05 55.8332 1469.06 55.7869Z" fill="#EBECED" />
                        <path d="M1467.57 58.8703C1467.47 58.8284 1467.36 58.8073 1467.25 58.8081C1467.14 58.8089 1467.03 58.8317 1466.93 58.8751C1466.83 58.9186 1466.73 58.9818 1466.66 59.061C1466.58 59.1403 1466.52 59.2341 1466.48 59.3369C1466.03 60.428 1465.26 61.3584 1464.27 62.0076C1463.29 62.6569 1462.13 62.9951 1460.95 62.9786C1459.89 62.9835 1458.86 62.7102 1457.95 62.1863C1457.03 61.6624 1456.27 60.9066 1455.75 59.9953L1457.12 60.2203H1457.26C1457.48 60.238 1457.7 60.1671 1457.86 60.0233C1458.03 59.8796 1458.14 59.6746 1458.16 59.4536C1458.17 59.2326 1458.1 59.0136 1457.96 58.8448C1457.81 58.6761 1457.61 58.5713 1457.39 58.5536L1453.85 57.9786C1453.76 57.9619 1453.66 57.9619 1453.57 57.9786H1453.51C1453.41 58.0037 1453.32 58.043 1453.24 58.0953C1453.18 58.1387 1453.13 58.1891 1453.09 58.2453L1453.01 58.3286C1452.99 58.3788 1452.97 58.432 1452.96 58.4869C1452.93 58.5295 1452.91 58.5778 1452.9 58.6286L1452.27 61.9619C1452.25 62.0727 1452.24 62.1878 1452.26 62.3C1452.28 62.4123 1452.32 62.5194 1452.38 62.6147C1452.45 62.71 1452.53 62.7914 1452.62 62.854C1452.72 62.9166 1452.83 62.959 1452.94 62.9786H1453.09C1453.29 62.9818 1453.48 62.9149 1453.63 62.7898C1453.78 62.6646 1453.89 62.4894 1453.92 62.2953L1454.23 60.6286C1454.92 61.8957 1455.96 62.9418 1457.22 63.647C1458.48 64.3522 1459.91 64.6879 1461.36 64.6157C1462.8 64.5435 1464.19 64.0663 1465.37 63.2387C1466.56 62.4112 1467.48 61.2669 1468.05 59.9369C1468.12 59.7324 1468.12 59.506 1468.03 59.3065C1467.94 59.107 1467.77 58.9504 1467.57 58.8703Z" fill="#EBECED" />
                        <rect x="1885" y="41.1471" width="32" height="32" rx="16" fill="#334047" />
                        <path d="M1909.05 55.7869C1909.08 55.7377 1909.1 55.6842 1909.11 55.6286L1909.74 52.2953C1909.78 52.0743 1909.73 51.8465 1909.6 51.6621C1909.47 51.4777 1909.28 51.3517 1909.05 51.3119C1908.83 51.2722 1908.61 51.3218 1908.42 51.45C1908.24 51.5781 1908.11 51.7743 1908.07 51.9953L1907.76 53.6619C1907.07 52.3952 1906.03 51.3496 1904.77 50.6451C1903.51 49.9406 1902.08 49.6057 1900.64 49.6787C1899.19 49.7518 1897.8 50.2299 1896.62 51.0583C1895.43 51.8866 1894.51 53.0316 1893.95 54.3619C1893.86 54.5664 1893.87 54.7952 1893.95 54.9983C1894.04 55.2013 1894.2 55.3621 1894.4 55.4453C1894.51 55.4874 1894.62 55.5089 1894.73 55.5087C1894.84 55.5084 1894.94 55.4863 1895.05 55.4437C1895.15 55.4011 1895.24 55.3388 1895.32 55.2604C1895.39 55.182 1895.46 55.0891 1895.5 54.9869C1895.95 53.8843 1896.72 52.9432 1897.71 52.2873C1898.7 51.6314 1899.87 51.2914 1901.06 51.3119C1902.12 51.307 1903.15 51.5804 1904.06 52.1043C1904.98 52.6281 1905.74 53.384 1906.26 54.2953L1904.89 54.0703C1904.78 54.0528 1904.67 54.057 1904.56 54.0827C1904.45 54.1084 1904.35 54.1551 1904.26 54.2201C1904.17 54.2851 1904.09 54.3671 1904.04 54.4615C1903.98 54.5559 1903.94 54.6608 1903.92 54.7703C1903.9 54.8797 1903.91 54.9915 1903.93 55.0993C1903.96 55.2071 1904.01 55.3088 1904.07 55.3986C1904.14 55.4884 1904.22 55.5644 1904.31 55.6225C1904.41 55.6805 1904.51 55.7194 1904.62 55.7369L1908.16 56.3286H1908.3C1908.39 56.3298 1908.49 56.3128 1908.58 56.2786C1908.61 56.267 1908.64 56.2501 1908.66 56.2286C1908.72 56.2064 1908.78 56.1755 1908.83 56.1369L1908.9 56.0536C1908.94 56.0132 1908.98 55.9685 1909.01 55.9203C1909.03 55.8781 1909.05 55.8332 1909.05 55.7869Z" fill="#EBECED" />
                        <path d="M1907.57 58.8703C1907.47 58.8284 1907.36 58.8073 1907.25 58.8081C1907.14 58.8089 1907.03 58.8317 1906.93 58.8751C1906.83 58.9186 1906.73 58.9818 1906.66 59.061C1906.58 59.1403 1906.52 59.2341 1906.48 59.3369C1906.03 60.428 1905.26 61.3584 1904.27 62.0076C1903.29 62.6569 1902.13 62.9951 1900.95 62.9786C1899.89 62.9835 1898.86 62.7102 1897.95 62.1863C1897.03 61.6624 1896.27 60.9066 1895.75 59.9953L1897.12 60.2203H1897.25C1897.48 60.238 1897.69 60.1671 1897.86 60.0233C1898.03 59.8796 1898.14 59.6746 1898.15 59.4536C1898.17 59.2326 1898.1 59.0136 1897.96 58.8448C1897.81 58.6761 1897.61 58.5713 1897.39 58.5536L1893.85 57.9786C1893.76 57.9619 1893.66 57.9619 1893.57 57.9786H1893.5C1893.41 58.0037 1893.32 58.043 1893.24 58.0953C1893.18 58.1387 1893.13 58.1891 1893.09 58.2453L1893.01 58.3286C1892.99 58.3788 1892.97 58.432 1892.95 58.4869C1892.93 58.5295 1892.91 58.5778 1892.9 58.6286L1892.27 61.9619C1892.24 62.0727 1892.24 62.1878 1892.26 62.3C1892.28 62.4123 1892.32 62.5194 1892.38 62.6147C1892.45 62.71 1892.53 62.7914 1892.62 62.854C1892.72 62.9166 1892.83 62.959 1892.94 62.9786H1893.09C1893.29 62.9818 1893.48 62.9149 1893.63 62.7898C1893.78 62.6646 1893.89 62.4894 1893.92 62.2953L1894.23 60.6286C1894.92 61.8957 1895.96 62.9418 1897.22 63.647C1898.48 64.3522 1899.91 64.6879 1901.36 64.6157C1902.8 64.5435 1904.19 64.0663 1905.37 63.2387C1906.56 62.4112 1907.48 61.2669 1908.05 59.9369C1908.12 59.7324 1908.12 59.506 1908.03 59.3065C1907.94 59.107 1907.77 58.9504 1907.57 58.8703Z" fill="#EBECED" />
                        <defs>
                        </defs>
                      </svg>
                      <img src={mountain} className='absolute opacity-80 -top-[20rem] sm:-top-[38rem] w-full left-[35rem] h-[20rem] sm:h-[38rem] z-[35]' alt="" />
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

                    <ul className='list-none z-40  text-xs flex flex-col gap-1 lg:w-[90%] xl:w-[70%] px-12 xs:px-6 sm:px-6 md:px-0 md:mx-auto'>
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

                    <ul className='list-none z-40  text-xs flex flex-col gap-1 lg:w-[90%] xl:w-[70%] px-12 xs:px-6 sm:px-6 md:px-0 md:mx-auto'>
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

                    <ul className='list-none z-40  text-xs flex flex-col gap-1 lg:w-[90%] xl:w-[70%] px-12 xs:px-6 sm:px-6 md:px-0 md:mx-auto'>
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

                    <ul className='list-none z-40 text-xs flex flex-col gap-1 lg:w-[90%] xl:w-[70%] px-12 xs:px-6 sm:px-6 md:px-0 md:mx-auto'>
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
