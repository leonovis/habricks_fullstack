import React from 'react'

import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className='px-3 py-24 max-w-6xl flex flex-col gap-6 mx-auto'>
        <h1 className='text-slate-700 font-bold text-3xl lg:text-6xl'>Discover your next <span className='text-slate-500'>perfect</span>
          <br /> living space with ease
        </h1>
        <div className='text-gray-400 text-xs sm:text-sm'>
          <p> Habricks - Crafting Distinctive spaces, Connecting Dreams: Your Bespoke Real Estate Fusion Experience Begins Here.
          <br /> Let's find you a perfect match. Sign up for untethered access to our marketplace.  </p>
      </div>
      <span className='flex  gap-2'>
      <Link to={"/search"}>
      <button className='bg-slate-300 hover:bg-slate-400 text-gray-600 font-bold py-2 px-4 rounded'>
          Get Started
          </button>
      </Link>
      <Link to={"/sign-up"}>
      <button className='bg-emerald-400 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg'>
          Sign Up
          </button>
      </Link>
      </span>
      </div>
  )
};
