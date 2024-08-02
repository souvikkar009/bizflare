"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { GrOrganization } from "react-icons/gr";

const UserProfileSideBar = () => {
  const pathName = usePathname();
  const [userData, setUserData] = useState({});
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);
  return (
    <div className="mt-8 flex flex-col gap-2 items-center px-4 text-brand-1 font-semibold">
      <Link
        href={`/user/${userData.userId}`}
        className={`sb-ele ${
          pathName.includes(`user`) ? "bg-brand-bg2" : "bg-white"
        }`}
      >
        <FaUser />
        <span> My Account</span>
      </Link>
      <Link
        href={
          userData.businessId
            ? `/business/${userData.businessId}`
            : `/create-business/${userData.userId}`
        }
        className={`sb-ele ${
          pathName.includes(`business`) ? "bg-brand-bg2" : "bg-white"
        }`}
      >
        <GrOrganization />
        <span>Business Info</span>
      </Link>
    </div>
  );
};

export default UserProfileSideBar;
