import React from 'react'
import { logo, sound } from '../../assets'
import '../../App.css'
import { Link } from 'react-router-dom'

function Navbar() {

    const activateNavbar = () => {
        const toggler = document.getElementById('navbar-toggler')
        const navbar = document.querySelector('.navbar')

        console.log('click')

        if (navbar.classList.contains('active'))
            navbar.classList.remove('active')
        else
            navbar.classList.add('active')

        document.querySelector('.navbar ~ .black').addEventListener('click', () => {
            navbar.classList.remove('active')
        })
    }

    return (
        <nav className='fixed w-full border-b border-b-[#c4c0c8] bg-[#242d32] z-50 '>
            <div className="flex items-center justify-between sm:w-[90%] lg:w-[80%] mx-auto px-4">

                <button onClick={activateNavbar} id="navbar-toggler" className="block lg:hidden text-xl py-[0.9rem] text-white"  >☰</button>

                <div className="flex overflow-hidden">
                    <ul className="navbar transition-all duration-200 ease-in px-8 py-16 lg:shadow-none shadow-xl z-[100] fixed left-0 top-0 bg-[#242d32] w-[16rem] h-screen" id="navbar">
                        <Link to="/" className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] '>Home</Link>
                        <Link to="/about" className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] '>About</Link>
                        <Link to="/team" className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] '>Our Team</Link>
                        <Link to="/documents" className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] '>Documents</Link>
                        <Link to="/faq" onClick={()=>console.log('click')} className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] '>FAQ</Link>
                    </ul>
                    <div className="black fixed translate-x-[-100vw] right-0 w-[calc(100vw-16rem)] top-0 z-40 bg-[#0000005b] h-screen"></div>
                </div>

                <div className="lg:w-[10%]">
                    <div className="w-[4.5rem] h-[1.6rem]">
                        <img src={logo} className="w-full h-full object-fill" alt="" />
                    </div>
                </div>
                <ul className="hidden lg:flex items-center justify-center gap-2 text-xs list-none w-[54%]">
                    <Link to="/" className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] active'>Home</Link>
                    <Link to="/about" className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] '>About</Link>
                    <Link to="/team" className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] '>Our Team</Link>
                    <Link to="/documents" className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] '>Documents</Link>
                    <Link to="/faq" className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] '>FAQ</Link>
                </ul>
                <div className="hidden lg:flex items-center gap-2 w-[36%] justify-end">
                    <div className='btn1 bg-transparent rounded-sm border border-[#c4c0c8] px-8 w-[8rem] text-center'>Collections</div>
                    <div className='btn1 bg-transparent rounded-sm border border-[#c4c0c8] px-8 w-[8rem] text-center'>Presale</div>
                    <div className="w-[2.5rem]">
                    <img src={sound} alt="" className='w-full h-full object-cover' />
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
