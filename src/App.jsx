import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import ProfilePicture from './components/ProfilePicture'

function App() {
  

  return (
    <>
<Header />
<div className=' hidden md:block'>
<ProfilePicture />
</div>
</>
  )
}

export default App
