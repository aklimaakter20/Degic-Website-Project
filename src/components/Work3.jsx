import React from "react";
import { Button } from '@mui/material';
import { HiOutlineCheckCircle } from "react-icons/hi";
import { FaArrowRightLong } from "react-icons/fa6";
import SendIcon from '@mui/icons-material/Send';


function Work3() {
  return (
    <section className="py-12 md:py-16 px-12 lg:px-30">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-around">
          {/* left-side */}
          <div className="w-full md:[50%] text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold mb-6 md:mb-10 w-full md:w-[80%]">
              Make more time for the work
            </h2>
            <div className="flex flex-col space-y-2 mb-10">
              <div className="flex items-center gap-3 mx-auto md:ms-5 ">
                <HiOutlineCheckCircle className="text-[#2AB691]" />
                <p>Simply explained with illustrations</p>
              </div>
              <div className="flex items-center gap-3 mx-auto md:ms-5">
                <HiOutlineCheckCircle className="text-[#2AB691]" />
                <p>Simply explained with illustrations</p>
              </div>
              <div className="flex items-center gap-3 mx-auto md:ms-5">
                <HiOutlineCheckCircle className="text-[#2AB691]" />
                <p>Simply explained with illustrations</p>
              </div>
            </div>
            <div >
            <Button variant="outlined" endIcon={<SendIcon />}>Learn More</Button>
            </div>
          </div>
          {/* right-side */}
          <div className="w-full md:[50%] mb-10">
            <img src="work3.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work3;
