import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex justify-center items-center h-screen flex-col gap-4 text-center tracking-wide mx-auto'>
      <h1 className='text-5xl font-bold text-gray-800'>404 Not Found</h1>
      <p className='text-xl font-semibold text-neutral-600'>The page you are looking for does not exist or have been moved.</p>
      <Link to="/"  className='px-4 py-2 bg-gray-800 text-white font-medium rounded-lg'>Go to Home</Link>
    </div>
  )
}

export default NotFound
