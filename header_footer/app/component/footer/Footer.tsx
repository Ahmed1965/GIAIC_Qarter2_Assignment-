import React from 'react'
import { CiFacebook } from "react-icons/ci";


const Footer = () => {
  return (
    <>
    <div className=' w-full flex justify-between mr-32 mt-96 bg-slate-300'>
    <div className='ml-32'>
        <p className='p-6 text-2xl font-semibold'>Core Courses</p>
        
        <p className='font-semibold ml-5'>Programming Fundamentals</p>
        <p className='font-semibold ml-5'>Web2 Using NextJS</p>
        <p className='font-semibold ml-5'>Earn as You Learn</p>
    
        </div>
        <div>
            <p className='p-6 text-2xl font-semibold'>Advanced Courses</p> 
            <p className='font-semibold ml-5'>Web 3 and Metaverse</p>
            <p className='font-semibold ml-5'>Cloud-Native Computing</p>
            <p className='font-semibold ml-5'>Artificial Intelligence (AI) and Deep Learning</p>
            <p className='font-semibold ml-5'>Ambient Computing and IoT</p>
            <p className='font-semibold ml-5'>Genomics and Bioinformatics</p>
            <p className='font-semibold ml-5'>Network Programmability and Automation</p>
            </div> 
            <div>
            <p className='mr-10 p-6 text-2xl font-semibold'>social Link</p>
            <p className='mr-10 '>social</p>
            <CiFacebook />







            </div>
            </div>
    </>
    
        
   
    
    
    
    
    
  )
}

export default Footer




