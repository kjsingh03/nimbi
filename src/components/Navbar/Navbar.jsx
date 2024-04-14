import React from 'react'
import { logo } from '../../assets'
import '../../App.css'

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
                        <li className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] '>Home</li>
                        <li className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] '>About</li>
                        <li className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] '>Our Team</li>
                        <li className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] '>Documents</li>
                        <li className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] '>FAQ</li>
                    </ul>
                    <div className="black fixed translate-x-[-100vw] right-0 w-[calc(100vw-16rem)] top-0 z-40 bg-[#0000005b] h-screen"></div>
                </div>

                <div className="flex items-center justify-between gap-2">
                    <div className="w-[5rem] h-[2rem]">
                        <img src={logo} className="w-full h-full object-fill" alt="" />
                    </div>
                </div>



                <ul className="hidden lg:flex items-center justify-end gap-2 text-xs list-none">
                    <li className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] active'>Home</li>
                    <li className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] '>About</li>
                    <li className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] '>Our Team</li>
                    <li className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] '>Documents</li>
                    <li className='py-5 px-4 cursor-pointer hover:text-[#54c7ee] '>FAQ</li>
                </ul>
                <div className="hidden lg:flex items-center gap-2 ">
                    <div className='btn bg-transparent rounded-sm border border-[#c4c0c8] px-8'>Collections</div>
                    <div className='btn bg-transparent rounded-sm border border-[#c4c0c8] px-8'>Presale</div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
