import React, { useEffect, useState } from 'react'
import { logo, sound, animation, cross, mlogo } from '../../assets'
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom'
import Lottie from 'lottie-react'


export default function Navbar() {

    const navigate = useNavigate()

    const activateNavbar = () => {

        document.querySelector('.navbar').classList.add('active')

        setTimeout(() => {
            document.querySelector("nav").style.position = "static"
        }, 225)
    }

    const activeTab = (id) => {

        document.querySelectorAll("nav .active").forEach((tab) => {
            tab.classList.remove('active')
        })

        document.querySelectorAll(`#${id}`).forEach((tab) => {
            tab.classList.add('active')
        })

        document.querySelector("nav").style.position = "fixed"

    }

    let [path, setPath] = useState(window.location.pathname.split("/")[1])

    useEffect(() => {
        if (path) {
            document.querySelectorAll("nav active").forEach(tab => {
                tab.classList.remove('active')
            })
            document.querySelectorAll(`#${path}`).forEach(tab => {
                tab.classList.add('active')
            })
        }
        else {
            document.querySelectorAll(`nav #home`).forEach(tab => {
                tab.classList.add('active')
            })
        }
    }, [path])

    // const handleDropdown = (id) => {
    //     const screen = document.querySelector('.screen')
    //     const dropdown = document.querySelector(`#${id}`)

    //     screen.style.display = 'block'
    //     dropdown.style.display = 'block'

    //     screen.addEventListener('click', (e) => {
    //         if (!dropdown.contains(e.target)) {
    //             screen.style.display = 'none'
    //             dropdown.style.display = 'none'
    //         }
    //     })
    // }

    return (
        <nav className='fixed w-full border-b border-b-[#c4c0c8] bg-[#242d32] z-[500] '>
            <div className="nav flex items-center justify-between w-[90%] xlg:w-[80%] 4xl:w-[1504px] mx-auto z-40">

                <div className="lg:w-[10%] py-0 xl:py-4 flex items-center gap-2.5">
                    <button onClick={activateNavbar} id="navbar-toggler" className="block xl:hidden text-xl py-[0.9rem] text-white"  >☰</button>
                    <div onClick={() => { document.querySelector("nav .active").classList.remove('active') ; document.querySelector(`#home`).classList.add('active'); navigate("/") }}>
                        <div className="hidden md:block w-[5.65rem] h-[2rem]">
                            <img src={logo} className="w-full h-full object-fill" alt="" />
                        </div>
                        <div className="block md:hidden w-8 h-8">
                            <img src={mlogo} className="w-full h-full object-fill" alt="" />
                        </div>
                    </div>
                </div>
                <ul className="navbar bg-[url(./assets/mountainThumbnail.svg)] xl:bg-none bg-bottom bg-contain bg-no-repeat fixed h-screen w-screen top-0 left-0 z-[1000] flex flex-col gap-3 justify-center xl:relative xl:translate-x-0 xl:flex-row bg-[#242d32] xl:bg-transparent items-center xl:justify-end xl:gap-2 text-sm list-none xl:w-[44%] xl:h-full">
                    <div className="w-[80%] mx-auto flex justify-end xl:hidden">
                        <p className='text-right' onClick={() => { document.querySelector('.navbar').classList.remove('active'); document.querySelector('nav').style.position = "fixed" }}>
                            <img src={cross} className='w-8 h-8' alt="" />
                        </p>
                    </div>
                    <div className="w-[5rem] h-[1.9rem] my-2 xl:hidden">
                        <img src={logo} className="w-full h-full object-fill" alt="" />
                    </div>
                    <Link onClick={() => activeTab("home")} id="home" to="/" className='py-6 px-4 cursor-pointer hover:text-[#54c7ee] w-[17.125rem] text-center xl:w-max'>Home</Link>
                    <Link onClick={() => activeTab("about")} id="about" to="/about" className='py-6 px-4 cursor-pointer hover:text-[#54c7ee] w-[17.125rem] text-center xl:w-max '>About</Link>
                    <Link onClick={() => activeTab("team")} id="team" to="/team" className='py-6 px-4 cursor-pointer hover:text-[#54c7ee] w-[17.125rem] text-center xl:w-max '>Our Team</Link>
                    <Link onClick={() => activeTab("documents")} id="documents" to="/documents" className='py-6 px-4 cursor-pointer hover:text-[#54c7ee] w-[17.125rem] text-center xl:w-max '>Documents</Link>
                    <Link onClick={() => activeTab("faq")} id="faq" to="/faq" className='py-6 px-4 cursor-pointer hover:text-[#54c7ee] w-[17.125rem] text-center xl:w-max '>FAQ</Link>
                </ul>
                <div className="flex items-center gap-2 xlg:w-[40%] justify-end py-4">
                    <div className='w-[7.5rem] px-2 btn1 text-sm hidden xlg:block'>Collections</div>
                    <div className='w-[7.5rem] px-2 btn1 text-sm '>Presale</div>
                    <div className="dropdown">
                        <div className='dropdown-btn w-[7.5rem] px-2 btn hidden text-sm xlg:block'>Launch Dapps</div>
                        <div className="dropdown-content">
                            <div className="flex flex-col gap-3 w-[284px] bg-[#242d32] border border-[#5c666c] p-3.5 rounded-[4px]">
                                <p className='font-bold text-xs uppercase'>nimbi wolfpack</p>
                                <button className='btn w-full text-base text-center rounded-sm' onClick={e => e.preventDefault()}>
                                    <p className='font-["Inter",sans-serif] font-medium text-sm'>Crypto Dust Converter</p>
                                </button>
                                <button className='btn w-full text-base text-center rounded-sm' onClick={e => e.preventDefault()}>
                                    <p className='font-["Inter",sans-serif] font-medium text-sm'>Nimbi lottery</p>
                                </button>
                                <button className='btn w-full text-base text-center rounded-sm' onClick={e => e.preventDefault()}>
                                    <p className='font-["Inter",sans-serif] font-medium text-sm'>Nimbi Runner game</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[1.5rem]">
                        {<Lottie animationData={animation} loop={true} />}
                    </div>
                </div>
            </div>
        </nav>
    )
}

