import React from 'react'

const Header = () => {
  return (
    <header className='w-full text-center py-24 relative'>
      <div className="fixed w-full top-0 shadow-xl lg:hidden left-0 px-5 py-7 bg-white flex justify-between">
        <div className='flex items-center font-semibold gap-x-3'>
          <i className='fas fa-bars text-2xl'></i>
          <span>Menu</span>
        </div>
        <div className='flex gap-x-5 items-center'>
          <span>A</span><span className='fas fa-moon'></span><span><i className='fas fa-angle-left'></i></span>
        </div>
      </div>
      <h1 className='text-4xl text-black mt-6 lg:mt-0 font-semibold'>NazVille</h1>
      <div className="absolute z-10 hidden lg:flex bg-white w-auto gap-x-10 items-center justify-center -bottom-5 left-1/2 -translate-x-1/2 px-7 rounded-xl py-7 shadow-xl">
        <div className='flex gap-x-7 font-semibold'>
          <span>Homepage</span>
          <span>Categories</span>
          <span>Blog</span>
          <span>Styles</span>
          <span>About</span>
          <span>Contact</span>
        </div>
        <div className='flex gap-x-3'>
          <a href=""><i className='fa-brands fa-x-twitter'></i></a>
          <a href=""><i className="fa-brands fa-facebook-f"></i></a>
          <a href=""><i className='fa-brands fa-instagram'></i></a>
          <a href=""><i className='fa-brands fa-linkedin'></i></a>
        </div>
        <div className='flex gap-x-3'>
          <button>
            <i className='fa-solid fa-magnifying-glass'></i>
          </button>
          <span className='font-semibold'> @Subscribe</span>
        </div>
      </div>
    </header>
  )
}

export default Header