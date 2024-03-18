import React from 'react'
import Logo from '../../assests/NouzLogo.svg'
import Locationicon from '../../assests/footerlocate.svg'
import Mailicon from '../../assests/mailicon.svg'
import Phoneicon from '../../assests/phoneicon.svg'


function Footer() {
    return (
        <footer className='bg-[#041310] p-[50px]'>
            <div className='flex item-center justify-between mb-8' >
                <div>
                    <header className='flex items-center gap-2'>
                        <img src={Logo} alt="" />
                        <h2 className='text-[30px]'>NOUZ</h2>
                    </header>
                    <p  className='w-[250px] mt-6'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    </p>
                </div>
                <div>
                    <h1 className='text-[25px] font-[500]'>Our Services</h1>
                    <ul className='opacity-50 text-[18px] font-[500] leading-[2.5rem]'>
                        <li>Installation</li>
                        <li>Maintenance</li>
                        <li>Cleaning</li>
                        <li>Product</li>
                    </ul>
                </div>
                <div>
                    <h1 className='text-[25px] font-[500]'>Quick Links</h1>
                    <ul className='opacity-50 text-[18px] font-[500] leading-[2.5rem]'>
                        <li>
                            <a href="">Home</a>
                        </li>
                        <li>
                            <a href="">Contact</a>
                        </li>
                        <li>
                            <a href="">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="">Career</a>
                        </li>
                        <li>
                            <a href="">About Us</a>
                        </li>
                       
                    </ul>
                </div>
                <div>
                    <h1 className='text-[25px] font-[500]'>Get In Touch</h1>
                    <ul className='opacity-50 text-[18px] font-[500] leading-[2.5rem]'>
                        <li>
                            <div className='flex items-center gap-1'>
                                <img src={Locationicon} alt="" />
                                <p>Houston Avenue, United States.</p>
                            </div>
                        </li>
                        <li>
                            <div className='flex items-center gap-1'>
                                <img src={Mailicon} alt="" />
                                <p>Care.nouzenergy@gmail.com</p>
                            </div>
                        </li>
                        <li>
                            <div className='flex items-center gap-1'>
                                <img src={Phoneicon} alt="" />
                                <p>010 34589</p>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <section className='container mx-auto py-4' >
                <hr className='opacity-40'/>
            </section>
            <p className='text-center text-[15px]'>| 2024 © All rights reserved |</p>
        </footer>
    )
}

export default Footer
