import React from 'react'
import Image from 'next/image'
import logo from '@/../public/logo.png'
import Link from 'next/link'

const Navbar = () => {
  return (
    <main className='flex justify-between w-full h-9 bg-blue-800 my-4 px-4  text-white '>
        <div className='ml-32 p-3 '>
            <Image  
            src={logo}
            alt='logo'
            width={100}
            height={100}
            
            
            />

        </div>
        <div className='p-1 text-2xl font-bold '>
            <h2>Tuition Free Education Program on Latest Technologies</h2>
        </div>
        <div className='flex gap-4 mr-8 p-1 '>
            <Link href={'/'}><p className='hover:bg-blue-500'>Home</p></Link>
            <Link href={'/apply'}><p className='hover:bg-blue-500'>Apply</p></Link>
            <Link href={'/jobs'}><p className='hover:bg-blue-500'>Jobs</p></Link>
            <Link href={'/result'}><p className='hover:bg-blue-500'>Result</p></Link>
            
            
        </div>
 



    </main>
  )
}

export default Navbar