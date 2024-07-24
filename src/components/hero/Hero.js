"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex items-center w-full">
      <div className="w-2/5 flex flex-col gap-8 pl-16">
        <div className="w-full text-6xl leading-tight text-brand-1 font-semibold tracking-tight">
          Flare Up Your Digital Presence with BizFlare
        </div>
        <div className="text-xl text-brand-2 leading-normal">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et.
        </div>
        <div className="flex items-center gap-8 font-semibold text-center">
          <div
            className="hero-btn bg-brand-3 text-white border-2 border-brand-3"
            onClick={() => scrollToSection("serviceDisplay")}
          >
            Explore Services
          </div>

          <Link
            href={"designAd"}
            className="hero-btn bg-brand-bg1 text-brand-3 border-2 border-brand-3"
          >
            Design Ad Campaign
          </Link>
        </div>
      </div>
      <div className="flex-grow flex justify-center items-center">
        <Image
          src={"/hero/hero-img.svg"}
          height={560}
          width={560}
          alt="hero img"
        />
      </div>
    </div>
  );
};

export default Hero;
