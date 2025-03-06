import React from 'react'
import best1 from '../assets/images/best1.png'

const BestCOffee = () => {
    return (
        <div className='lg:h-[80vh] h-[180vh] bg-white flex flex-col'>
            <div className='flex justify-center mt-6'>
                <h1 className='h1  text-4xl font-bold'>Best Coffee For You</h1>
            </div>
            <div className='max-w-[1250px]  w-[90%] mx-auto mt-8'>
                <div className='mx-auto text-center w-[90%] '>
                    <p> Temukan pilihan kopi terbaik kami yang siap menemani harimu dengan rasa nikmat dan aroma khas yang memikat.</p>
                </div>
                <div className='flex flex-wrap justify-center mt-6 gap-8'>
                    <div className=' text-center shadow-xl lg:w-[30%] h-80  rounded-xl hover:bg-[#854d3d] all duration-500 ease-in-out hover:-translate-y-2 hover:text-white duration-500'>
                        <img src={best1} alt="" id='baner' />
                        <h2 className='font-semibold'>Americcano</h2>
                        <p>Kopi hitam klasik dengan cita rasa kuat, cocok untuk menemani aktivitasmu sepanjang hari.</p>
                    </div>
                    <div className=' text-center shadow-xl h-80 lg:w-[30%] rounded-xl hover:bg-[#854d3d] all duration-500 ease-in-out hover:-translate-y-2 hover:text-white duration-500'>
                        <img src={best1} alt="" id='baner2' />
                        <h2 className='font-semibold'>Espresso</h2>
                        <p>Nikmati sensasi kopi pekat khas Italia yang penuh energi dalam setiap tegukan.</p>
                    </div>
                    <div className=' text-center shadow-xl h-80 lg:w-[30%] rounded-xl hover:bg-[#854d3d] all duration-500 ease-in-out hover:-translate-y-2 hover:text-white duration-500 '>
                        <img src={best1} alt="" id='baner' />
                        <h2 className='font-semibold'>Cappucino</h2>
                        <p>Perpaduan sempurna antara 
                            espresso, susu, dan foam lembut 
                            untuk momen santaimu.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BestCOffee
