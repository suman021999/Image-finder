import React from 'react'
import Search from '../Searchbar/Search'

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-900 flex items-center py-10">
          <div className="max-w-md mx-auto w-full">
            <h1 className='text-white text-2xl font-bold mb-5 text-center'>image finder</h1>
            <Search/>
          </div>
      </div>
    </>
  )
}

export default Navbar
