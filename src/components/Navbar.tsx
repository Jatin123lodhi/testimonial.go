import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  
  return (
    <div className='border p-2 flex justify-between items-center px-4'>
        <Link href={"/dashboard"} className='font-semibold'>Testimonial</Link>
        <div>
            <button className='p-2 bg-indigo-600 text-white rounded px-4'>Sigin</button>
        </div>
    </div>
)
}

export default Navbar