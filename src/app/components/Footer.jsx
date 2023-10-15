import React from 'react'

const Footer = () => {
  return (
    <footer className='z-10 text-[#ADB7BE]'>
        <div className='container p-12 flex justify-center'>
            <p>&copy; Abner Zacarias - {new Date().getFullYear()}</p>
        </div>
    </footer>
  )
}

export default Footer