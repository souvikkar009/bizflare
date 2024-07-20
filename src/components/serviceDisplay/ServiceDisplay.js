import React from "react";
import ServiceCard from "./ServiceCard";
import serviceCardData from "@/data/ServiceCardData";

const ServiceDisplay = () => {
  return (
    <div className="pt-32 mb-20" id="serviceDisplay">
      <div className="text-3xl font-bold text-brand-1 text-center">
        Know what BizFlare services can do for you.
      </div>
      <div className="flex items-center flex-wrap justify-center gap-12 mt-12">
        {serviceCardData.map((card) => {
          return (
            <ServiceCard
              img_src={card.img_src}
              heading={card.heading}
              desc={card.desc}
              key={card.heading}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ServiceDisplay;
