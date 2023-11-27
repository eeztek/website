import React from "react";
import "../index.css";
import logo1 from "../assets/images/4.png";
import logo2 from "../assets/images/2.png";
import logo3 from "../assets/images/3.png";
import logo4 from "../assets/images/1.png";

export function Clients() {
  return (
    // mx-auto max-w-7xl  py-5  md:px-6 md:py-10
      //  <div className="mt-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl pt-5">
         <div className="mx-auto max-w-xl text-center">
           
         <h1 className="heading-style-2  text-center ">
          Trusted By World Class Companies
      </h1>
         </div>
         <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
           <div>
            
             <div className="mx-auto flex  items-center justify-center">
               <img
            src={logo1}
            alt="logos"
            width="300" height="300"
          />
             </div>
           </div>
           <div>
             <div className="mx-auto flex  items-center justify-center">
             <img
            src={logo2}
            alt="logos"
            width="300" height="300"
          />
             </div>
             
           </div>
           <div>
             <div className="mx-auto flex items-center justify-center">
             <img
            src={logo3}
            alt="logos"
            width="300" height="300"
          />
             </div>
             
           </div>
           <div>
             <div className="mx-auto flex items-center justify-center">
             <img
            src={logo4}
            alt="logos"
            width="300" height="300"
          />
             </div>
           </div>
         </div>
       </div>
    
  );
}



{/* <>
<div className="mx-auto max-w-7xl">
  <div class="container mx-auto">
    <section class="text-center md:text-left">
      <div class="grid grid-cols-6 gap-4 items-center">
        <div class="md:mb-0 lg:ml-0 sm:ml-4">
          <h2 class="col-span-1 lg:text-5xl sm:text-2xl lg:ml-0 sm:ml-8 font-bold">Clients</h2>
        </div>
        <div className="col-span-5 ml-12 inline-flex space-x-12 justify-between items-center">
          <img
            style={{ width: "40%", height: "fit-content" }}
            src={logo1}
            alt="logos"
          />
          <img
            style={{ width: "40%", height: "fit-content" }}
            src={logo2}
            alt="logos"
          />
          <img
            style={{ width: "40%", height: "fit-content" }}
            src={logo3}
            alt="logos"
          />
          <img
            style={{ width: "40%", height: "fit-content" }}
            src={logo4}
            alt="logos"
          />
        </div>
      </div>
    </section>
  </div>
</div>
</> */}