import React from "react";
import { Button } from "@mui/material";
function Hero() {
  return (
    <section className="py-10 md:py-16 px-12">
      
        <div className="flex flex-col-reverse md:flex-row items-center justify-center">
          <div className="w-full md:w-[50%] mt-10">
            <h2 className="text-xl md:text-2xl lg:text-5xl font-bold md:w-[90%] w-full md:text-start text-center leading-tight">
              Simply explained with illustrations
            </h2>
            <p className="text-lg md:w-[90%] w-full text-center md:text-start mt-3">
              There are a lot of different components that will help you create
              the perfect look for your project
            </p>
            <div className="flex md:gap-10 gap-3 mx-auto w-[150px] sm:w-[400px] md:ms-0 mt-5 flex-col sm:flex-row">
              <Button variant="contained" className="w-[150px] text-sm md:text-xl">Get Started</Button>
              <Button variant="outlined" className="w-[150px] text-sm md:text-xl">Learn More</Button>
            </div>
          </div>
          <div>
            <img
              className="w-60 h-60 md:w-90 md:h-90 mx-auto"
              src="rocket.png"
              alt=""
            />
          </div>
        </div>
     
    </section>
  );
}

export default Hero;
