import React from 'react'
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

function Work() {
  return (
    <section className='py-12 lg:py-16 px-12'>
      <div className="container mx-auto">
        <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-5 '>
            {/* left-side */}
            <div className='w-full mx-auto lg:w-[50%] px-12'>
                <div className='flex items-center justify-center lg:justify-start gap-2'>
                <img src="Shape.png" alt="" />
                <p>Logo</p>
                </div>
                <div className='mt-5 '>
                    <div className='relative'>
                    <img className='absolute w-3 h-3 lg: -left-8 lg: top-0'  src="quotationleft.png" alt="" />

                    <h2 className='relative w-full lg:w-[80%] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-5xl text-center lg:text-left '>Make more time for the work that matters most  <img className='absolute w-3 h-3 lg: -right-2 lg: top-0' src="quotationright.png" alt="" />
                    </h2>
                    </div>
                  

                    <p className='text-[#9494A1] text-sm mt-3 text-center lg:text-left'>Best software platform for running an internet business.</p>
                </div>
               
                
            </div>
            {/* right-side */}
            <div className='w-full lg:w-[50%]'>
                <img className='w-60 h-60 md:w-90 md:h-90 mx-auto' src="person.png" alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Work
