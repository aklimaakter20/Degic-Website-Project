import React from "react";
import { Button } from "@mui/material";

function Presentation2() {
  return (
    <section className="py-3 px-10 lg:px-30 font-semibold bg-linear-to-t from-sky-400 to-indigo-400">
      <div className="container mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center justify-around">
      <div className="w-[60%]">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white w-[100%] leading-tight mb-5 mt-5 text-center md:text-left">
          The quickest way to create awesome presentation
        </h2>
      
          <div className="flex flex-col md:flex-row gap-3 mb-5 ">
            <Button variant="contained" color="info">
              Get Started
            </Button>
            <Button variant="contained" color="primary">
              Learn More
            </Button>
          </div>
       
        </div>
        <div className="w-[40%]">
                <img className="w-full md:w-70 h-70 " src="presentation2.png" alt="" />
            </div>
      </div>
     

      
      </div>
    </section>
  );
}

export default Presentation2;
