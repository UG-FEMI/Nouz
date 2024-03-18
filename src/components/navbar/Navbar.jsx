import React from 'react'
import Logo from '../../assests/NouzLogo.svg'
import Button from '../buttons/Button'

function Navbar() {
  return (
    <nav className='flex items-center justify-between py-[15px]'>
      <header className='flex items-center gap-2'>
        <img src={Logo} alt="" />
        <h2 className='text-[30px]'>NOUZ</h2>
      </header>
      <ul className='flex gap-5 '>
        <li>Home</li>
        <li>Contacts</li>
        <li>About us</li>
        <li>Privacy policy</li>
      </ul>
      <div>
        <Button className='primary' text='Call Now'/>
      </div>
    </nav>
  )
}

export default Navbar
