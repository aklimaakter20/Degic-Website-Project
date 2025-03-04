import React from "react";
// import Button from  "@mui/material"
import { FaArrowRightLong } from "react-icons/fa6";



function Presentation() {
  const Info = [
    {
      img: "p1.png",
      heading: "Managment",
      des: "Software platform for running your new internet business",
    },
    {
      img: "p2.png",
      heading: "Entertainment",
      des: "Software platform for running your new internet business",
    },
    {
      img: "p3.png",
      heading: "Marketing",
      des: "Software platform for running your new internet business",
    },
    {
      img: "p4.png",
      heading: "References",
      des: "Software platform for running your new internet business",
    },
  ];
  return (
    <section className="py-10 md:py-16 px-12">
      <div className="container mx-auto">
        <div className="bg-[#F9F9F9] flex flex-col items-center justify-center gap-5 md:gap-16 lg:flex-row  ">
          {/* left side */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:w-full gap-6 lg:w-1/2">
            {Info.map((Info, index) => (
              <div
                key={index}
                className="w-full p-4 gap-4 bg-white rounded-xl hover:bg-gray-200 transition-all text-center"
              >
                <div className="flex items-center justify-center">
                <img className="w-20 h-20 mb-3" src={Info.img} alt="" />

                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2">{Info.heading}</h4>
                  <p>{Info.des}</p>
                </div>
              </div>
            ))}
          </div>
          {/* right side */}

          <div className="w-full lg:w-[50%] mt-10">
            <h2 className="text-xl md:text-2xl lg:text-5xl font-semibold w-full md:text-start text-center leading-tight">
            The quickest way to create modern presentation
            </h2>
            <p className="text-lg md:w-[90%] w-full text-center md:text-start mt-5 text-[#949494]">
            Best software platform for running an internet business. We build the most powerful and flexible tools for internet commerce.
            </p>
            <div className=" mt-6">
            <p className="text-[#C4C4C4] text-center md:text-left">Follow us</p>
              <div className="flex items-center justify-center gap-3 mt-3  mx-auto md:justify-start">
                <img className="hover:bg-[#C4C4C4] p-3 rounded-full transition ease-in-out duration-700" src="Vector.png" alt="" />
                <img className="hover:bg-[#C4C4C4] p-3 rounded-full transition ease-in-out duration-700" src="Vector2.png" alt="" />
                <img className="hover:bg-[#C4C4C4] p-3 rounded-full transition ease-in-out duration-700" src="Vector3.png" alt="" />

              </div>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
}

export default Presentation;
