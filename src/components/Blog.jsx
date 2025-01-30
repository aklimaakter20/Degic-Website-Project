import React from 'react'

function Blog() {
    const BlogInfo = [
        {
            img: "blog1.png",
            heading: "Make myspace your best designed space",
            des: "A lot of different components that will help you create the perfect look for your project",
            dept:"Design"
        },
        {
            img: "blog2.png",
            heading: "My company culture has changed today",
            des: "A lot of different components that will help you create the perfect look for your project",
            dept:"3D illustrations"
        },
        {
            img: "blog3.png",
            heading: "Professionals in craft! All products were super great",
            des: "A lot of different components that will help you create the perfect look for your project",
            dept:"Development"
        }
    ]
  return (
    <section className='py-10 md:py-16 px-30'>
        <h2 className='text-xl sm:text-2xl md:text-4xl font-semibold mb-3 text-center md:text-left'>Get more from our blog</h2>
        <p className='text-[#9F9FA0] text-lg md:w-[80%] md:text-left w-full text-center '>There are a lot of different components that will help you create the perfect look for your project</p>
    
        <div className='mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                BlogInfo.map((BlogInfo, index)=>(
                    <div key={index} className='bg-[#EDEDF5] px-8 py-5 hover:bg-[#4c4c8b] hover:text-white rounded-2xl transition-all duration-1000 ease-in-out'>
                        <img className='mb-4 w-1/2 md:w-30 h-30 mx-auto' src={BlogInfo.img} alt="" />
                        <h4 className='font-semibold text-xl mb-3'>{BlogInfo.heading}</h4>
                        <p className='text-[#9F9FA0] '>{BlogInfo.des}</p>
                        <p className='text-[#0D99FF] text-sm mt-4 bg-blue-200 hover:bg-blue-600 hover:text-white transition duration-700 inline-block px-6 py-2 rounded-md'>{BlogInfo.dept}</p>
                    </div>
                ))
            }

        </div>
    
    </section>
  )
}

export default Blog
