"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaApple } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { RiDiscountPercentLine } from "react-icons/ri";
import { BiSolidParty } from "react-icons/bi";
import { FcAdvertising } from "react-icons/fc";
import { FaMeta } from "react-icons/fa6";
import { SiGoogleads } from "react-icons/si";
import { HiTemplate } from "react-icons/hi";

const PlatformSideBar = () => {
  const pathName = usePathname();
  return (
    <div className="mt-8 flex flex-col gap-2 items-center px-4 text-brand-1 font-semibold">
      <Link
        href={`/ad-platforms`}
        className={`sb-ele ${
          pathName === `/ad-platforms` ? "bg-brand-bg2" : "bg-white"
        }`}
      >
        <FcAdvertising className="text-2xl" />
        <span>Ad Platforms</span>
      </Link>
      <Link
        href={`/metaAds`}
        className={`sb-ele ${
          pathName === `/metaAds` ? "bg-brand-bg2" : "bg-white"
        }`}
      >
        <FaMeta className="text-xl" />
        <span>Meta Ads</span>
      </Link>
      <Link
        href={`/googleAds`}
        className={`sb-ele ${
          pathName === `/googleAds` ? "bg-brand-bg2" : "bg-white"
        }`}
      >
        <SiGoogleads className="text-xl" />
        <span>Google Ads</span>
      </Link>
    </div>
  );
};

export default PlatformSideBar;
