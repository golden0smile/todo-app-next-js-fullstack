import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around py-5'>
      <h1 className='text-lg font-semibold'>TODO APP</h1>
      <ul className='flex gap-[40px] text-lg'>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar
