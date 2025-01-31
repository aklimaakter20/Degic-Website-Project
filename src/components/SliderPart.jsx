import React, { useState } from 'react'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

function SliderPart() {
    const sliderInfo = [
        {
            id: 1,
            heading: "Make more time for the work that matters most",
            des: "Best software platform for running an internet business.",
            img: "person.png"
        },
        {
            id: 2,
            heading: "Build more time for the work that matters most",
            des: "Best software platform for running an internet business.",
            img: "work3.png"
        },
        {
            id: 3,
            heading: "Take more time for the work that matters most",
            des: "Best software platform for running an internet business.",
            img: "work2.png"
        }
    ];
   
        const [currentIndex, setCurrentIndex]= useState(0);
        const prevSlide = ()=> {
            setCurrentIndex((prevIndex)=>(prevIndex === 0 ? sliderInfo.length -1 : prevIndex -1));
        }
        const nextSlide = () => {
            setCurrentIndex((prevIndex)=> (prevIndex === sliderInfo.length - 1 ? 0 : prevIndex + 1));
        }

   
    const {heading, des,img } = sliderInfo[currentIndex];

    
  return (
    <section className='py-10 lg:py-16 px-8 md:px-30 mx-auto'>
        <div className='flex flex-col-reverse justify-around md:flex-row items-center gap-20'>
            <div className='flex flex-col justify-around w-full md:1/2 space-y-6'>
            <img className='w-10 mb-4 mx-auto md:ms-5' src="logo2.png" alt="" />
            <h1 className='text-2xl md:text-5xl font-bold text-black text-center md:text-left w-full md:w-[80%]'>{heading}</h1>
            <p className='text-gray-400 text-[20px] text-center md:text-left'>{des}</p>
            <div className='flex items-center space-x-4 mt-5 mx-auto md:ms-10'>
                <button className='bg-gray-200 p-3 rounded-md hover:bg-gray-400 transition'>
                    <FaChevronLeft onClick={prevSlide} className='text-black' />
                    
                </button>
                <button onClick={nextSlide} className='bg-gray-200 p-3 rounded-md hover:bg-gray-400 transition'>
                <FaChevronRight className='text-black' />

                </button>

            </div>
            </div>
            {/* right-side */}
            <div className='w-70 sm:w-[70%] flex justify-center'>
                <img className='w-full object-cover' src={img} />
            </div>
        </div>
      
    </section>
  )
}

export default SliderPart
