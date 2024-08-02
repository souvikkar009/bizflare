"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaApple } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { RiDiscountPercentLine } from "react-icons/ri";
import { BiSolidParty } from "react-icons/bi";

const DesignAdSideBar = () => {
  const pathName = usePathname();
  const [userData, setUserData] = useState({});
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);
  return (
    <div className="mt-8 flex flex-col gap-2 items-center px-4 text-brand-1 font-semibold">
      <Link
        href={`/brandAd`}
        className={`sb-ele ${
          pathName === `/brandAd` ? "bg-brand-bg2" : "bg-white"
        }`}
      >
        <FaApple className="text-xl" />
        <span>Brand Ad</span>
      </Link>
      <Link
        href={`/productAd`}
        className={`sb-ele ${
          pathName === `/productAd` ? "bg-brand-bg2" : "bg-white"
        }`}
      >
        <FaMobileAlt className="text-xl" />
        <span>Product Ad</span>
      </Link>
      <Link
        href={`/discountAd`}
        className={`sb-ele ${
          pathName === `/discountAd` ? "bg-brand-bg2" : "bg-white"
        }`}
      >
        <RiDiscountPercentLine className="text-xl" />
        <span>Discount Ad</span>
      </Link>
      <Link
        href={`/seasonalAd`}
        className={`sb-ele ${
          pathName === `/seasonalAd` ? "bg-brand-bg2" : "bg-white"
        }`}
      >
        <BiSolidParty className="text-xl" />
        <span>Seasonal Ad</span>
      </Link>
    </div>
  );
};

export default DesignAdSideBar;
