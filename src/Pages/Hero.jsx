import React from 'react'
import baner from '../assets/images/bg.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className=' flex flex-col md:flex-row h-[100vh] items-center ' id='hero'>


      {/* Start */}
      
        <div className=' lg:w-[50%] lg:ml-8 ml-2 mt-40 lg:mt-0'>
            <h2 className='text-[#bc9667] font-bold text-4xl lg:text-5xl lg:mt-0 ' id=''>Nikmati Hari Dengan Secangkir Kopi</h2>
          <p className='text-white mt-2'>Sejak 1992, kopi kami dibuat dengan passion dan kualitas terbaik. Dari biji yang dipilih dengan hati-hati hingga proses pemanggangan khusus, kami berkomitmen menghadirkan cita rasa kopi yang tak terlupakan.
          </p>
            <div className=' w-36 rounded-md  mt-3 h-12 items-center flex justify-center rounded-full' id='btn'>
             <button className=' text-white font-semibold'>Shop Now!</button>
            </div>
        </div>

        <div className='mt-6 lg:mt-0 flex justify-center lg:w-[60%] w-[80%]  '>
          <img src={baner} width={500} className='w-[300px] lg:w-[500px] ' id='baner'  alt=""  />
        </div>
    </div>
  )
}

export default Hero
