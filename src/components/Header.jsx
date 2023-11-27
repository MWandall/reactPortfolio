import React from 'react'

function Header() {
    const navItems = [
        {
            id: 1,
            name: "ABOUT ME"
        },
        {
            id: 2,
            name: "PORTFOLIO"
        },
        {
            id: 3,
            name: "CONTACT"
        },
        {
            id: 4,
            name: "RESUME"
        }
    ]

  return (
    <header className=' w-screen flex items-center justify-between border-b-[1px] px-5 '>
    <h1 className=" font-bold underline">
    MISHL
  </h1>
  <nav className=' flex gap-10'>
    {navItems.map((item) =>
    <div className=' cursor-pointer hover:underline hover:font-bold '>
        <h2>{item.name}</h2>
    </div>

    )}
  </nav>
  </header>

  )
}

export default Header