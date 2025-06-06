"use client";

import React from "react";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">Achievements</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
  {companies.map((company) => (
    <div key={company.id} className="flex items-center gap-3 bg-slate-800 p-4 rounded-lg shadow-md">
      <img
        src={company.img}
        alt={company.name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <span className="text-white text-base font-medium">{company.name}</span>
    </div>
  ))}
</div>


      </div>
    </section>
  );
};

export default Clients;
