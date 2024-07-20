"use client";
import Image from "next/image";
import React from "react";

const ServiceCard = ({ img_src, heading, desc }) => {
  return (
    <>
      <div className="h-96 w-64 p-4 bg-brand-bg1 rounded-xl shadow-1">
        <div className="flex items-center justify-center">
          <div className="h-28 w-28 mt-6 rounded-full shadow-2 flex items-center justify-center">
            <Image src={img_src} alt={heading} width={64} height={64} />
          </div>
        </div>
        <div className="mt-6 text-xl text-center font-semibold text-brand-1">
          {heading}
        </div>
        <div className="mt-4 text-brand-2">
          {desc}
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
