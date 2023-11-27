import React from 'react'
import { IoLogoGithub, IoLogoLinkedin, IoLogoDiscord  } from "react-icons/io5";

function Footer() {
  return (
    <footer className=' sticky bottom-0 p-10 '>
        <div className='flex flex-row justify-between gap-5 text-[30px]'>
        <IoLogoGithub className='  cursor-pointer hover:scale-125 transition-all ease-in-out'/>
        <IoLogoLinkedin className=' cursor-pointer hover:scale-125 transition-all ease-in-out'/>
        <IoLogoDiscord className=' cursor-pointer hover:scale-125 transition-all ease-in-out'/>
        </div>
        </footer>
  )
}

export default Footer