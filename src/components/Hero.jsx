import React from "react";
import { Button } from "@mui/material";
function Hero() {
  return (
    <section>
      <div className="">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center">
          <div className="w-full md:w-[50%] px-12 mt-10">
            <h2 className="text-xl md:text-2xl lg:text-5xl font-bold md:w-[70%] leading-tight">
              Simply explained with illustrations
            </h2>
            <p className="text-lg w-[70%] mt-3">
              There are a lot of different components that will help you create
              the perfect look for your project
            </p>
            <div className="flex gap-10 mt-5">
              <Button variant="contained">Get Started</Button>
              <Button variant="outlined">Learn More</Button>
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
      </div>
    </section>
  );
}

export default Hero;
