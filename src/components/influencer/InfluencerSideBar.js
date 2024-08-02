"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaInstagram, FaUser } from "react-icons/fa";
import { AiFillNotification } from "react-icons/ai";

const InfluencerSideBar = () => {
  const pathName = usePathname();
  const [userData, setUserData] = useState({});
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);
  return (
    <>
      {userData.userRole === `influencer` && (
        <div className="flex flex-col gap-2 px-4 items-center mt-8 text-brand-1 font-semibold">
          <Link
            href={`/influencer/${userData.userId}`}
            className={`sb-ele ${
              pathName !== `/influencer-list` &&
              pathName.includes(`influencer`) &&
              !pathName.includes("campaignReqs")
                ? "bg-brand-bg2"
                : "bg-white"
            }`}
          >
            <FaUser className="text-xl" />
            <span> My Account</span>
          </Link>
          <Link
            href={`/influencer/${userData.userId}/campaignReqs`}
            className={`sb-ele ${
              pathName.includes(`/campaignReqs`) ? "bg-brand-bg2" : "bg-white"
            }`}
          >
            <AiFillNotification className="text-xl" />
            <span>Campaign Request</span>
          </Link>
          <Link
            href={`/influencer-list`}
            className={`sb-ele ${
              pathName === `/influencer-list` ? "bg-brand-bg2" : "bg-white"
            }`}
          >
            <FaInstagram />
            <span>Influencer List</span>
          </Link>
        </div>
      )}
      {userData.userRole === "client" &&
        pathName.includes("/create-influencer/") && (
          <div className="flex flex-col gap-2 px-4 items-center mt-8 text-brand-1 font-semibold">
            <Link
              href={`/create-influencer/${userData.userId}`}
              className={`sb-ele ${
                pathName.includes(`create-influencer`)
                  ? "bg-brand-bg2"
                  : "bg-white"
              }`}
            >
              <FaInstagram />
              <span>Influencer Info</span>
            </Link>
          </div>
        )}
      {userData.userRole === "client" && pathName === "/influencer-list" && (
        <div className="flex flex-col gap-2 px-4 items-center mt-8 text-brand-1 font-semibold">
          <Link
            href={`/influencer-list`}
            className={`sb-ele ${
              pathName === `/influencer-list` ? "bg-brand-bg2" : "bg-white"
            }`}
          >
            <FaInstagram />
            <span>Influencer List</span>
          </Link>
        </div>
      )}
    </>
  );
};

export default InfluencerSideBar;
