import React from 'react'
import Navigation from '../components/Navigation'
import LoginModal from '../modals/Login'
import RegisterModal from '../modals/Register'

function Home() {
  return (
    <>
    <LoginModal />
    <RegisterModal />
    <div>
        <Navigation/>
        <div className='w-full h-screen flex flex-col justify-center items-center gap-4'>
          <h1 className='text-4xl font-sans font-extrabold text-black uppercase text-center'>Check music<span className='bg-gradient-to-r from-[#24C9EF] via-[#3484F0] to-[#3A6AF1] bg-clip-text text-transparent block text-3xl'>Copyright</span></h1>
          <div className='w-1/2 flex flex-col gap-4'>
            <div className='w-full flex'>
              <input type="text" className='bg-[#24C9EF]/5 flex-grow border-gray-400 focus:border-[#3A6AF1] border-2 rounded-md h-12 focus:outline-none p-2 text-[#3A6AF1] font-semibold' />
              <button className='btn bg-[#24C9EF] hover:bg-[#3484F0] text-black hover:text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                <p>search</p>
              </button>
            </div>
            <div className='flex flex-row justify-start gap-4'>
              <label htmlFor="title" className="flex flex-row gap-2 items-center cursor-pointer">
                <input type="radio" name="search_by" id="title" className="radio radio-info radio-xs" defaultChecked />
                <p>Search by song title</p>
              </label>
              <label htmlFor="link" className="flex flex-row gap-2 items-center cursor-pointer">
                <input type="radio" name="search_by" id="link" className="radio radio-info  radio-xs" />
                <p>Search by youtube link</p>
              </label>
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Home