"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaApple } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { RiDiscountPercentLine } from "react-icons/ri";
import { BiSolidParty } from "react-icons/bi";
import { HiTemplate } from "react-icons/hi";
import { FaCloudUploadAlt } from "react-icons/fa";

const TemplateSideBar = () => {
  const pathName = usePathname();
  const [userData, setUserData] = useState({});
  //   useEffect(() => {
  //     setUserData(JSON.parse(localStorage.getItem("userData")));
  //   }, []);
  return (
    <div className="mt-8 flex flex-col gap-2 items-center px-4 text-brand-1 font-semibold">
      <Link
        href={`/ad-templates`}
        className={`sb-ele ${
          pathName === `/ad-templates` ? "bg-brand-bg2" : "bg-white"
        }`}
      >
        <HiTemplate className="text-xl" />
        <span>Ad Templates</span>
      </Link>
      <Link
        href={`/upload-templates`}
        className={`sb-ele ${
          pathName === `/upload-templates` ? "bg-brand-bg2" : "bg-white"
        }`}
      >
        <FaCloudUploadAlt className="text-xl" />
        <span>Upload Templates</span>
      </Link>
    </div>
  );
};

export default TemplateSideBar;
