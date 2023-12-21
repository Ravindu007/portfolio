import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {motion as m} from 'framer-motion'

const Navbar = () => {

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }
  

  const [menu, setMenu]= useState(false)

  const showMenu = () => {
      setMenu(!menu)
  }

  return (
  <>
   <nav className='hidden md:flex md:justify-between md:items-center md:mx-auto md:px-2 md:py-2 md:w-[92%] fixed z-[100] bg-color2'>
    <div>
      {/* brand */}
      <span className='text-white text-2xl'>
        Ravindu
      </span>
    </div>
    <div className=''>
      {/* items */}
      <ul className='flex md:flex-row flex-col items-center gap-[4vw]'>
        <li className='text-xl'><a className='hover:text-color1 hover:underline hover:scale-110 transition-transform duration-200 hover:underline-offset-8' href='#home'>Home</a></li>
        <li className='text-xl'><a className='hover:text-color1 hover:underline hover:scale-110 transition-transform duration-200 hover:underline-offset-8' href='#about'>About</a></li>
        <li className='text-xl'><a className='hover:text-color1 hover:underline hover:scale-110 transition-transform duration-200 hover:underline-offset-8' href='#skills'>Skills</a></li>
        <li className='text-x'><a className='hover:text-color1 hover:underline hover:scale-110 transition-transform duration-200 hover:underline-offset-8' href='#projects'>Portfolio</a></li>
        <li className='text-x'><a className='hover:text-color1 hover:underline hover:scale-110 transition-transform duration-200 hover:underline-offset-8' href='#certificates'>Certifications</a></li>
        <li className='text-x'><a className='hover:text-color1 hover:underline hover:scale-110 transition-transform duration-200 hover:underline-offset-8' href='#gallery'>Gallery</a></li>
      </ul>
    </div>
    <div>
      {/* button */}
      <button class="relative px-6 py-2 group w-fit">
                <span class="absolute inset-0  h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-color1 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-color1 border-2 border-color2 group-hover:bg-color1"></span>
                <a href='/cv/CV_RavinduDharmadasa.pdf' download={true} class="relative text-color2 group-hover:text-color2"> Download CV</a>
        </button>
    </div>
   </nav>
  <div className="w-full left-0 pl-1 visible md:hidden z-50">
   {/* burger icon */}
    {!menu && (<img src="./icons/menu1.svg" width={50} height={50} alt="" className='text-color1' onClick={showMenu}/>)}
    {menu && (<img src="./icons/close.svg" width={50} height={50} alt="" onClick={showMenu}/>)}
      {menu && ( 
        <m.nav
          animate={menu ? "open" : "closed"}
          variants={variants}
        >
          <div className="w-screen h-screen flex  justify-center items-center bg-white text-black rounded-[20px] p-2 z-50">
            <ul className='flex flex-col gap-3'>
              <a  href='#home' className='hover:bg-primaryColor hover:text-black rounded-[20px] px-2'> Home </a>
              <a  href='#about'  className='hover:bg-primaryColor hover:text-black rounded-[20px] px-2'> About </a>
              <a  href='#skills' className='hover:bg-primaryColor hover:text-black rounded-[20px] px-2'> Skills </a>
              <a  href='#projects' className='hover:bg-primaryColor hover:text-black rounded-[20px] px-2'> Portfolio </a>
              <a  href='#certificates' className='hover:bg-primaryColor hover:text-black rounded-[20px] px-2'> Certificaions </a>
              <a href='#gallery' className='hover:bg-primaryColor hover:text-black rounded-[20px] px-2'> Gallery </a>
            </ul>
          </div>
        </m.nav>
        )}
  </div> 
 </>
  )
}

export default Navbar