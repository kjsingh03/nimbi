import React, { useEffect, useState } from 'react'
import { logo, sound,animation } from '../../assets'
import '../../App.css'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'


function Navbar() {

    const activateNavbar = () => {
        const toggler = document.getElementById('navbar-toggler')
        const navbar = document.querySelector('.navbar')

        if (navbar?.classList.contains('active'))
            navbar.classList.remove('active')
        else
            navbar.classList.add('active')
    }

    const activeTab = (e) => {
        const active = document.querySelectorAll("nav .active")

        if(active){
            active.forEach((tab) => {
                tab.classList.remove('active')
            })
        }

        e.target.classList.add('active')

    }

    let [path, setPath] = useState(window.location.pathname.split("/")[1])

    useEffect(() => {

        if(path){
            const activeTabs = document.querySelectorAll("nav active")
    
            activeTabs.forEach(tab => {
                tab.classList.remove('active')
            })
    
            const tabs = document.querySelectorAll(`#${path}`)
    
            tabs.forEach(tab => {
                tab.classList.add('active')
            })
        }
        else{
            const tabs = document.querySelectorAll(`#home`)
    
            tabs.forEach(tab => {
                tab.classList.add('active')
            })
            
        }

    }, [path])

    // const {View} = useLottie({animationData:animation,loop:true})

    return (
        <nav className='fixed w-full border-b border-b-[#c4c0c8] bg-[#242d32] z-50 '>
            <div className="flex items-center justify-between sm:w-[90%] lg:w-[80%] mx-auto px-4">

                <button onClick={activateNavbar} id="navbar-toggler" className="block lg:hidden text-xl py-[0.9rem] text-white"  >☰</button>

                <div className="flex overflow-hidden">
                    <ul className="navbar flex flex-col gap-3 transition-all duration-200 ease-in px-8 py-16 lg:shadow-none shadow-xl z-[100] fixed left-0 top-0 bg-[#242d32] text-center w-screen h-screen" id="navbar">
                        <p className='text-right' onClick={()=>document.querySelector('.navbar').classList.remove('active')}>☰</p>
                        <Link onClick={activeTab} id="home" to="/" className='py-5 px-4 cursor-pointer hover:text-[#54c7ee]'>Home</Link>
                        <Link onClick={activeTab} id="about" to="/about" className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] '>About</Link>
                        <Link onClick={activeTab} id="team" to="/team" className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] '>Our Team</Link>
                        <Link onClick={activeTab} id="documents" to="/documents" className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] '>Documents</Link>
                        <Link onClick={activeTab} id="faq" to="/faq" className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] '>FAQ</Link>
                    </ul>
                </div>

                <div className="lg:w-[10%]">
                    <Link to="/">
                        <div className="w-[5rem] h-[1.9rem]">
                            <img src={logo} className="w-full h-full object-fill" alt="" />
                        </div>
                    </Link>
                </div>
                <ul className="hidden lg:flex items-center justify-center gap-2 text-sm list-none w-[54%]">
                    <Link onClick={activeTab} id="home" to="/" className='py-5 px-4 cursor-pointer hover:text-[#54c7ee]'>Home</Link>
                    <Link onClick={activeTab} id="about" to="/about" className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] '>About</Link>
                    <Link onClick={activeTab} id="team" to="/team" className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] '>Our Team</Link>
                    <Link onClick={activeTab} id="documents" to="/documents" className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] '>Documents</Link>
                    <Link onClick={activeTab} id="faq" to="/faq" className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] '>FAQ</Link>
                </ul>
                <div className="hidden lg:flex items-center gap-2 w-[36%] justify-end">
                    <div className='btn1 bg-transparent rounded-sm border border-[#c4c0c8] px-8 w-[8rem] text-center'>Collections</div>
                    <div className='btn1 bg-transparent rounded-sm border border-[#c4c0c8] px-8 w-[8rem] text-center'>Presale</div>
                    <div className="w-[1.5rem]">
                        {<Lottie animationData={animation} loop={true} />}
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
